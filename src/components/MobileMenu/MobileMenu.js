import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { theme } from "../../helpers/theme";

export const MobileMenuContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 998;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0;
  list-style: none;
`;

export const Item = styled.li`
  font-size: ${theme.fs.s};
  font-weight: ${theme.fw.m};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.black};
`;
