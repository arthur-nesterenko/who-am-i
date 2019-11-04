import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledFooter = styled.footer`
  padding: 3rem 0 2rem;
  text-align: center;
  display: flex;
  ${p =>
    css(
      p.theme.breakpoints.mq({
        flexDirection: ['column', 'row'],
      })
    )}
`;

export default StyledFooter;
