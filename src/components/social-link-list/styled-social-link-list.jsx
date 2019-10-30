import styled from '@emotion/styled';

const StyledSocialLinkList = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(24px, max-content));
  list-style: none;
  margin: 0;
  color: white;
`;

export default StyledSocialLinkList;
