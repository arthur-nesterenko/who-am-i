import PropTypes from 'prop-types';
import React from 'react';
import StyledAvatar, { StyledAvatarPropTypes } from './styled-avatar';
import useAvatar from './use-avatar';
import useSiteMetadata from '@/hooks/use-site-metadata';
import { useTheme } from 'emotion-theming';

const Avatar = props => {
  const avatar = useAvatar();
  const data = useSiteMetadata();
  const theme = useTheme();
  return (
    <StyledAvatar
      {...props}
      alt={data.author}
      objectFit="contain"
      backgroundColor={theme.colors.white}
      fluid={avatar.childImageSharp.fluid}
    />
  );
};

Avatar.propTypes = {
  ...StyledAvatarPropTypes,
};

export default Avatar;
