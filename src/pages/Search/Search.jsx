import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {BLUE, TURQUOISE, PINK, PURPLE} from '../../utils/constants';
import formProps from '../../data/searchPageData';

import SplitView from '../../components/SplitView/SplitView';
import FlexWrapper from '../../components/FlexWrapper/FlexWrapper';
import SegmentRule from '../../components/SegmentRule/SegmentRule';
import Rule from '../../components/Rule/Rule';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Lead from '../../components/Lead/Lead';
import Form from '../../components/Form/Form';
import Paragraph from '../../components/Paragraph/Paragraph';

import './Search.sass';


const Search = () => (
  <main className="search-page">
    <FlexWrapper>
      <SplitView
        left={[
          <SegmentRule
            colors={[PINK, TURQUOISE, BLUE, PURPLE]}
            key={shortid.generate()}
          />,
          <Jumbotron
            title="Project Palette."
            key={shortid.generate()}
          >
            A <span style={{color: PINK}}>color</span> reference tool
          </Jumbotron>,
          <Rule color={PURPLE} key={shortid.generate()} />,
          <Paragraph key={shortid.generate()}>
            Project Palette is an open-source tool that allows you to analyze
            the color palette used for any public facing GitHub project.
          </Paragraph>,
          <Rule color={PURPLE} key={shortid.generate()} />,
        ]}
        right={[
          <Lead key={shortid.generate()}>Get Started</Lead>,
          <Paragraph key={shortid.generate()}>
            To get started simply fill out the form below and click{' '}
            <strong style={{color: BLUE}}>analyze</strong>.
          </Paragraph>,
          <Form fields={formProps} key={shortid.generate()} />,
        ]}
      />
    </FlexWrapper>
  </main>
);

export default Search;
