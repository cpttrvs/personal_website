import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} color="white" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={selected}>
      {name}
    </LinkAnimated>
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
