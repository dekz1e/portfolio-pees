import styled from "styled-components";
import { theme } from "../../helpers/theme";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: start;
  gap: 5rem 0;
  font-family: ${({ theme }) => theme.ff.sg};
  /* padding: 0 5vw; */

  @media screen and (min-width: 1280px) {
    /* padding: 0 10vw; */
  }
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fw.s};
  font-family: ${({ theme }) => theme.ff.bai};
  & > div {
    font-size: calc(${({ theme }) => theme.fs.xl}*5);
    background: linear-gradient(
      to right,
      #ffff 50%,
      rgba(37, 37, 37, 0.15) 50%
    );
    background-size: 300% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: calc(${({ theme }) => theme.fs.xl}*6);
    }

    @media screen and (min-width: 1230px) {
      font-size: calc(${({ theme }) => theme.fs.xl}*8);
    }
  }

  wbr {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem 0;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 0 5rem;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

export const DataHeading = styled.h2`
  font-weight: ${({ theme }) => theme.fw.s};
  font-size: ${({ theme }) => theme.fs.xs};
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (min-width: 550px) {
    font-size: ${({ theme }) => theme.fs.s};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fw.l};
  font-size: ${({ theme }) => theme.fs.xs};
  p:nth-child(1) {
    font-weight: ${({ theme }) => theme.fw.m};
    margin-bottom: 0.5rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.whiteAlt};
    }
  }
  @media screen and (min-width: 550px) {
    font-size: ${({ theme }) => theme.fs.s};
  }
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fs.xs};
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fw.l};
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.whiteAlt};
    }
  }
`;
