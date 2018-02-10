import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Link} from 'react-router-dom';

import {clearError} from 'redux/actionCreators';

import {SearchContainer, PaletteContainer} from 'containers';

import {LoadingWrapper, Anchor, Error} from 'components';

const AppContainer = ({isLoading, isError, clearError}) => (
  <LoadingWrapper isLoading={isLoading}>
    {isError ? (
      <Error
        heading="404"
        message={
          'Couldn\'t seem to find what you were looking for. ' +
          'Be sure that the repository exists on Github and is not private.'
        }
        clickHandler={clearError}
        link={
          <Link to="/">
            <Anchor>Back to Search</Anchor>
          </Link>
        }
      />
    ) : (
      <Switch>
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/:name/:project" component={PaletteContainer} />
        <Route
          render={() => (
            <Error
              heading="404"
              message="Looking for something?"
              link={
                <Link to="/">
                  <Anchor url="/">Back to Search</Anchor>
                </Link>
              }
            />
          )}
        />
      </Switch>
    )}
  </LoadingWrapper>
);

const mapDispatchToProps = {
  clearError,
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  isError: state.error,
});

AppContainer.defaultProps = {
  isError: null,
};

AppContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.object,
  clearError: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
