import type { ReactElement } from 'react';
import cn from 'classnames';
import style from './index.module.scss';

type RowProps = {
  start?: number;
  end?: number;
  className?: string;
  children: ReactElement | ReactElement[];
};

function Row({ start = 1, end = 1, className, children }: RowProps) {
  return (
    <div
      className={cn(style.cell, className, {
        [style[`cell-start-${start}`]]: start,
        [style[`cell-end-${end}`]]: end,
      })}
    >
      {children}
    </div>
  );
}

export default Row;
