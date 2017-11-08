import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Loader from '../Loader/Loader';

import './Container.sass';

const Container = ({isLoading, children}) => (
  <section>
    <div>{isLoading && <Loader />}</div>
    <div className={isLoading ? "" : "fadeIn"}>{children}</div>
  </section>
);

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

Container.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(mapStateToProps)(Container);
