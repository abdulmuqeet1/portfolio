import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from 'components/Hero';
import Portfolio from 'components/portfolio';
import Pointer from 'components/pointer';
import { primaryInput } from 'utils/deviceType';
import { cursorPosition } from 'utils/events';

import { RootState } from '@/store';
import 'styles/App.scss';

window.cursor = {
  x: 0,
  y: 0,
};
window.cursorNormalized = {
  x: 0,
  y: 0,
};

function App() {
  const dispatch = useDispatch();
  const { app } = useSelector((state: RootState) => ({ app: state.app }));

  const deviceHasPointer = useMemo(() => {
    return primaryInput === 'mouse';
  }, []);

  const updatePointerPosition = useCallback(
    (e: TouchEvent | MouseEvent) => {
      const { x, y } = cursorPosition(e);
      window.cursor.x = x;
      window.cursor.y = y;
      window.cursorNormalized.x = x / app.windth - 0.5;
      window.cursorNormalized.y = y / app.height - 0.5;
    },
    [app.windth, app.height]
  );

  useEffect(() => {
    // updateAppHeight()

    // window.addEventListener('resize', updateAppHeight())
    window.addEventListener('touchstart', updatePointerPosition);
    window.addEventListener('touchmove', updatePointerPosition);
    window.addEventListener('mousemove', updatePointerPosition);
  }, [dispatch, app.windth, app.height, updatePointerPosition]);

  return (
    <div>
      <Hero />
      <Portfolio />
      {deviceHasPointer && <Pointer />}
    </div>
  );
}

export default App;
