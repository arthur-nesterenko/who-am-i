import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Heading = styled.h1`
  ${p => css(p.theme.heading[p.variant])};
`;

Heading.defaultProps = {
  variant: 'dark',
};
Heading.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'dark']),
};

export default Heading;
