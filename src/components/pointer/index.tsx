import { gsap } from 'gsap';
import cn from 'classnames';
import { useEffect, useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import style from './index.module.scss';
import type { RootState } from '@/store';

function Pointer() {
  const pointer = useSelector((state: RootState) => state.app.pointerType);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mouseOut, setMouseOut] = useState(false);

  const update = useCallback(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, {
        x: window.cursor?.x,
        y: window.cursor?.y,
      });
    }

    requestAnimationFrame(update);
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      setMouseOut(true);
      return;
    }

    setMouseOut(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mouseout', handleMouseOut);
    // window.addEventListener('mouseenter', handleMouseOut);

    return () => {
      window.removeEventListener('mouseout', handleMouseOut);
      // window.removeEventListener('mouseenter', handleMouseOut);
    };
  }, [handleMouseOut]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div
      className={cn(style.Pointer, {
        [style.dark]: location.pathname !== '/',
        [style[`type-${pointer}`]]: pointer,
        [style.mouseOut]: mouseOut,
      })}
      ref={cursorRef}
    >
      <div className={style.leftLine} />
      <div className={style.rightLine} />
      <div className={style.circle} />
    </div>
  );
}
export default Pointer;
