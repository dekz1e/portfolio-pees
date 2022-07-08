import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import SplitText from "../../utils/Split3.min";
import { Container, Heading, GalleryItems, StyledLink } from "./Projects";

const Projects = ({ nodes }) => {
  const headingRef = useRef();
  const galleryRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter("#skewElem", "skewY", "deg"),
      clamp = gsap.utils.clamp(-2, 2);
    let splitheading = new SplitText(headingRef.current);

    gsap.from(splitheading.chars, {
      y: -50,
      autoAlpha: 0,
      stagger: 0.1,
      scrollTrigger: {
        scrub: true,
        trigger: "#projects",
        start: "top 90%",
        end: "center 70%",
        
      },
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
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
          },
        }),
    });
    gsap.set("#skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  const projectsList = nodes.reverse();
  return (
    <>
      <Container name="projects" id="projects">
        <Heading ref={headingRef}>Nasze realizacje</Heading>
        <GalleryItems ref={galleryRef} id="gallery">
          {projectsList.map((item) => (
            <StyledLink
            className="link"
              to={`/realizacje/${item.slug}`}
              key={item.image.url}
              id="image"
            >
              <img src={item.image.url} id="skewElem" />
            </StyledLink>
          ))}
        </GalleryItems>
      </Container>
    </>
  );
};

export default Projects;
