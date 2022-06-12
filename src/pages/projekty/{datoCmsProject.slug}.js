import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import './style.css';

const StyledContainer = styled.section`
	width: 100%;
	position: relative;
	padding: 0 5vw;
	display: grid;
	grid-template-columns: 1fr;
	gap: 5rem 0;
`;

const StyledHeadingWrapper = styled.div`
	min-height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledHeadingTitle = styled.h1`
	font-size: calc(${({ theme }) => theme.fs.xl} * 4);
	text-align: center;
	color: transparent;
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
	position: relative;
	z-index: 2;
	font-family: ${({ theme }) => theme.ff.pd};
	line-height: 1;

	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 5);
	}

	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 6);
	}
	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 6.5);
	}
	@media screen and (min-width: 1280px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 7);
	}
`;

const StyledFeaturesWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
	gap: 3rem 0;
`;

const StyledFeaturesMobile = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem 0;
	text-transform: lowercase;
	letter-spacing: 2px;
	font-weight: ${({ theme }) => theme.fw.l};
	p {
		font-size: ${({ theme }) => theme.fs.xs};
	}
	img {
		width: 50%;
		-webkit-clip-path: polygon(
			20% 0%,
			80% 0%,
			100% 0%,
			100% 80%,
			80% 100%,
			0% 100%,
			0% 86%,
			0% 20%
		);
		clip-path: polygon(
			20% 0%,
			80% 0%,
			100% 0%,
			100% 80%,
			80% 100%,
			0% 100%,
			0% 86%,
			0% 20%
		);
	}
`;

const StyledFeaturesDesktop = styled(StyledFeaturesMobile)`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	p {
		font-size: ${({ theme }) => theme.fs.s};
		align-self: flex-end;
	}

	img {
		width: 75%;
		align-self: end;
		-webkit-clip-path: polygon(
			0% 20%,
			0% 80%,
			0% 100%,
			80% 100%,
			100% 80%,
			100% 0%,
			86% 0%,
			20% 0%
		);
		clip-path: polygon(
			0% 0%,
			0% 86%,
			14% 100%,
			0% 100%,
			100% 100%,
			100% 100%,
			100% 14%,
			80% 0%
		);
	}
`;

const StyledAboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-transform: uppercase;
`;

const StyledAboutSectionHeader = styled.span`
	font-weight: ${({ theme }) => theme.fw.l};
	font-size: ${({ theme }) => theme.fs.s};
	color: ${({ theme }) => theme.colors.whiteAlt};
	letter-spacing: 1px;
	@media screen and (min-width: 600px) {
		font-size: ${({ theme }) => theme.fs.m};
	}
`;

const StyledAboutDescription = styled.p`
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

const StyledFooterWrapper = styled.section`
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem 0;
	background-color: ${({theme}) => theme.colors.white};
	color: ${({theme}) => theme.colors.black};
`;

const StyledFooterSectionHeader = styled(StyledAboutSectionHeader)`
	text-transform: uppercase;
	color: ${({theme}) => theme.colors.blackAlt};
`;

const StyledFooterTitle = styled.h1`
	width: 100%;
	word-break: break-all;
	text-align: center;
	font-size: calc(${({ theme }) => theme.fs.xl} * 4);
	font-family: ${({ theme }) => theme.ff.bm};
	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 5);
	}
	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 6);
	}
`;

const Projekt = ({
	data: {
		datoCmsProject: { title, image, info, gallery },
	},
}) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.set('.panel', { zIndex: (i, target, targets) => targets.length - i });

		var images = gsap.utils.toArray('.panel:not(.purple)');

		images.forEach((image, i) => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: 'section.black',
					start: () => 'top -' + window.innerHeight * (i + 0.5),
					end: () => '+=' + window.innerHeight,
					scrub: true,
					toggleActions: 'play none reverse none',
					invalidateOnRefresh: true,
				},
			});

			tl.to(image, { height: 0 });
		});

		gsap.set('.panel-text', {
			zIndex: (i, target, targets) => targets.length - i,
		});

		var texts = gsap.utils.toArray('.panel-text');

		texts.forEach((text, i) => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: 'section.black',
					start: () => 'top -' + window.innerHeight * i,
					end: () => '+=' + window.innerHeight,
					scrub: true,
					invalidateOnRefresh: true,
				},
			});

			tl.to(text, { duration: 0.33, opacity: 1, y: '50%' }).to(
				text,
				{ duration: 0.33, opacity: 0, y: '0%' },
				0.66
			);
		});

		ScrollTrigger.create({
			trigger: 'section.black',
			scrub: true,
			pin: true,
			start: () => 'top top',
			end: () => '+=' + (images.length + 1) * window.innerHeight,
			invalidateOnRefresh: true,
		});
	}, []);
	return (
		<Layout>
			<Header />
			<StyledContainer>
				<StyledHeadingWrapper>
					<StyledHeadingTitle>{title}</StyledHeadingTitle>
				</StyledHeadingWrapper>
				{/* <StyledFeaturesWrapper>
					<StyledFeaturesMobile>
						<p>Mobile</p>
						<img src={gallery[0].url} />
					</StyledFeaturesMobile>
					<StyledFeaturesDesktop>
						<p>Desktop</p>
						<img src={gallery[1].url} />
					</StyledFeaturesDesktop>
				</StyledFeaturesWrapper> */}
				<StyledAboutWrapper>
					<StyledAboutSectionHeader>O projekcie</StyledAboutSectionHeader>
					<StyledAboutDescription>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</StyledAboutDescription>
				</StyledAboutWrapper>
				<section className="black">
					<div className="text-wrap">
						<div className="panel-text blue-text">Blue</div>
						<div className="panel-text red-text">Red</div>
						<div className="panel-text orange-text">Orange</div>
						<div className="panel-text purple-text">Purple</div>
					</div>

					<div className="p-wrap">
						<div className="panel blue"></div>
						<div className="panel red"></div>
						<div className="panel orange"></div>
						<div className="panel purple"></div>
					</div>
				</section>
				<StyledFooterWrapper>
					<StyledFooterSectionHeader>Made in</StyledFooterSectionHeader>
					<StyledFooterTitle>THAIS</StyledFooterTitle>
				</StyledFooterWrapper>
			</StyledContainer>
		</Layout>
	);
};

export default Projekt;

export const query = graphql`
	query ($id: String) {
		datoCmsProject(id: { eq: $id }) {
			info
			image {
				filename
				url
			}
			slug
			title
			id
			gallery {
				filename
				url
			}
		}
	}
`;
