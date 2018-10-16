import React from 'react';
import PropTypes from 'prop-types';

import {StackedLabel} from 'components';

import s from './DecoratedField.sass';

const DecoratedField = ({Field, Icon, label}) => {
  const assistedField = (
    <section className={s.iconAlignment}>
      {Field}
      <figure className={s.icon}>
        {Icon}
      </figure>
    </section>
  );

  const withLabel = (
    label
      ? <StackedLabel label={label}>{assistedField}</StackedLabel>
      : assistedField
  );

  return (
    <section className={s.container}>{withLabel}</section>
  );
};

DecoratedField.defaultProps = {
  Field: null,
  Icon: null,
  label: '',
};

DecoratedField.propTypes = {
  Field: PropTypes.element,
  Icon: PropTypes.element,
  label: PropTypes.string,
};

export default DecoratedField;
