import type { ReactElement } from 'react';
import style from './index.module.scss';

interface Props {
  children: ReactElement[];
}

interface ListItemProps {
  children: string;
  end: string;
}

function ListItem({ children, end }: ListItemProps) {
  return (
    <div className={style.ListItem}>
      <span>{children}</span>
      <span>{end}</span>
    </div>
  );
}

function List({ children }: Props) {
  return <div className={style.List}>{children}</div>;
}

export default List;
export { ListItem };
