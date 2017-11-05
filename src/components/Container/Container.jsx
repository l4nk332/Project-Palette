import React from 'react';
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

export default connect(mapStateToProps)(Container);
