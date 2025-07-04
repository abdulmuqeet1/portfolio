import { useCallback, useEffect, useMemo } from 'react';
import Hero from 'components/Hero';
import Pointer from 'components/pointer';
import 'styles/App.scss';
import { primaryInput } from 'utils/deviceType';
import { cursorPosition } from './utils/events';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

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
      {deviceHasPointer && <Pointer />}
    </div>
  );
}

export default App;
