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
} from "./ProjectPage";
const Projekt = ({
  location,
  data: {
    datoCmsProject: { title, image, info, gallery, description },
  },
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".panel", {
      zIndex: (i, target, targets) => targets.length - i,
    });
    let splitTitle = new SplitText("#title");

    gsap.from(splitTitle.lines, {
      duration: 0.25,
      yPercent: 100,
      stagger: 0.1,
    });

    let images = gsap.utils.toArray(".panel:not(:last-child)");

    images.forEach((image, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });

      tl.to(image, {
        height: 0,
      });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    let texts = gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
        },
      });

      tl.to(text, {
        duration: 0.33,
        opacity: 1,
        y: "50%",
      }).to(
        text,
        {
          duration: 0.33,
          opacity: 0,
          y: "0%",
        },
        0.66
      );
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

    gsap.from(".black", {
      duration: 0.2,
      opacity: 0,
      autoAlpha: 0,
      ease: "power1.easeOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".black",
        start: "top 90%",
        end: "bottom center",
      },
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
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
      <Header />
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
        <section className="black">
          <div className="text-wrap">
            {gallery.map((item) => (
              <div className="panel-text">{item.title}</div>
            ))}
          </div>
          <div className="p-wrap">
            {gallery.map((item, i) => (
              <div
                className="panel"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
            ))}
          </div>
        </section>
        <FooterWrapper id="footer">
          <FooterSectionHeader id="footer-title">będzie</FooterSectionHeader>
          <FooterTitle id="footer-description"> MAGIK </FooterTitle>
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
