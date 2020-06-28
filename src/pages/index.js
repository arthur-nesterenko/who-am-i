import React from 'react';
import styled from '@emotion/styled';
import PageLayout from '@/layouts/page-layout';
import Avatar from '@/components/avatar';
import Navigation from '@/components/navigation';
import StyledSocialLinkList from '@/components/social-link-list';
import Content from '@/components/content';
import useSiteMetadata from '@/hooks/use-site-metadata';
import Seo from '@/components/seo';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

const StyledWrapper = styled.section`
  max-width: 820px;
  margin: auto;
  ${p => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 14px;

      ${p.theme.breakpoints.tablet} {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: repeat(2 min-content);
        grid-gap: 50px;
        grid-row-gap: 10px;
      }
    `;
  }};
  justify-content: center;
  align-items: center;
`;

const title = props => css`
  color: ${props.colors.white};
  font-size: 1.5rem;
  margin-bottom: 15px;
  ${props.breakpoints.mq({
    textAlign: ['center', 'left'],
  })}
`;

const IndexPage = ({ data: { page } }) => {
  const { authorTwitterAccount } = useSiteMetadata();
  return (
    <PageLayout withHeader={false}>
      <Seo title="Home" />
      <StyledWrapper>
        <div>
          <a href={`https://twitter.com/${authorTwitterAccount}`}>
            <Avatar />
          </a>
        </div>
        <div>
          <h1 css={title}>{page.frontmatter.title}</h1>
          <Content
            darkContent={false}
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
        <StyledSocialLinkList />
        <Navigation />
      </StyledWrapper>
    </PageLayout>
  );
};

export const homeQuery = graphql`
  query QueryHome {
    page: markdownRemark(fields: { directoryName: { eq: "home" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default IndexPage;
