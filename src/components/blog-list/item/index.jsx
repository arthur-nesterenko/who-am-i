import PropTypes from 'prop-types';
import React from 'react';
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import StyledArticle from './styled-article';
import StyledHeader from './styled-header';
import StyledMeta from './styled-meta';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Item = ({ id, frontmatter, excerpt, fields }) => {
  return (
    <StyledArticle style={{ marginBottom: 50 }} key={id}>
      <StyledHeader>
        <Heading variant={'primary'}>
          <AniLink fade rel="bookmark" to={`/blog${fields.slug}`}>
            {frontmatter.title}
          </AniLink>
        </Heading>
        <StyledMeta>
          <strong>{frontmatter.date}</strong>•<i>{fields.readingTime.text}</i>
        </StyledMeta>
      </StyledHeader>
      <Paragraph>{excerpt}</Paragraph>
    </StyledArticle>
  );
};

export const ItemPropTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    readingTime: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
  excerpt: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
  }),
};

Item.propTypes = {
  ...ItemPropTypes,
};

export default Item;
