import React from 'react';
import SEO from '../components/seo';
import PageLayout from '@/layouts/page-layout';
import Container from '@/components/container';
import Content from '@/components/content';
import Heading from '@/components/heading';
import SocialLinkList from '@/components/social-link-list';
import Divider from '@/components/divider';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

const skillList = props => css`
  .skills {
    h5 {
      margin: 0;
    }
    ul {
      margin: 15px 0;
      li {
        &::before {
  content: "\\2022";  
  color: ${props.colors.primary};
  font-weight: bold; 
  display: inline-block;
  width: 1em;
  margin-left: -1em; 
      }
    }
  }
`;
const AboutPage = ({ data: { page } }) => (
  <PageLayout layout="white">
    <Container>
      <SEO title="About" />
      <Heading>{page.frontmatter.title}</Heading>
      <Heading as="h2" variant="secondary">
        {page.frontmatter.subTitle}
      </Heading>
      <Content
        css={skillList}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
      <Divider />
      <SocialLinkList iconTheme="dark" />
    </Container>
  </PageLayout>
);

export const aboutQuery = graphql`
  query QueryAbout {
    page: markdownRemark(fields: { directoryName: { eq: "about" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default AboutPage;
