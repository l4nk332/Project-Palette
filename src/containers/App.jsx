import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import SearchView from './SearchView';
import PaletteView from './PaletteView';

import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper';

const App = ({isLoading}) => (
  <LoadingWrapper isLoading={isLoading}>
    <Switch>
      <Route exact path="/" component={SearchView} />
      <Route exact path="/:name/:project" component={PaletteView} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </LoadingWrapper>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
