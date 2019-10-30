import React from 'react';
import PropTypes from 'prop-types';
import Item, { ItemPropTypes } from './item';
import StyledListContainer from './styled-list-container';

const BlogList = ({ posts }) => {
  return (
    <StyledListContainer>
      {posts.map(({ node }) => (
        <Item key={node.id} {...node} />
      ))}
    </StyledListContainer>
  );
};

export const blogPostPropTypes = {
  node: PropTypes.shape(ItemPropTypes),
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(blogPostPropTypes)),
};

export default BlogList;
