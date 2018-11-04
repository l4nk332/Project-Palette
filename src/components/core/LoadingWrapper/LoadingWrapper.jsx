import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleStaticBody} from 'utils/misc';

import {Loader} from 'components';

const LoadingWrapper = ({isLoading, children, message}) => {
  // We want to lock the overflow as hidden if in loading state
  toggleStaticBody(isLoading);

  return (
    <section>
      <div>{isLoading && <Loader message={message} />}</div>
      <div>{children}</div>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

LoadingWrapper.defaultProps = {
  message: null,
};

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  message: PropTypes.string,
};

export default connect(mapStateToProps)(LoadingWrapper);
