import React from 'react';
import { Link } from 'rebass';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGlobe,
  faDownload,
  faPlay,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import {
  faItchIo,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faItchIo,
  faTwitter,
  faGithub,
  faLinkedin,
  faEnvelope,
  faGlobe,
  faDownload,
  faPlay,
  faVideo,
);

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeType, fontAwesomeIcon, name, url, color }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={true}>
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon icon={[fontAwesomeType, fontAwesomeIcon]} width="16" />
    </IconLink>
  </Tippy>
);

SocialLink.propTypes = {
  fontAwesomeType: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
