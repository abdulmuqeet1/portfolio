import type { ReactElement } from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addImage, showImage } from '@/store/app/imageSlice';
import { setPointerType } from '@/store/app/app';
import styles from './index.module.scss';

interface Props {
  children?: ReactElement;
  name: string;
  sizes?: [number, number];
}

function ImageTrigger({ children, name, sizes = [3, 2] }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addImage({ name, sizes }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, name, sizes[0], sizes[1]]);

  const showImageHandler = useCallback(() => {
    dispatch(setPointerType({ pointerType: 'image' }));
    dispatch(showImage({ name, showImage: true }));
  }, [dispatch, name]);

  const hideImageHandler = useCallback(() => {
    dispatch(setPointerType({ pointerType: 'default' }));
    dispatch(showImage({ name, showImage: false }));
  }, [dispatch, name]);

  return (
    <em
      className={styles.ImageTrigger}
      onMouseDown={showImageHandler}
      onMouseLeave={hideImageHandler}
    >
      {children}
    </em>
  );
}

export default ImageTrigger;
