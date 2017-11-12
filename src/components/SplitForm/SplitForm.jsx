import React from 'react';
import shortid from 'shortid';

import {BLUE, TURQUOISE, PINK, PURPLE} from '../../utils/constants';
import SegmentRule from '../SegmentRule/SegmentRule';
import Rule from '../Rule/Rule';
import Jumbotron from '../Jumbotron/Jumbotron';
import Lead from '../Lead/Lead';
import SplitButton from '../SplitButton/SplitButton';
import TextField from '../TextField/TextField';

import './SplitForm.sass';

const SplitForm = () => (
  <div className="front-page">
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
        <SplitButton
          splits={[
            {
              text: 'Info',
              isActive: true,
              handler: () => {
                console.log('clicked');
              },
            },
            {
              text: 'Url',
              isActive: false,
              handler: () => {
                console.log('clicked');
              },
            },
          ]}
        />
        <form>
          <div>
            <label>Username/Organization</label>
            <TextField placeholderText="l4nk332" />
          </div>
          <div>
            <label>Project Name</label>
            <TextField placeholderText="Project Palette" />
          </div>
          <button>Analyze</button>
        </form>
      </div>
    </div>
  </div>
);

export default SplitForm;
