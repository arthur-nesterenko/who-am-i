import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledHeader = styled.header`
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: max-content 1fr;
  grid-auto-columns: max-content;
  grid-gap: 10px;
  max-width: 820px;
  width: 100%;
  padding: 20px 0 0 0;
  ${p =>
    css(
      p.theme.breakpoints.mq({
        gridTemplateColumns: ['max-content 65%', '60px 275px'],
        paddingRight: [14, 0],
        paddingLeft: [14, 0],
      })
    )}
`;

export default StyledHeader;
