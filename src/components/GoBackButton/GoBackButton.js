import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { AnchorLink } from "gatsby-plugin-anchor-links";
export const Container = styled(AnchorLink)`
  width: 6em;
  height: 6em;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0 0 6em 0;
  transition: all 0.3s ease;
  background-color: white;
  cursor: none;
  &:hover {
    width: 7em;
    height: 7em;
  }
`;

export const Arrow = styled.div`
  width: 2.5em;
  height: 0.4em;
  position: absolute;
  top: 40%;
  left: 40%;
  background-color: #333;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: all 0.3s ease;
  &:after,
  &:before {
    content: "";
    width: 1.5em;
    height: 0.4em;
    position: absolute;
    background-color: #333;
  }
  &:after {
    top: -0.42em;
    left: -0.3em;
    transform: rotate(-45deg);
  }
  &:before {
    top: 0.42em;
    left: -0.3em;
    transform: rotate(45deg);
  }

  ${Container}:hover & {
    top: 25%;
    left: 25%;
  }
`;
