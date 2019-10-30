import styled from '@emotion/styled';

const StyledMenu = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 75px);
  grid-auto-columns: max-content;
  grid-gap: 15px;
  width: 100%;
`;

export default StyledMenu;
