import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {toggleStaticBody} from 'utils/misc';

import {Loader} from 'components';

import s from './LoadingWrapper.sass';

const LoadingWrapper = ({isLoading, children}) => {
  // We want to lock the overflow as hidden if in loading state
  toggleStaticBody(isLoading);

  return (
    <section>
      <div>{isLoading && <Loader />}</div>
      <div
        className={classNames({
          [s.container]: !isLoading,
        })}
      >
        {children}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(mapStateToProps)(LoadingWrapper);
