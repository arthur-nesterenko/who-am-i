import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledNavLink = styled(AniLink)`
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  color: inherit;
  font-weight: 600;
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
