import React from 'react';
import StyledFooter from './styled-footer';

const Footer = () => {
  return (
    <StyledFooter>
      <i>
        © 2019 Arthur Nesterenko Blog. Powered by{' '}
        <a href="https://gatsbyjs.org" target="_blank">
          Gatsby
        </a>{' '}
        &{' '}
        <a href="https://emotion.sh" target="_blank">
          Emotion
        </a>
      </i>
    </StyledFooter>
  );
};

export default Footer;
