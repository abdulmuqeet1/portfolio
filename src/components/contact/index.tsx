import { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import Section from 'components/common/section';
import Container from 'components/common/container';
import Row from 'components/common/row';
import ContentBlock from 'components/common/contentBlock';
import Heading from 'components/common/heading';
import { setPointerType } from '@/store/app/app';
import style from './index.module.scss';

function Contact() {
  const dispatch = useDispatch();

  const { ref, inView } = useInView();

  const overHandler = useCallback(() => {
    dispatch(setPointerType('hover'));
  }, [dispatch]);

  const outHandler = useCallback(() => {
    dispatch(setPointerType('default'));
  }, [dispatch]);

  return (
    <Section className={style.root}>
      <Container grid>
        <Row start={1} end={1}>
          <ContentBlock>
            <>Contact</>
          </ContentBlock>
        </Row>
        <Row start={1} end={3}>
          <div
            className={style.section}
            ref={ref}
            onMouseEnter={overHandler}
            onMouseLeave={outHandler}
          >
            <Heading
              className={cn({
                [style.isEmailVisible]: inView,
              })}
            >
              <div>
                <div className={style.emailContainer}>
                  <a className={style.email} href="mailto:work@giulio.me">
                    work@giulio.me
                  </a>
                </div>
              </div>
            </Heading>
          </div>
        </Row>
        <Row start={1} end={1}>
          <ContentBlock>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis.
            </div>
          </ContentBlock>
        </Row>
        <Row start={2} end={1}>
          <ContentBlock>
            <div>
              <ul className={style.list}>
                <li>
                  <a
                    href="https://twitter.com/this_is_giulio"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Giulico"
                    onMouseEnter={overHandler}
                    onMouseLeave={outHandler}
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  );
}
export default Contact;
