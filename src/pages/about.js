import React from 'react';
import SEO from '../components/seo';
import PageLayout from '@/layouts/page-layout';
import Container from '@/components/container';
import Content from '@/components/content';
import Heading from '@/components/heading';
import SocialLinkList from '@/components/social-link-list';
import Divider from '@/components/divider';

const AboutPage = ({ data: { page } }) => (
  <PageLayout layout="white">
    <Container>
      <SEO title="About" />
      <Heading>{page.frontmatter.title}</Heading>
      <Heading as="h2" variant="secondary">
        {page.frontmatter.subTitle}
      </Heading>
      <Content dangerouslySetInnerHTML={{ __html: page.html }} />
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
        subTitle
      }
      html
    }
  }
`;

export default AboutPage;
