import { css } from '@emotion/core';
import colors from './theme/colors';

const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
  }
  #gatsby-focus-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  main {
    flex: 1 0 auto;
  }
  a {
    text-decoration: none;
    color: ${colors.primary};
    font-weight: 500;
    transition: color ease-in 0.1s 0.2s;
    &:hover {
      color: #005b6d;
    }
  }
  [href^='mailto'] {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default globalStyles;
