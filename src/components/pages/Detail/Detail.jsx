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
  defaultBranch,
}) => (
  <FixedWrapper color={color}>
    <CloseIcon handleClick={handleClose} />
    <Heading>{color}</Heading>
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
};

export default Detail;
