import { useStaticQuery, graphql } from 'gatsby';

const useAvatar = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return avatar;
};

export default useAvatar;
