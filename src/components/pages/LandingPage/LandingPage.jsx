import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {
  TURQUOISE,
  PURPLE,
  BLACK,
  PROJECT_PALETTE_GITHUB_URL,
} from 'utils/constants';

import {FadeContainer} from 'containers';

import {
  SplitView,
  FlexWrapper,
  GradientRule,
  Rule,
  Jumbotron,
  Lead,
  Paragraph,
  Anchor,
  Form,
  ColorizedText,
} from 'components';

import s from './LandingPage.sass';

const LandingPage = ({formFields}) => (
  <main className={s.container}>
    <FadeContainer>
      <FlexWrapper>
        <SplitView
          left={
            <section className={s.left}>
              <GradientRule animate />
              <Jumbotron title="Project Palette.">
                A <ColorizedText>color</ColorizedText> reference tool
              </Jumbotron>
              <Rule color={PURPLE} />
              <Paragraph className={s.about}>
                Project Palette is an {' '}
                <Anchor url={PROJECT_PALETTE_GITHUB_URL}>
                  open-source
                </Anchor>{' '}
                tool that allows you to analyze the color palette used for any
                public facing GitHub project.
              </Paragraph>
            </section>
          }
          right={
            <Fragment>
              <Lead>Get Started</Lead>
              <Rule color={BLACK} />
              <Paragraph>
                To get started simply fill out the form below and click{' '}
                <strong style={{color: TURQUOISE}}>analyze</strong>.
              </Paragraph>
              <Form fields={formFields} />
            </Fragment>
          }
        />
      </FlexWrapper>
    </FadeContainer>
  </main>
);

LandingPage.defaultProps = {
  formFields: [],
};

LandingPage.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    }),
  ),
};

export default LandingPage;
