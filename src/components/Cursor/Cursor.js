import styled from "styled-components";
import { theme } from "../../helpers/theme";

export const Container = styled.div``;
export const Circle = styled.div`
  position: absolute;
  width: 2em;
  height: 2em;
  background: linear-gradient(to right, #e65c00, #f9d423);
  pointer-events: none;
  z-index: 999;
  border-radius: 50%;
`;
