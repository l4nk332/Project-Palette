import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Loader from '../Loader/Loader';

const Container = ({isLoading, children}) => (
  <section>
    {isLoading && <Loader />}
    {children}
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
