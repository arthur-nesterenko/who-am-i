import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Container = styled.div`
  width: 100%;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
  ${p =>
    css(
      p.theme.breakpoints.mq({
        paddingLeft: [14, 0],
        paddingRight: [14, 0],
      })
    )}
`;

export default Container;
