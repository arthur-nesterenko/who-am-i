import PropTypes from 'prop-types';
import React from 'react';
import StyledAvatar, { StyledAvatarPropTypes } from './styled-avatar';

const Avatar = props => {
  return <StyledAvatar {...props} alt={'Arthur Nesterenko'} />;
};

Avatar.propTypes = {
  ...StyledAvatarPropTypes,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: 'https://avatars3.githubusercontent.com/u/13137529?s=460&v=4',
};

export default Avatar;
