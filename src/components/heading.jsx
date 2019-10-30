import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Heading = styled.h1`
  ${p => css(p.theme.heading[p.variant])};
  font-family: ${p => p.theme.fontFamily};
`;

Heading.defaultProps = {
  variant: 'primary',
};
Heading.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Heading;
