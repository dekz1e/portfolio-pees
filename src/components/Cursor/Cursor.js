import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: fixed;
  background-color: blue;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const Circle = styled.div`
  position: absolute;
  width: 2em;
  height: 2em;
  background: linear-gradient(to right, #e65c00, #f9d423);
  pointer-events: none;
  z-index: 999;
  border-radius: 50%;
`;
