import React from 'react';

import {BLUE, TURQUOISE, PINK, PURPLE} from '../../utils/constants';
import SegmentRule from '../SegmentRule/SegmentRule';
import Rule from '../Rule/Rule';

import './SplitForm.sass';

const SplitForm = () => (
  <div className="front-page">
    <div className="split-form">
      <div className="half-split dark">
        <SegmentRule colors={[PINK, TURQUOISE, BLUE, PURPLE]} />
        <div className="title-section">
          <h1 className="main-title">Project Palette.</h1>
          <p className="second-title">A color reference tool.</p>
        </div>
        <Rule color={PURPLE} />
        <p>
          Project Palette is an open-source tool that allows you to analyze the
          color palette used for any public facing GitHub project.
        </p>
        <Rule color={PURPLE} />
      </div>
      <div className="half-split light">
        <h3 className="second-title">Get Started</h3>
        <p>
          To get started simply fill out the form below and click{' '}
          <strong>analyze</strong>.
        </p>
        <div className="split-button">
          <span className="active">Info</span>
          <span>Url</span>
        </div>
        <form>
          <div>
            <label>Username/Organization</label>
            <input type="text" placeholder="l4nk332" />
          </div>
          <div>
            <label>Project Name</label>
            <input type="text" placeholder="Project-Palette" />
          </div>
          <button>Analyze</button>
        </form>
      </div>
    </div>
  </div>
);

export default SplitForm;
