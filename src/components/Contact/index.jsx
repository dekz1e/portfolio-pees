import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import SplitText from "../../utils/Split3.min";
import React, { useEffect, useRef } from "react";
import {
  Container,
  Title,
  InfoWrapper,
  Wrapper,
  DataHeading,
  Details,
  Socials,
} from "./Contact";

const Contact = () => {
  const ref = useRef(null);
  const detailsRef = useRef(null);
  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    const split = new SplitText(ref.current, {
      type: "lines",
    });

    gsap.from(detailsRef.current, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      ease: "inOut",
      stagger: 0.05,
      scrollTrigger: {
        trigger: detailsRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
      },
    });

    split.lines.forEach((target) => {
      gsap.from(target, {
        duration: 0.25,
        y: -200,
        autoAlpha: 0,
        ease: "inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 65%",
          end: "bottom center",
        },
      });
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      });
    });
  }, []);
  return (
    <>
      <Container>
        <Title ref={ref}>
          Ode
          <wbr />
          zwij
          <wbr /> się
          <wbr /> do
          <wbr /> nas!
        </Title>
        <InfoWrapper ref={detailsRef}>
          <Wrapper>
            <DataHeading>Pozostańmy w kontakcie</DataHeading>
            <Details>
              <p>kontakt@mushouse.pl</p>
              <p>Adrian</p>
              <p>+48 XXX XXX XXX</p>
              <p>Maciek</p>
              <p>+48 XXX XXX XXX</p>
            </Details>
          </Wrapper>
          <Wrapper name="contact" id="contact">
            <DataHeading>Jesteśmy też na</DataHeading>
            <Socials>
              <a
                href="https://facebook.com"
                target="_blank"
                className="contact__link link"
                style={{ cursor: "none" }}
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="contact__link link"
                style={{ cursor: "none" }}
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="contact__link link"
                style={{ cursor: "none" }}
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                className="contact__link link"
                style={{ cursor: "none" }}
              >
                Dribbble
              </a>
            </Socials>
          </Wrapper>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default Contact;
