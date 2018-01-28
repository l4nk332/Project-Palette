import React from 'react';
import PropTypes from 'prop-types';

import {
  FixedWrapper,
  LocationList,
  Heading,
  CloseIcon,
} from 'components';


const Detail = ({
  color,
  handleClose,
  locations,
  projectUrl,
}) => (
  <FixedWrapper color={color}>
    <CloseIcon handleClick={handleClose} />
    <Heading>{color}</Heading>
    <LocationList
      color={color}
      locations={locations}
      projectUrl={projectUrl}
    />
  </FixedWrapper>
);

Detail.propTypes = {
  handleClose: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default Detail;
