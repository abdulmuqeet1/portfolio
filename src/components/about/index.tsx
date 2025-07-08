import Section from 'components/common/section';
import Container from 'components/common/container';
import Row from 'components/common/row';
import ContentBlock from 'components/common/contentBlock';
import ImageTrigger from 'components/common/imageTrigger';
// import Square from 'components/Square'
import Heading from 'components/common/heading';
import List, { ListItem } from 'components/common/list';

import style from './index.module.scss';

function About() {
  // const intro: string[] = t('intro', { returnObjects: true });
  // const clanTitle: string = t('clan_title');
  // const clan: string[] = t('clan', { returnObjects: true });
  // const methodTitle: string = t('method_title');
  // const method: string[] = t('method', { returnObjects: true });

  return (
    <Section className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <div className={style.section}>
            <ContentBlock>
              <>
                I was born in <ImageTrigger name="venice" /> in september '86, today I live in Como
                and work at <ImageTrigger name="sketchin" />, an advanced-design studio, as Creative
                Technologist.
                <br />
                <pre>Twenty/ys</pre>ago the first
                <br />
                version of
                <br /> TheyCallMeGiulio
              </>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading>
            <>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatem?
              <br />
              Since then I have been designing and implementing virtual experiences. I have studied
              different programming languages and databases to cover the whole stack. Today I think
              in javascript.
            </>
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock>
            <>
              I was born in <ImageTrigger name="venice" /> in september '86, today I live in Como
              and work at <ImageTrigger name="sketchin" />, an advanced-design studio, as Creative
              Technologist.
              <br />
              <pre>Twenty/ys</pre>ago the first
              <br />
              version of
              <br /> TheyCallMeGiulio
            </>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight>
              <>
                Numbers
                <br />
                One
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <div className={style.columns}>
            <ContentBlock>
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum consectetur
                praesentium at id nisi, odio magni.
                <br />
                Obcaecati deleniti voluptate rerum alias molestias facilis consectetur quod
                dignissimos debitis, sequi accusantium aut voluptas mollitia id? Numquam ad delectus
                tempora quisquam non aut doloremque ullam, voluptates adipisci eaque ipsam id, enim
                atque dolorem distinctio voluptatem sunt veritatis? Corporis adipisci nostrum quos
                nisi tempore, natus molestias distinctio
                <br />
                quis neque autem ipsa laborum vero voluptas repudiandae repellendus, ad aperiam enim
                veniam optio tenetur deleniti debitis? Voluptatibus laborum odio soluta dignissimos
                id ipsa, quidem asperiores, impedit quaerat exercitationem inventore, facere vel
                molestias modi quae quia. Sequi.
              </>
            </ContentBlock>
            <ContentBlock>
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum consectetur
                praesentium at id nisi, odio magni.
                <br />
                Obcaecati deleniti voluptate rerum alias molestias facilis consectetur quod
                dignissimos debitis, sequi accusantium aut voluptas mollitia id? Numquam ad delectus
                tempora quisquam non aut doloremque ullam, voluptates adipisci eaque ipsam id, enim
                atque dolorem distinctio voluptatem sunt veritatis? Corporis adipisci nostrum quos
                nisi tempore, natus molestias distinctio
                <br />
                quis neque autem ipsa laborum vero voluptas repudiandae repellendus, ad aperiam enim
                veniam optio tenetur deleniti debitis? Voluptatibus laborum odio soluta dignissimos
                id ipsa, quidem asperiores, impedit quaerat exercitationem inventore, facere vel
                molestias modi quae quia. Sequi.
              </>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading>
              <>
                Method
                <br />
                <pre>&</pre>Acknowledgements
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock>
            <div>
              Creating a successful product is not just about having beautiful aesthetics and
              impressive animations.
              <br />
              The effectiveness and usability of a project depends on the synergies formed between
              designer and developer.
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading>
              <>
                I emphasize Lean and Agile
                <br />
                methodologies
              </>
            </Heading>
            <Heading alignRight>
              <>
                I promote continuous, attitudinal
                <br />
                and methodical improvement
                <br />
                for myself and others
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock>
              <div>
                If international recognition comes on top of that, it is a greater satisfaction.
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              <ListItem end="x6">Awwwards</ListItem>
              <ListItem end="x6">CSS Design Awards</ListItem>
              <ListItem end="x1">FWA</ListItem>
              <ListItem end="x3">iF Design Award</ListItem>
              <ListItem end="x8">Other</ListItem>
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  );
}
export default About;
