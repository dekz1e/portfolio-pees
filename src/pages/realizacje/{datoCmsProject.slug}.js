import { graphql } from "gatsby";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import SplitText from "../../utils/Split3.min";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import "./style.css";
import { GlobalStyles } from "../../helpers/GlobalStyles";
import { theme } from "../../helpers/theme";
import {
  Container,
  HeadingContainer,
  HeadingTitle,
  AboutWrapper,
  AboutSectionHeader,
  AboutDescription,
  FooterWrapper,
  FooterSectionHeader,
  FooterTitle,
} from "../../helpers/ProjectPage";
import DesktopGallery from "../../components/ProjectGallery/DesktopGallery";
import MobileGallery from "../../components/ProjectGallery/MobileGallery";
import Cursor from "../../components/Cursor";
import GoBackButton from "../../components/GoBackButton";

const Projekt = ({
  location,
  data: {
    datoCmsProject: { title, image, info, gallery, description },
  },
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitTitle = new SplitText("#title");

    gsap.from(splitTitle.lines, {
      duration: 0.25,
      yPercent: 100,
      stagger: 0.1,
    });

    gsap.from("#about-title", {
      duration: 1,
      opacity: 0,
      autoAlpha: 0,
      ease: "power3.out",
      stagger: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "bottom center",
      },
    });

    gsap.from("#about-description", {
      duration: 2,
      opacity: 0,
      autoAlpha: 0,
      ease: "power3.out",
      stagger: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom center",
      },
    });

    gsap.from("#footer-title", {
      duration: 0.75,
      opacity: 0,
      yPercent: -200,
      autoAlpha: 0,
      ease: "power1.easeOut",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        end: "bottom center",
      },
    });

    gsap.from("#footer-description", {
      duration: 1,
      opacity: 0,
      yPercent: -100,
      autoAlpha: 0,
      ease: "power1.easeOut",
      scrollTrigger: {
        trigger: "#footer",
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  const panels = ["blue", "red", "orange", "purple"];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      {/* <Header /> */}
      <GoBackButton/>
      <Container>
        <HeadingContainer>
          <HeadingTitle id="title"> {title} </HeadingTitle>
        </HeadingContainer>
        <AboutWrapper id="about">
          <AboutSectionHeader id="about-title">O projekcie</AboutSectionHeader>
          <AboutDescription id="about-description">
            {description}
          </AboutDescription>
        </AboutWrapper>
        <MobileGallery gallery={gallery} />
        <DesktopGallery gallery={gallery} />
        <FooterWrapper id="footer">
          <FooterSectionHeader id="footer-title">Projekt stworzony przez</FooterSectionHeader>
          <FooterTitle id="footer-description"> Mushouse </FooterTitle>
        </FooterWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Projekt;

export const query = graphql`
  query ($id: String) {
    datoCmsProject(id: { eq: $id }) {
      info
      description
      image {
        filename
        url
      }
      slug
      title
      id
      gallery {
        filename
        url
        title
      }
    }
  }
`;
