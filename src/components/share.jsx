import React from 'react';

import { TwitterShareButton } from 'react-share';
import styled from '@emotion/styled';
import { FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div,
  button {
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      /* react-share uses inline styles */
      color: ${p => p.theme.colors.twitter} !important;
    }
  }
  span {
    margin-right: 20px;
    font-size: 70%;
    text-transform: uppercase;
    line-height: 2.5;
    opacity: 0.7;
  }
`;

const Divider = styled.hr`
  flex-grow: 1;
  height: 1px;
  background-color: ${p => p.theme.colors.gray};
  margin: 0 15px 0 0;
`;

const Share = ({ url, title, twitterHandle }) => (
  <Container>
    <Divider />
    <span>Share article</span>
    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle.split('@').join('')}
    >
      <FaTwitter />
    </TwitterShareButton>
  </Container>
);

export default Share;
