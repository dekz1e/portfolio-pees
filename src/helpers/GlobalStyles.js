import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";
import { theme } from "../helpers/theme";

const AnimateBG = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  `;

export const GlobalStyles = createGlobalStyle`
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
  cursor: none;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${theme.colors.black};
  /* border-radius: 100px; */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.colors.white};
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${theme.colors.whiteAlt};
}

::-moz-selection {
    /* Code for Firefox */
    color: ${theme.colors.black};
    background: ${theme.colors.white};
  }

  ::selection {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
}
.no-scroll {
    overflow: hidden;
}
html {
  cursor: none;
}
body {
  color: ${theme.colors.white};
  font-family: 'Poppins', sans-serif;
  position: relative; 
  overflow-x: hidden;
  margin: 0;
  padding: 0 5vw;
  background-color: #2575fc;
  background-size: 300% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(145deg, #6a11cb 0%, #2575fc 100%);
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(145deg, #6a11cb 0%, #2575fc 100%),url(https://grainy-gradients.vercel.app/noise.svg);
    animation: ${AnimateBG} 20s ease infinite;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
  }
}
`;
