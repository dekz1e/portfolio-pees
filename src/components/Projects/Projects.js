import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { Link } from "gatsby";

export const Container = styled.section`
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

export const GalleryItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 1rem;
  position: relative;
`;

export const StyledLink = styled(Link)`
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

export const Heading = styled.h2`
  width: 100%;
  font-family: ${({ theme }) => theme.ff.bai};
  font-size: calc(${({ theme }) => theme.fs.xl} * 2);

  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 3);
    text-align: center;
  }
`;
