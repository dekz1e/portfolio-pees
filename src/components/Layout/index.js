import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
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
  height: 100%;
  font-size: 16px;
  /* scroll-behavior: smooth; */

  ::-moz-selection {
    /* Code for Firefox */
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.black};
  border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.whiteAlt};
}
}


body {
  background-color: #d4418e;
  background-size: 300% 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%),
    url(https://grainy-gradients.vercel.app/noise.svg);
  animation: AnimateBG 20s ease infinite;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Poppins', sans-serif;
  position: relative; 
  overflow-x: hidden;
  margin: 0;
  background-attachment: fixed;
  padding: 0 5vw;

  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
  }
}

@keyframes AnimateBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
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
