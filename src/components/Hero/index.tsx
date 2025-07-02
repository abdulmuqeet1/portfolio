import cn from 'classnames';
import { useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import Section from 'components/common/section';
import Menu from 'components/menu';
import ScrumbleText, { ScrambleTexts } from 'components/scrambleText';

import styles from './index.module.scss';
import type { RootState } from '@/store';

const scrambleTexts: ScrambleTexts = [
  ["It's all about technology", 'and design process'],
  ['Research and innovation', 'are the driver of memorable experiences'],
  ["I'm a Software Engineer"],
  ['Muqeet.'],
];

export default function Hero() {
  const { app } = useSelector((state: RootState) => ({
    app: state.app,
  }));
  // const { gone } = useScrollOffset({ offset: isTabletOrDesktop ? 200 : 50 })

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.logo}>logo</div>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
      </header>
      <Section className={styles.Hero}>
        <div className={styles.middle}>
          <span className={styles.line} />
          <div className={styles.scroll}>
            <ScrumbleText content={scrambleTexts} paused={!app.ready} key={scrambleTexts[0][0]} />
          </div>
        </div>
        {/* <div className={cn(styles.scroll, {[styles.gone]: gone || menu.open || !app.ready})}> */}
        <div className={cn(styles.scroll, { [styles.gone]: !app.ready })}>
          <span className={styles.scrollIndicator} />
          <div>
            <span className={styles.scrollText}>Scroll Down</span>
            <span className={styles.scrollText}>To See More</span>
          </div>
        </div>
      </Section>
    </>
  );
}
