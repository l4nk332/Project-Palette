import React from 'react';
import PropTypes from 'prop-types';

import {
  TURQUOISE,
  PURPLE,
  BLACK,
  PROJECT_PALETTE_GITHUB_URL,
} from 'utils/constants';

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

import s from './Search.sass';

const Search = ({formFields}) => (
  <main className={s.container}>
    <FlexWrapper>
      <SplitView
        left={[
          <GradientRule animate key={0} />,
          <Jumbotron title="Project Palette." key={1}>
            A <ColorizedText>color</ColorizedText> reference tool
          </Jumbotron>,
          <Rule color={PURPLE} key={2} />,
          <Paragraph key={3}>
            Project Palette is an{' '}
            <Anchor url={PROJECT_PALETTE_GITHUB_URL}>
              open-source
            </Anchor>{' '}
            tool that allows you to analyze the color palette used for any
            public facing GitHub project.
          </Paragraph>,
          <Rule color={PURPLE} key={4} />,
        ]}
        right={[
          <Lead key={5}>Get Started</Lead>,
          <Rule color={BLACK} key={2} />,
          <Paragraph key={6}>
            To get started simply fill out the form below and click{' '}
            <strong style={{color: TURQUOISE}}>analyze</strong>.
          </Paragraph>,
          <Form fields={formFields} key={7} />,
        ]}
      />
    </FlexWrapper>
  </main>
);

Search.defaultProps = {
  formFields: [],
};

Search.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    }),
  ),
};

export default Search;
