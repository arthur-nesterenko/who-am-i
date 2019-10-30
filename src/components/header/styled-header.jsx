import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 60px 275px;
  grid-auto-columns: max-content;
  grid-gap: 10px;
  max-width: 820px;
  width: 100%;
  padding: 20px 0 0 0;
`;

export default StyledHeader;
