const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `posts`,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(_.get(node, 'fileAbsolutePath'))),
    });
  }
};
//
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post.jsx');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "//posts//" }
                frontmatter: { status: { ne: "draft" } }
              }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
                next {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
                previous {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create posts and pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const slug = _.get(edge, 'node.fields.slug');
          const id = _.get(edge, 'node.id');
          const next = _.get(edge, 'next', null);
          const previous = _.get(edge, 'previous', null);

          const postSlug = `/blog${slug}`;

          createPage({
            path: postSlug,
            component: postTemplate,
            context: {
              slug: slug,
              postSlug,
              id,
              next,
              previous,
            },
          });
        });
      })
    );
  });
};
