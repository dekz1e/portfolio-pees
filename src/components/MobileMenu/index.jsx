import React from "react";
import {
  MobileMenuContainer,
  Nav,
  Logo,
  List,
  Item,
  StyledLink,
} from "./MobileMenu";

const MobileMenu = ({ setIsOpenHandler }, ref) => {
  return (
    <MobileMenuContainer
      ref={ref}
      initial={{ clipPath: "circle(0px at 95% -10%)" }}
      animate={{ clipPath: "circle(1200px at 90% -10%)" }}
      exit={{ clipPath: "circle(0px at 95% -10%)" }}
      transition={{ duration: 1 }}
    >
      <List>
        <Item>
          <StyledLink to="home" smooth={true} duration={500} onClick={setIsOpenHandler}>
            strona główna
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="projects" smooth={true} duration={500} onClick={setIsOpenHandler}>
            realizacje
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="contact" smooth={true} duration={2500} onClick={setIsOpenHandler}>
            kontakt
          </StyledLink>
        </Item>
      </List>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
