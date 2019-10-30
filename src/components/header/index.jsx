import React from 'react';
import StyledHeader from './styled-header';
import Avatar from '@/components/avatar';
import Navigation, { NavigationPropTypes } from '@/components/navigation';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Header = ({ animationType }) => {
  return (
    <StyledHeader>
      <AniLink to="/" swipe direction="down">
        <Avatar size={50} borderSize={2} />
      </AniLink>
      <Navigation animationType={animationType} />
    </StyledHeader>
  );
};

Header.propTypes = {
  ...NavigationPropTypes,
};

export default Header;
