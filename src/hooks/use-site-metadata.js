import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            contactEmail
            title
            description
            author
            authorTwitterAccount
            twitterHandle
            organization
            authorSocialLinks {
              name
              url
              nickname
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
