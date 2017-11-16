import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import SearchContainer from './SearchContainer';
import PaletteContainer from './PaletteContainer';

import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper';

const AppContainer = ({isLoading}) => (
  <LoadingWrapper isLoading={isLoading}>
    <Switch>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/:name/:project" component={PaletteContainer} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </LoadingWrapper>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

AppContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(AppContainer));
