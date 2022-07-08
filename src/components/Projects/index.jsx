import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";
import styled from "styled-components";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { Link } from "gatsby";
import SplitText from "../../utils/Split3.min";

const StyledContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem 0;
  padding: 100px 0;

  @media screen and (min-width: 1280px) {
    padding: 100px 0;
  }
`;

const StyledGalleryItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 1rem;
  position: relative;
`;

const StyledLink = styled(Link)`
  width: min(100%, 550px);
  height: 450px;
  filter: grayscale(80%) brightness(85%);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  border-radius: 20px;
  position: relative;

  &:hover {
    filter: none;
    transform: scale(1.02);
    -webkit-box-shadow: 0px 0px 47px -25px rgba(173, 173, 173, 1);
    -moz-box-shadow: 0px 0px 47px -25px rgba(173, 173, 173, 1);
    box-shadow: 0px 0px 47px -25px rgba(173, 173, 173, 1);
  }

  img {
    width: min(100%, 550px);
    height: min(100%, 450px);
    border-radius: 20px;
    object-fit: cover;
  }
`;

const StyledHeading = styled.h2`
  width: 100%;
  font-family: ${({ theme }) => theme.ff.bai};
  font-size: calc(${({ theme }) => theme.fs.xl} * 2);

  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 3);
    text-align: center;
  }
`;

export const Realizacje = ({ nodes }) => {
  const headingRef = useRef();
  const galleryRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter("#skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-2, 2);
    let splitheading = new SplitText(headingRef.current);

    gsap.from(splitheading.chars, {
      y: -50,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        scrub: true,
        trigger: "#realizacje",
        start: "top 90%",
        end: "center 70%",
      },
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.5,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set("#image", { opacity: 0, y: 50 });

    ScrollTrigger.batch("#image", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: { each: 0.2 },
          scrollTrigger: {
            scrub: true,
            trigger: "#gallery",
            start: "top 70%",
            end: "center 70%",
            markers: true,
          },
        }),
      // onLeave: (batch) =>
      // 	gsap.set(batch, { opacity: 0, overwrite: true }),
      // onEnterBack: (batch) =>
      // 	gsap.to(batch, { opacity: 1, y: 0, stagger: 0.05, overwrite: true }),
      // onLeaveBack: (batch) =>
      // 	gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set("#skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  const projectsList = nodes.reverse();
  return (
    <>
      <StyledContainer id="realizacje">
        <StyledHeading ref={headingRef}>Nasze realizacje</StyledHeading>
        <StyledGalleryItems ref={galleryRef} id="gallery">
          {projectsList.map((item) => (
            <StyledLink
              to={`/realizacje/${item.slug}`}
              key={item.image.url}
              id="image"
            >
              <img src={item.image.url} id="skewElem" />
            </StyledLink>
          ))}
        </StyledGalleryItems>
      </StyledContainer>
    </>
  );
};
