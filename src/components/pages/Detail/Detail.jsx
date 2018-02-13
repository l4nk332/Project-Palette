import React from 'react';
import PropTypes from 'prop-types';

import NextIcon from 'react-icons/lib/io/ios-arrow-forward';
import PreviousIcon from 'react-icons/lib/io/ios-arrow-back';

import {
  FixedWrapper,
  LocationList,
  Heading,
  CloseIcon,
} from 'components';

import s from './Detail.sass';


const Detail = ({
  color,
  handleClose,
  locations,
  projectUrl,
  defaultBranch,
  nextColor,
  previousColor,
}) => (
  <FixedWrapper color={color}>
    <CloseIcon handleClick={handleClose} />
    <Heading>{color}</Heading>
    <PreviousIcon className={s.previous} onClick={previousColor} />
    <NextIcon className={s.next} onClick={nextColor} />
    <LocationList
      color={color}
      locations={locations}
      projectUrl={projectUrl}
      defaultBranch={defaultBranch}
    />
  </FixedWrapper>
);

Detail.propTypes = {
  handleClose: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectUrl: PropTypes.string.isRequired,
  defaultBranch: PropTypes.string.isRequired,
  nextColor: PropTypes.func.isRequired,
  previousColor: PropTypes.func.isRequired,
};

export default Detail;
