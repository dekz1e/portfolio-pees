import styled from "styled-components";
import { theme } from "../../helpers/theme";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  word-wrap: break-word;
  opacity: 0;
  position: relative;
  @media screen and (min-width: 1280px) {
  }
`;

export const FirstPartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const TextWrapper = styled.div``;

export const Paragraph = styled.p`
  overflow: hidden;
`;

export const Text = styled.span`
  display: block;
  position: relative;
  font-family: ${({ theme }) => theme.ff.po};
  font-weight: ${({ theme }) => theme.fw.b};
  font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.75);
  }
  @media screen and (min-width: 1280px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 2);
  }
`;

export const SecondPartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  @media screen and (min-width: 768px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  @media screen and (min-width: 1800px) {
    padding: 0 10vw;
  }
`;

export const SecondPartText = styled(Text)`
  font-size: calc(${({ theme }) => theme.fs.xl} * 1.25);
  word-break: break-all;

  @media screen and (min-width: 768px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
  }

  @media screen and (min-width: 1280px) {
    font-size: calc(${({ theme }) => theme.fs.xl} * 1.75);
  }
`;
