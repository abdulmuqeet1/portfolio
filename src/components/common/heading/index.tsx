import { useRef, useCallback, useEffect } from 'react';
import cn from 'classnames';
import breakpoints from 'utils/breakpoints';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import useTextFit from '@/hooks/useTextFit';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import type { ReactElement } from 'react';
import type { RootState } from '@/store';
import style from './index.module.scss';

type Props = {
  children?: ReactElement | string;
  alignRight?: boolean;
  misaligned?: boolean;
  className?: string;
};

gsap.registerPlugin(SplitText);

function Heading({ children, alignRight, misaligned, className }: Props) {
  const { app, menu } = useSelector((state: RootState) => ({
    app: state.app,
    menu: state.menu,
  }));

  const isDesktop = useMediaQuery({ minWidth: breakpoints.lg });
  const { ref, inView } = useInView();

  const ref1 = useRef<HTMLDivElement>(null);
  const splitText = useRef<SplitText | null>(null);

  useTextFit(ref1);

  const splitChars = useCallback(() => {
    // debugger
    // Restore splitted text
    if (splitText.current) {
      splitText.current.revert();
    }
    // New split text
    const elements = ref1.current?.querySelectorAll('.textFitted');
    if (elements) {
      splitText.current = new SplitText(elements, {
        type: 'lines,chars',
        linesClass: `${style.line}`,
        charsClass: `${style.char}`,
      });
    }
  }, []);

  useEffect(() => {
    if (app.scroll && isDesktop) {
      splitChars();
    }
  }, [isDesktop, splitChars, app.windth, app.scroll]);

  useEffect(() => {
    // It it was desktop, but user resizes to mobile
    if (!isDesktop && splitText.current) {
      splitText.current.revert();
    }
  }, [isDesktop]);

  return (
    <div ref={ref}>
      <div
        ref={ref1}
        className={cn(style.root, className, {
          [style.alignRight]: alignRight,
          [style.misaligned]: misaligned,
          [style.isVisible]: isDesktop && inView,
          [style.menuOpen]: menu.open,
        })}
      >
        {children}
      </div>
    </div>
  );
}
export default Heading;
