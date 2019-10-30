import styled from '@emotion/styled';

const StyledMenu = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-columns: max-content;
  grid-gap: 15px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default StyledMenu;
