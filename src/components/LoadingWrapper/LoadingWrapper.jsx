import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Loader from '../Loader/Loader';

import './LoadingWrapper.sass';

const LoadingWrapper = ({isLoading, children}) => (
  <section>
    <div>{isLoading && <Loader />}</div>
    <div className={isLoading ? '' : 'fadeIn'}>{children}</div>
  </section>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(mapStateToProps)(LoadingWrapper);
