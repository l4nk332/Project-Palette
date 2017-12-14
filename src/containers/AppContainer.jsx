import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';

import {
  SearchContainer,
  PaletteContainer,
} from 'containers';

import {
  LoadingWrapper,
  Anchor,
  Error,
} from 'components';

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
            link={<Link to="/"><Anchor url="/">Back to Search</Anchor></Link>}
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
