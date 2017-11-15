import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {BLUE, TURQUOISE, PINK, PURPLE} from '../utils/constants';
import formProps from '../data/searchPageData';

import SplitView from '../components/SplitView/SplitView';
import FlexWrapper from '../components/FlexWrapper/FlexWrapper';
import SegmentRule from '../components/SegmentRule/SegmentRule';
import Rule from '../components/Rule/Rule';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Lead from '../components/Lead/Lead';
import Form from '../components/Form/Form';


class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = event => {
    const newSearch = event.target.value;
    this.setState({search: newSearch});
  };

  handleEnterKeySubmission = event => {
    const isEnterKey = event.keyCode === 13;
    const trimmedSearch = this.state.search.trim();

    if (trimmedSearch && isEnterKey) {
      this.submitSearchQuery();
    }
  };

  submitSearchQuery = () => {
    const {search} = this.state;
    this.props.history.push(search);
  };

  render = () => (
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
          <p key={shortid.generate()}>
            Project Palette is an open-source tool that allows you to analyze
            the color palette used for any public facing GitHub project.
          </p>,
          <Rule color={PURPLE} key={shortid.generate()} />,
        ]}
        right={[
          <Lead key={shortid.generate()}>Get Started</Lead>,
          <p key={shortid.generate()}>
            To get started simply fill out the form below and click{' '}
            <strong style={{color: BLUE}}>analyze</strong>.
          </p>,
          <Form fields={formProps} key={shortid.generate()} />,
        ]}
      />
    </FlexWrapper>)
}

SearchView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchView;
