import React, { useEffect } from "react";
import { GlobalStyles } from "../helpers/GlobalStyles";
import { theme } from "../helpers/theme";
import { ThemeProvider } from "styled-components";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { graphql } from "gatsby";
import gsap from "gsap-trial";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import styled from "styled-components";

const StyledSmoothContainer = styled.div`
  padding: 0 5vw;

  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
  }
`;

const IndexPage = ({
  data: {
    allDatoCmsProject: { nodes },
  },
}) => {
  // useEffect(() => {
  // 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // 	let smoother = ScrollSmoother.create({
  // 		content: '#smooth-content',
  // 		effects: true,
  // 		smooth: 0.3,
  // 		smoothTouch: 0.1,
  // 	});
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <Header />
      {/* <StyledSmoothContainer id="smooth-content"> */}
      <Home />
      <Projects nodes={nodes} />
      <Contact />
      {/* </StyledSmoothContainer> */}
    </ThemeProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allDatoCmsProject {
      nodes {
        id
        info
        image {
          filename
          url
          title
        }
        title
        slug
      }
    }
  }
`;
