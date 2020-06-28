import React from 'react';
import Seo from '../components/seo';
import Container from '@/components/container';
import PageLayout from '@/layouts/page-layout';
import { css } from '@emotion/core';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const centerText = props => css`
  text-align: center;
  color: ${props.colors.white};
`;

const container = css`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const title = css`
  font-size: 2.3rem;
`;

const link = props => css`
  color: ${props.colors.white};
  text-transform: uppercase;
`;

const NotFoundPage = () => (
  <PageLayout withHeader={false}>
    <Seo title="404: Not found" />
    <Container css={container}>
      <div css={centerText}>
        <h1 css={title}>NOT FOUND 🤷🏻‍♂️</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.😔</p>
        <AniLink css={link} to="/" fade>
          Go home
        </AniLink>
      </div>
    </Container>
  </PageLayout>
);

export default NotFoundPage;
