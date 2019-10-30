import PropTypes from 'prop-types';
import React from 'react';
import StyledMenuItem from './styled-menu-item';
import StyledMenu from './styled-menu';
import StyledNavigation from './styled-navigation';
import NavLink from '@/components/nav-link';

const Navigation = ({ animationType }) => {
  return (
    <StyledNavigation>
      <StyledMenu>
        <StyledMenuItem>
          <NavLink {...animationType} to="/blog">
            Blog
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <NavLink {...animationType} to="/about">
            About
          </NavLink>
        </StyledMenuItem>
      </StyledMenu>
    </StyledNavigation>
  );
};

export const NavigationPropTypes = {
  animationType: PropTypes.object,
};
Navigation.propTypes = {
  ...NavigationPropTypes,
};

Navigation.defaultProps = {
  animationType: {
    swipe: true,
    direction: 'up',
  },
};

export default Navigation;
