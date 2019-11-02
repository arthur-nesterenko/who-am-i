import PropTypes from 'prop-types';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PageLayout from '@/layouts/page-layout';
import Container from '@/components/container';
import Image from 'gatsby-image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const PostFooterLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const postFooterLinkItem = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const headerMeta = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  grid-gap: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export default function PostTemplate({
  data: { post },
  pageContext: { next, previous },
}) {
  return (
    <PageLayout withHeader={true} layout="white">
      <Container as="article" style={{ padding: '125px 0' }}>
        <header>
          <AniLink swipe direction="right" to="/blog">
            <FaAngleLeft size={12} />
            All posts
          </AniLink>
          <h1 style={{ fontWeight: 900, marginTop: 10 }}>
            {post.frontmatter.title}
          </h1>
          <div css={headerMeta}>
            <small>
              <i>{post.frontmatter.date}</i>
            </small>
            <small>
              <strong>{post.fields.readingTime.text}</strong>
            </small>
            <small>
              <strong>{post.frontmatter.category}</strong>
            </small>
          </div>
          {post.frontmatter.cover && (
            <Image
              objectFit="contain"
              title={post.frontmatter.title}
              alt={post.frontmatter.title}
              fluid={post.frontmatter.cover.childImageSharp.fluid}
            />
          )}
        </header>
        <aside dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        <div role="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <PostFooterLinks>
            {previous && (
              <li>
                <AniLink
                  css={postFooterLinkItem}
                  swipe
                  top="entry"
                  direction="right"
                  to={`/blog${previous.fields.slug}`}
                >
                  <FaAngleLeft size={24} />
                  {previous.frontmatter.title}
                </AniLink>
              </li>
            )}
            {next && (
              <li>
                <AniLink
                  css={postFooterLinkItem}
                  swipe
                  top="entry"
                  direction="left"
                  to={`/blog${next.fields.slug}`}
                >
                  {next.frontmatter.title}
                  <FaAngleRight size={24} />
                </AniLink>
              </li>
            )}
          </PostFooterLinks>
        </footer>
      </Container>
    </PageLayout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      fields: PropTypes.shape({
        readingTime: PropTypes.shape({
          text: PropTypes.string,
        }),
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.object,
        category: PropTypes.string,
        subTitle: PropTypes.string,
      }),
    }),
    html: PropTypes.string,
    tableOfContents: PropTypes.string,
  }),
};
export const postQuery = graphql`
  query QueryPostById($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
      html
      tableOfContents
    }
  }
`;