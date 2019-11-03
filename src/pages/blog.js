import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import PageLayout from '@/layouts/page-layout';
import Container from '@/components/container';
import BlogList, { blogPostPropTypes } from '@/components/blog-list';
import { FaRss } from 'react-icons/fa';
import { css } from '@emotion/core';

const centerText = css`
  text-align: center;
`;

const BlogPage = ({
  data: {
    posts: { edges },
  },
}) => {
  return (
    <PageLayout layout="white">
      <SEO title="Blog" />
      <Container>
        {edges.length === 0 ? (
          <h1 css={centerText}>There are no posts yet 🤷🏻‍♂️ </h1>
        ) : (
          <Fragment>
            <BlogList posts={edges} />
            <div style={{ float: 'right' }}>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                title="rss"
                aria-label="rss"
              >
                <FaRss size={24} />
              </a>
            </div>
          </Fragment>
        )}
      </Container>
    </PageLayout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape(blogPostPropTypes)),
    }),
  }),
};

export const blogPageQuery = graphql`
  query BlogPageQuery {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//posts//" }
        frontmatter: { status: { ne: "draft" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt(truncate: true, format: PLAIN)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage;
