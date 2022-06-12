import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../helpers/theme';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;

  ::-moz-selection {
    /* Code for Firefox */
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
}
}

body {
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Poppins', sans-serif;
  position: relative; 
  overflow-x: hidden;
}

`;

export default function Layout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
