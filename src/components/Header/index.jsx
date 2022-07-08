import React, { useEffect, useState } from "react";
import { HeaderWrap, Nav, Logo, List, Item, StyledLink, HamburgerIcon } from "./Header";

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
  return (
    <HeaderWrap>
      <Nav isOpen={isOpen} isScroll={isScroll}>
        <Logo to="/#home" isScroll={isScroll}>
          Mushouse
        </Logo>
        <List isOpen={isOpen}>
          <Item>
            <StyledLink
              to="/#home"
              isOpen={isOpen}
              isScroll={isScroll}
              onClick={() => setIsOpen(false)}
            >
              strona główna
            </StyledLink>
          </Item>
          <Item>
            <StyledLink
              to="/#realizacje"
              isOpen={isOpen}
              isScroll={isScroll}
              onClick={() => setIsOpen(false)}
            >
              realizacje
            </StyledLink>
          </Item>
          <Item>
            <StyledLink
              to="/#kontakt"
              isOpen={isOpen}
              isScroll={isScroll}
              onClick={() => setIsOpen(false)}
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
