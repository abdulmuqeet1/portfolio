import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import textFit from '@/vendor/textfit';

import type { RootState } from '@/store';
import type { RefObject } from 'react';

type Props = RefObject<HTMLDivElement | HTMLDivElement[] | null>;

function useTextFit(refs: Props) {
  const { app } = useSelector((state: RootState) => ({
    app: state.app,
  }));

  useEffect(() => {
    if (!refs || !app.ready) return;

    // const elements = (Array.isArray(refs) ? refs.map(r => r.current) : refs.current) as
    //   | HTMLDivElement
    //   | HTMLDivElement[];

    // textFit(elements, { widthOnly: true, detectMultiLine: false, maxFontSize: 400 });

    // }, [app.ready, app.windth]);
  }, [app.ready, app.windth, refs]);

  return null;
}

export default useTextFit;
