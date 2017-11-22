import React from 'react';
import PropTypes from 'prop-types';

import {
  BLUE,
  TURQUOISE,
  PINK,
  PURPLE,
  BLACK,
  PROJECT_PALETTE_GITHUB_URL,
} from '../../utils/constants';

import SplitView from '../../components/SplitView/SplitView';
import FlexWrapper from '../../components/FlexWrapper/FlexWrapper';
import SegmentRule from '../../components/SegmentRule/SegmentRule';
import Rule from '../../components/Rule/Rule';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Lead from '../../components/Lead/Lead';
import Paragraph from '../../components/Paragraph/Paragraph';
import Anchor from '../../components/Anchor/Anchor';
import Form from '../../components/Form/Form';

import './Search.sass';

const Search = ({formFields}) => (
  <main className="search-page">
    <FlexWrapper>
      <SplitView
        left={[
          <SegmentRule colors={[PINK, TURQUOISE, BLUE, PURPLE]} key={0} />,
          <Jumbotron title="Project Palette." key={1}>
            A <span style={{color: PINK}}>color</span> reference tool
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
