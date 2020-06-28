import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from '@/hooks/use-site-metadata';
import defaultMetaImage from '../../../content/posts/initial/cover.jpg';
import JsonLd from './json-ld';

function Seo({
  description,
  lang,
  meta,
  title,
  metaImage,
  url,
  isBlogPost,
  postData,
  frontmatter: postMeta = postData.childMarkdownRemark.frontmatter || {},
}) {
  const seo = useSiteMetadata();

  const metaDescription = description || seo.description;
  const image = isBlogPost
    ? `${seo.siteUrl}${metaImage || defaultMetaImage}`
    : null;
  const datePublished = isBlogPost ? postMeta.date : false;
  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang,
          prefix: 'og: http://ogp.me/ns#',
        }}
        title={title}
        titleTemplate={`%s | ${seo.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: 'image',
            content: image,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: 'og:url',
            content: url,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: image,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: seo.authorTwitterAccount,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content: image,
          },
        ].concat(meta)}
      />
      <JsonLd
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.siteUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </Fragment>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  isBlogPost: false,
  frontmatter: {},
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  metaImage: PropTypes.string,
  isBlogPost: PropTypes.bool,
  url: PropTypes.string,
  frontmatter: PropTypes.object,
};

export default Seo;
