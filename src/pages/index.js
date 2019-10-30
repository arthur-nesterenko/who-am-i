import React from 'react';
import styled from '@emotion/styled';
import PageLayout from '@/layouts/page-layout';
import Avatar from '@/components/avatar';
import Navigation from '@/components/navigation';
import StyledSocialLinkList from '@/components/social-link-list';
import Content from '@/components/content';

const StyledWrapper = styled.section`
  max-width: 820px;
  margin: auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 20px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
`;

const IndexPage = ({ data: { page } }) => {
  return (
    <PageLayout withHeader={false}>
      <StyledWrapper>
        <div>
          <Avatar />
        </div>
        <div>
          <h1
            style={{
              color: 'white',
              fontSize: '1.7rem',
              textTransform: 'capitalize',
              marginBottom: '15px',
            }}
          >
            {page.frontmatter.title}
          </h1>
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
