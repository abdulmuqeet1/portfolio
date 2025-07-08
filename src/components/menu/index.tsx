import { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import useMediaQuery from 'react-responsive';
import gsap from 'gsap';
import breakpoints from 'utils/breakpoints';
import { cursorPosition } from '@/utils/events';
import useMainMenu from 'hooks/useMainMenu';

import { setPointerType } from '@/store/app/app';
import { open } from '@/store/app/menuSlice';

import styles from './index.module.scss';
import type { RootState } from '@/store';

export default function Menu() {
  const dispatch = useDispatch();
  const circleEl = useRef<HTMLDivElement>(null);
  const endEl = useRef<HTMLDivElement>(null);

  const { isScrolling } = useMainMenu();

  const { app, menu } = useSelector((state: RootState) => ({
    app: state.app,
    menu: state.menu,
  }));

  const isDesktop = useMediaQuery({ minWidth: breakpoints.lg });
  const [circleTop, setCircleTop] = useState<number>(0);
  const [endTop, setEndTop] = useState<number>(0);
  const [appLoading, setAppLoading] = useState<boolean>(true);

  const closeMenu = useCallback(
    (event: MouseEvent | TouchEvent) => {
      window.removeEventListener('mouseup', closeMenu);
      window.removeEventListener('touchend', closeMenu);

      const eventType = isDesktop ? 'mouseup' : 'touchend';
      if (event.type !== eventType) return;

      dispatch(open(false));
      dispatch(setPointerType('default'));
    },
    [dispatch, isDesktop]
  );

  const openMenu = useCallback(
    (event: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
      const eventType = isDesktop ? 'mousedown' : 'touchstart';

      if (isScrolling || event.type !== eventType) return;

      dispatch(open(true));
      dispatch(setPointerType('default'));

      window.removeEventListener('mouseup', closeMenu);
      window.removeEventListener('touchend', closeMenu);
    },
    // [dispatch, menu, app.pointerType, isDesktop, isScrolling, closeMenu]
    [dispatch, isDesktop, isScrolling, closeMenu]
  );

  const syncYAxe = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!circleEl.current) return;

      const { y: cursorY } = cursorPosition(e);
      const absCurrCircleT = cursorY - 25;
      const currCircleT = cursorY - circleTop - 25;

      let y = 0;
      if (absCurrCircleT < circleTop) {
        y = 0;
      } else if (absCurrCircleT > endTop) {
        y = endTop - circleTop;
      } else {
        y = currCircleT;
      }

      gsap.to(circleEl.current, {
        y,
        duration: 0.3,
      });
    },
    [circleTop, endTop]
  );

  const overHandler = useCallback(() => {
    // play()
    dispatch(setPointerType('drag'));
    // }, [app.pointerType, play])
  }, [dispatch]);

  const outHandler = useCallback(() => {
    dispatch(setPointerType('default'));
  }, [dispatch]);

  useEffect(() => {
    if (menu.open) {
      window.addEventListener('mousemove', syncYAxe);
      window.addEventListener('touchmove', syncYAxe);
    } else {
      window.removeEventListener('mousemove', syncYAxe);
      window.removeEventListener('touchmove', syncYAxe);
      gsap.killTweensOf(circleEl.current);
      gsap.set(circleEl.current, { clearProps: 'all', delay: 0.5 });
    }
  }, [menu.open, syncYAxe]);

  // Saving boundaries on app ready and on resize
  useEffect(() => {
    if (!app.ready) return;

    if (circleEl.current) {
      requestAnimationFrame(() => {
        if (!circleEl.current || !endEl.current) return;
        setCircleTop(circleEl.current.getBoundingClientRect().top);
        setEndTop(endEl.current.getBoundingClientRect().top);
      });
    }
  }, [app.ready, menu, app.height]);

  useEffect(() => {
    if (app.ready) {
      setTimeout(() => {
        setAppLoading(false);
      }, 1700);
    }
  }, [app.ready]);

  return (
    <div className={styles.Menu}>
      <div
        className={cn(styles.menuContainer, {
          [styles.open]: menu.open,
          [styles.notReady]: appLoading,
          [styles.hidden]: location.pathname !== '/',
        })}
      >
        <button
          className={styles.button}
          onMouseEnter={overHandler}
          onMouseLeave={outHandler}
          onMouseDown={openMenu}
          onTouchStart={openMenu}
        >
          <div className={styles.circle} ref={circleEl}>
            Drop
          </div>

          <div className={styles.labels}>
            <span className={styles.labelMenu}>Menu</span>
            <span className={styles.labelDrag}>Drag</span>
          </div>

          <div className={styles.start}></div>
          <div className={styles.line} />
          <div className={styles.end} ref={endEl}></div>
        </button>
      </div>
    </div>
  );
}
