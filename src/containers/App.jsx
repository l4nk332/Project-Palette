import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';

import SearchView from './SearchView';
import PaletteView from './PaletteView';

import Container from '../components/Container/Container';
import Error from '../components/Error/Error';

const App = ({isLoading}) => (
  <Container isLoading={isLoading}>
    <Switch>
      <Route exact path="/" component={SearchView} />
      <Route exact path="/:name/:project" component={PaletteView} />
      <Route
        render={() => (
          <Error
            heading="404"
            message="Looking for something?"
            link={<Link to="/">Back to Search</Link>}
          />
        )}
      />
    </Switch>
  </Container>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
