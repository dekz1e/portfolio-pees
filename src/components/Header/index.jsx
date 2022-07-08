import React, { useEffect, useState } from "react";
import {
  HeaderWrap,
  Nav,
  Logo,
  List,
  Item,
  StyledLink,
  HamburgerIcon,
} from "./Header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

  return (
    <HeaderWrap>
      <Nav isOpen={isOpen} isScroll={isScroll}>
        <Logo to="/#home" isScroll={isScroll}>
          Mushouse
        </Logo>
        <List isOpen={isOpen}>
          <Item>
            <StyledLink
              className="link hover"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={() => scroll.scrollToTop()}
            >
              strona główna
            </StyledLink>
          </Item>
          <Item>
            <StyledLink
              className="link hover"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              to="projects"
            >
              realizacje
            </StyledLink>
          </Item>
          <Item>
            <StyledLink
              className="link hover"
              spy={true}
              smooth={true}
              duration={2500}
              activeClass="active"
              to="contact"
            >
              kontakt
            </StyledLink>
          </Item>
        </List>
      </Nav>
      <HamburgerIcon onClick={handleMenuOpen} isOpen={isOpen}></HamburgerIcon>
    </HeaderWrap>
  );
};

export default Header;
