import Section from 'components/common/section';
import Container from 'components/common/container';
import Row from 'components/common/row';
import ContentBlock from 'components/common/contentBlock';
import Heading from 'components/common/heading';
import Video from 'components/common/video';
import { projVidSource } from '@/utils';
import style from './index.module.scss';

function Portfolio() {
  return (
    <Section className={style.root}>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading misaligned>
            <>
              <pre className={style.pre}>I craft</pre>
              <div>
                interactive digital
                <br />
                experiences.
              </div>
              video
            </>
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={3} end={1}>
          <ContentBlock>
            <div>
              From information architecture, to researching UI elements, to maniacally curating
              interactions.
            </div>
            <div>Plus, my first love, program optimization.</div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile className={style.projectSection}>
        <Row start={2} end={2}>
          <Heading>Projects</Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock>
            <>
              <div>
                I have collaborated with companies such as: <strong>Nexi</strong>,{' '}
                <strong>Sky</strong>, <strong>Fastweb</strong>, <strong>IBL</strong>,{' '}
                <strong>Generali</strong>, <strong>Corner</strong>, <strong>AMDL Circle</strong>.
                <br />
                <br />
              </div>
              <div>Here are some of my most relevant projects.</div>
            </>
          </ContentBlock>
        </Row>
      </Container>

      <div className={style.cardContainer} id="card-container" />

      {projVidSource.map(video => (
        <Video id={video.id} src={video.src} />
      ))}
    </Section>
  );
}

export default Portfolio;
