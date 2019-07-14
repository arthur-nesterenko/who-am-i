import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  ${emotionReset}
  * {
    font-family: 'Montserrat', sans-serif;
  }
  html {
    font-size: 14px;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  #gatsby-focus-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  main {
    flex: 1 0 auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
  }
`;

export default globalStyles;
