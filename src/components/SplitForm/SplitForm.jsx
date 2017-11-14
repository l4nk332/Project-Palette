import React from 'react';

import {BLUE, TURQUOISE, PINK, PURPLE} from '../../utils/constants';
import SegmentRule from '../SegmentRule/SegmentRule';
import Rule from '../Rule/Rule';
import Jumbotron from '../Jumbotron/Jumbotron';
import Lead from '../Lead/Lead';
import Form from '../Form/Form';

import formProps from '../../data/searchPageData';

import './SplitForm.sass';

const SplitForm = () => (
  <div className="split-form">
    <div className="half-split dark">
      <SegmentRule colors={[PINK, TURQUOISE, BLUE, PURPLE]} />
      <Jumbotron title="Project Palette.">
        A <span style={{color: PINK}}>color</span> reference tool
      </Jumbotron>
      <Rule color={PURPLE} />
      <p>
        Project Palette is an open-source tool that allows you to analyze the
        color palette used for any public facing GitHub project.
      </p>
      <Rule color={PURPLE} />
    </div>
    <div className="half-split light">
      <Lead>Get Started</Lead>
      <p>
        To get started simply fill out the form below and click{' '}
        <strong style={{color: BLUE}}>analyze</strong>.
      </p>
      <Form fields={formProps} />
    </div>
  </div>
);

export default SplitForm;
