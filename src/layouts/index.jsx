import React from 'react';
import { node } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';
import globalStyles from '@/assets/global-styles';
import theme from '@/assets/theme';
import { ThemeProvider } from 'emotion-theming';

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}

AppLayout.propTypes = {
  children: node,
};

export default AppLayout;
