import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import StyledSocialLinkList from './styled-social-link-list';
import StyledSocialLinItem from './styled-social-link-item';
import useSiteMetadata from '@/hooks/use-site-metadata';

/**
 *
 * @param name
 * @returns {*}
 */
const getIcon = name => require('react-icons/fa')[name];
/**
 *
 * @param iconTheme
 * @returns {*}
 * @constructor
 */
const SocialLinkList = ({ iconTheme }) => {
  const { authorSocialLinks } = useSiteMetadata();

  return (
    <StyledSocialLinkList>
      {authorSocialLinks.map(social => (
        <StyledSocialLinItem key={social.name} iconTheme={iconTheme}>
          <a href={social.url.concat(social.nickname)} target="_blank">
            {createElement(getIcon(`Fa${social.name}`), { size: 24 })}
          </a>
        </StyledSocialLinItem>
      ))}
    </StyledSocialLinkList>
  );
};

SocialLinkList.defaultProps = {
  iconTheme: 'light',
};

SocialLinkList.propTypes = {
  iconTheme: PropTypes.oneOf(['dark', 'light']),
};

export default SocialLinkList;
