import { useEffect, useRef } from 'react';
// Utils
import { gsap } from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import styles from './index.module.scss';

export type ScrambleText = string[];
export type ScrambleTexts = ScrambleText[];

interface Props {
  content: ScrambleTexts;
  paused: boolean;
}

gsap.registerPlugin(ScrambleTextPlugin);
const chars = '▲△◀∅∏▒▢◁≈▶▣▭';

export default function ScrumbleText({ content, paused }: Props) {
  const rootEl = useRef<HTMLDivElement>(null);
  const line1El = useRef<HTMLDivElement>(null);
  const line2El = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | undefined>(null);

  useEffect(() => {
    if (tl.current) {
      tl.current.kill();
    }

    tl.current = gsap.timeline({ paused, delay: 4 });
    const delay = 1;

    for (let i = 0; i < content.length; i++) {
      const l = content[i];
      tl.current.to(line1El.current, {
        duration: 1.5,
        delay,
        scrambleText: {
          text: l[0],
          chars,
          newClass: styles.completed,
          tweenLength: false,
        },
        onStart: () => {
          gsap.set(line1El.current, { opacity: 1 });
        },
      });

      if (l[1]) {
        tl.current.to(line2El.current, {
          duration: 1.5,
          scrambleText: {
            text: l[1],
            chars,
            newClass: styles.completed,
            tweenLength: false,
          },
          onStart: () => {
            gsap.set(line2El.current, { opacity: 1 });
          },
        });
      }

      if (i < content.length - 1) {
        tl.current.to([line1El.current, line2El.current], {
          opacity: 0,
          duration: 1.5,
          delay,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(content)]);

  useEffect(() => {
    if (!tl.current) return;

    if (!paused) {
      tl.current.play();
    }
  }, [paused]);

  return (
    <div className={styles.ScrambleText} ref={rootEl}>
      <div className={styles.phrase} ref={line1El}>
        &nbsp;
      </div>
      <div className={styles.phrase} ref={line2El}>
        &nbsp;
      </div>
    </div>
  );
}
