import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.section`
	width: 100%;
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	gap: 5rem 0;
`;

export const HeadingContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeadingTitle = styled.h1`
	width: 100%;
	font-size: clamp(
		${({ theme }) => theme.fs.xl},
		calc(${({ theme }) => theme.fs.xl} * 1.25),
		calc(${({ theme }) => theme.fs.xl} * 2)
	);
	text-align: center;
	color: transparent;
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
	position: relative;
	z-index: 2;
	font-family: ${({ theme }) => theme.ff.pd};
	line-height: 1.05;
	transform: translateY('150%');

	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 2.25);
	}

	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 2.5);
	}
	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 2.75);
	}
	@media screen and (min-width: 1280px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 3);
	}
`;

export const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-transform: uppercase;
`;

export const AboutSectionHeader = styled.span`
	font-weight: ${({ theme }) => theme.fw.l};
	font-size: ${({ theme }) => theme.fs.s};
	color: ${({ theme }) => theme.colors.whiteAlt};
	letter-spacing: 1px;
	@media screen and (min-width: 600px) {
		font-size: ${({ theme }) => theme.fs.m};
	}
`;

export const AboutDescription = styled.p`
	font-size: ${({ theme }) => theme.fs.xl};
	font-family: ${({ theme }) => theme.ff.bai};
	line-height: 1.25;
	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.1);
	}
	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.25);
		line-height: 1.5;
	}
	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
	}
`;

export const FooterWrapper = styled.section`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem 0;
	color: ${({ theme }) => theme.colors.black};
`;

export const FooterSectionHeader = styled(AboutSectionHeader)`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.whiteAlt};
	font-family: ${({ theme }) => theme.ff.bai};
`;

export const FooterTitle = styled.h1`
	width: 100%;
	word-break: break-all;
	text-align: center;
	font-size: calc(${({ theme }) => theme.fs.xl} * 4);
	font-family: ${({ theme }) => theme.ff.bm};
	color: ${({ theme }) => theme.colors.white};
	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 5);
	}
	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 6);
	}
`;
