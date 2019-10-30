import styled from '@emotion/styled';

const StyledSocialLintItem = styled.li`
  a {
    transform: rotate(10deg);
    color: ${p =>
      p.iconTheme === 'dark' ? p.theme.colors.dark : p.theme.colors.white};
    transition: 0.7s;
  }
  svg {
    transition: 0.7s;
    &:hover {
      transition: 0.7s;
      cursor: pointer;
      transform: scale(1.5);
    }
  }
`;

export default StyledSocialLintItem;
