import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import SplitText from "../../utils/Split3.min";
import styled from "styled-components";

const StyledContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  word-wrap: break-word;
  opacity: 0;
  position: relative;
  @media screen and (min-width: 1280px) {
  }
`;

const StyledFirstPartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const StyledTextWrapper = styled.div``;

const StyledParagraph = styled.p`
  overflow: hidden;
`;

const StyledText = styled.span`
  display: block;
  position: relative;
  font-family: ${({ theme }) => theme.ff.po};
  font-weight: ${({ theme }) => theme.fw.b};
  font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.75);
  }
  @media screen and (min-width: 1280px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 2);
  }
`;

const StyledSecondPartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  @media screen and (min-width: 768px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  @media screen and (min-width: 1800px) {
    padding: 0 10vw;
  }
`;

const StyledSecondPartText = styled(StyledText)`
  font-size: calc(${({ theme }) => theme.fs.xl} * 1.25);
  word-break: break-all;

  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
  }

  @media screen and (min-width: 1280px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.75);
  }
`;

export const Home = () => {
  const ref = useRef();
  useEffect(() => {
    let first = gsap.timeline({
      defaults: {
        ease: "inOut",
        delay: 0.25,
        stagger: 0.2,
      },
      repeat: -1,
      onStart() {
        gsap.set(ref.current, {
          autoAlpha: 1,
        });
      },
    });

    let splitPartTwoText = new SplitText("#second-text");
    first
      .from("#first-text", {
        skewY: 6,
        duration: 1,
        yPercent: 150,
      })
      .to(
        "#first-text",
        {
          skewY: 3,
          duration: 1,
          yPercent: -150,
        },
        "+=2"
      )
      .from(splitPartTwoText.lines, {
        opacity: 0,
        duration: 3,
      })
      .to(splitPartTwoText.lines, {
        opacity: 1,
        delay: 7,
      })
      .to(splitPartTwoText.lines, {
        opacity: 0,
      });
  }, []);
  return (
    <StyledContainer ref={ref} id="home">
      <StyledFirstPartWrapper>
        <StyledTextWrapper>
          <StyledParagraph>
            <StyledText id="first-text"> Mushouse </StyledText>
          </StyledParagraph>
        </StyledTextWrapper>
        <StyledTextWrapper>
          <StyledParagraph>
            <StyledText id="first-text"> Mushouse </StyledText>
          </StyledParagraph>
        </StyledTextWrapper>
        <StyledTextWrapper>
          <StyledParagraph>
            <StyledText id="first-text"> Mushouse </StyledText>
          </StyledParagraph>
        </StyledTextWrapper>
      </StyledFirstPartWrapper>
      <StyledSecondPartWrapper>
        <StyledTextWrapper>
          <StyledParagraph>
            <StyledSecondPartText id="second-text">
              Projektujemy oraz wdrażamy strony internetowe. Zajmujemy się
              również tworzeniem różnego rodzaju materiałów graficznych.
            </StyledSecondPartText>
          </StyledParagraph>
        </StyledTextWrapper>
      </StyledSecondPartWrapper>
    </StyledContainer>
  );
};
