import type { ReactElement } from 'react';
import cn from 'classnames';
import style from './index.module.scss';

type Props = {
  small?: boolean;
  grid?: boolean;
  outerRightOnMobile?: boolean;
  withoutMenu?: boolean;
  children: ReactElement | ReactElement[];
  className?: string;
};

const Container = ({
  children,
  small,
  grid,
  className,
  withoutMenu,
  outerRightOnMobile,
}: Props) => {
  return (
    <div
      className={cn(style.root, className, {
        [style.small]: small,
        [style.grid]: grid,
        [style.withoutMenu]: withoutMenu,
        [style.outerRightOnMobile]: outerRightOnMobile,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
