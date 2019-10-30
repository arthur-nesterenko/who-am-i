import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledNavLink = styled(AniLink)`
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: inherit;
  font-weight: 500;
`;

const activeStyles = css`
  text-decoration: underline;
`;

const NavLink = props => {
  return (
    <StyledNavLink {...props} activeStyle={{ textDecoration: 'underline' }} />
  );
};

export default NavLink;
