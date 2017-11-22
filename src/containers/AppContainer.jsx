import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';

import SearchContainer from './SearchContainer';
import PaletteContainer from './PaletteContainer';

import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper';
import Error from '../components/Error/Error';

const AppContainer = ({isLoading}) => (
  <LoadingWrapper isLoading={isLoading}>
    <Switch>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/:name/:project" component={PaletteContainer} />
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
  </LoadingWrapper>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

AppContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(AppContainer));
