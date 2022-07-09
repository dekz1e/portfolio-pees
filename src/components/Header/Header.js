import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { Link as sLink } from "react-scroll";

export const HeaderWrap = styled.header`
  position: relative;
  z-index: 10;
`;

export const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100px;
    padding: 0 5vw;
    position: fixed;
    left: 0;
    right: 0;
    background: "transparent";
    /* -webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border-radius: 0 0 100% 100%;
		-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0);
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0); */
  }

  @media screen and (min-width: 1280px) {
    padding: 0 10vw;
  }

  @keyframes animate {
    0% {
      top: -100%;
    }
    70% {
      top: 0;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0;
  list-style: none;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0 1rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 0 1.5rem;
  }
`;

export const Item = styled.li`
  font-size: ${({ theme }) => theme.fs.s};
  font-weight: ${({ theme }) => theme.fw.m};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fs.xs};
  }
`;

export const StyledLink = styled(sLink)`
  text-decoration: none;
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.black : theme.colors.white};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const BurgerWrap = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BurgerContainer = styled.div`
  width: 50px;
  height: 40px;
  position: fixed;
  top: 1em;
  right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;
`;
export const HamburgerIcon = styled.div`
  position: relative;
  width: 45px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.black : theme.colors.white};
  transition: 0.3s ease-in-out;

  &::after,
  &::before {
    content: "";
    border-radius: 100px;
    position: absolute;
    width: 45px;
    height: 3px;
    right: 0;
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.white};
    transition: 0.3s ease-in-out;
  }

  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg)" : `translateY(5px)`};
  }
  &::before {
    width: ${({ isOpen }) => (isOpen ? "45px" : "35px")};
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg)" : `translateY(-5px)`};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(sLink)`
  font-size: ${({ theme }) => theme.fs.s};
  font-family: ${({ theme }) => theme.ff.bai};
  font-weight: ${({ theme }) => theme.fw.b};
  display: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    display: block;

    &:hover {
      color: ${({ theme, isScroll }) =>
        isScroll ? theme.colors.whiteAlt : theme.colors.blackAlt};
    }
  }
`;
