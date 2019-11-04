import { oneOf, bool } from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useTheme } from 'emotion-theming';

const StyledMain = styled.main`
  background-color: ${p => p.bg};
  background-image: ${p => `linear-gradient(${p.gradient})`};
  justify-content: ${p => (p.between ? 'space-between' : 'center')};
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageLayout = ({ children, layout, withHeader }) => {
  const { colors } = useTheme();
  const bg = colors[layout];
  const gradient =
    layout === 'primary'
      ? `to bottom, ${colors.primary}, ${colors.secondary}`
      : `to bottom,${colors.secondary} 0%,${colors.white} 25%`;

  return (
    <StyledMain bg={bg} gradient={gradient} between={withHeader}>
      {withHeader && <Header animationType={{ fade: true }} />}
      {children}
      <Footer />
    </StyledMain>
  );
};

PageLayout.defaultProps = {
  layout: 'primary',
  withHeader: true,
};
PageLayout.propTypes = {
  layout: oneOf(['white', 'primary']),
  withHeader: bool,
};

export default PageLayout;
