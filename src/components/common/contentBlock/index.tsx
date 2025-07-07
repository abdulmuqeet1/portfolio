import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import breakpoints from 'utils/breakpoints';

import type { ReactElement } from 'react';
import type { RootState } from '@/store';

import style from './index.module.scss';

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  reveal?: boolean;
}

gsap.registerPlugin(SplitText);

function ContentBlock({ children, reveal = true, className }: Props) {
  const frontRef = useRef<HTMLDivElement>(null);

  const { menu } = useSelector((state: RootState) => ({
    menu: state.menu,
  }));

  const { ref, inView } = useInView();

  const isDesktop = useMediaQuery({ minWidth: breakpoints.lg });

  return (
    <div
      className={cn(style.ContentBlock, {
        [style.isDesktop]: isDesktop,
        [style.isVisible]: isDesktop && inView,
        [style.menuOpen]: menu.open,
        [style.reveal]: reveal,
      })}
      ref={ref}
    >
      {isDesktop && reveal && (
        <div className={cn(style.front, className)} ref={frontRef}>
          {children}
        </div>
      )}
      <div className={cn(style.base, className)}>{children}</div>
    </div>
  );
}

export default ContentBlock;
