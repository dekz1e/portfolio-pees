import { graphql } from 'gatsby';
import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import SplitText from '../../utils/Split3.min';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import './style.css';

const StyledContainer = styled.section`
	width: 100%;
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	gap: 5rem 0;
`;

const StyledHeadingContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledHeadingTitle = styled.h1`
	width: 100%;
	font-size: calc(${({ theme }) => theme.fs.xl} * 3);
	text-align: center;
	color: transparent;
	-webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
	position: relative;
	z-index: 2;
	font-family: ${({ theme }) => theme.ff.pd};
	line-height: 1.05;
	transform: translateY('150%');

	@media screen and (min-width: 600px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 3.25);
	}

	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 3.5);
	}
	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 3.75);
	}
	@media screen and (min-width: 1280px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 4);
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
	color: ${({ theme }) => theme.colors.black};
`;

const StyledFooterSectionHeader = styled(StyledAboutSectionHeader)`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.whiteAlt};
`;

const StyledFooterTitle = styled.h1`
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

const Projekt = ({
	location,
	data: {
		datoCmsProject: { title, image, info, gallery, description },
	},
}) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.set('.panel', {
			zIndex: (i, target, targets) => targets.length - i,
		});
		let splitTitle = new SplitText('#title');

		gsap.from(splitTitle.lines, {
			duration: 0.25,
			yPercent: 100,
			stagger: 0.1,
		});

		let images = gsap.utils.toArray('.panel:not(:last-child)');

		images.forEach((image, i) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: 'section.black',
					start: () => 'top -' + window.innerHeight * (i + 0.5),
					end: () => '+=' + window.innerHeight,
					scrub: true,
					toggleActions: 'play none reverse none',
				},
			});

			tl.to(image, {
				height: 0,
			});
		});

		gsap.set('.panel-text', {
			zIndex: (i, target, targets) => targets.length - i,
		});

		let texts = gsap.utils.toArray('.panel-text');

		texts.forEach((text, i) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: 'section.black',
					start: () => 'top -' + window.innerHeight * i,
					end: () => '+=' + window.innerHeight,
					scrub: true,
				},
			});

			tl.to(text, {
				duration: 0.33,
				opacity: 1,
				y: '50%',
			}).to(
				text,
				{
					duration: 0.33,
					opacity: 0,
					y: '0%',
				},
				0.66
			);
		});

		gsap.from('#about-title', {
			duration: 1,
			opacity: 0,
			autoAlpha: 0,
			ease: 'power3.out',
			stagger: 1,
			scrollTrigger: {
				trigger: '#about',
				start: 'top 60%',
				end: 'bottom center',
			},
		});

		gsap.from('#about-description', {
			duration: 2,
			opacity: 0,
			autoAlpha: 0,
			ease: 'power3.out',
			stagger: 1,
			scrollTrigger: {
				trigger: '#about',
				start: 'top 50%',
				end: 'bottom center',
			},
		});

		gsap.from('.black', {
			duration: 0.2,
			opacity: 0,
			autoAlpha: 0,
			ease: 'power1.easeOut',
			stagger: 1,
			scrollTrigger: {
				trigger: '.black',
				start: 'top 90%',
				end: 'bottom center',
			},
		});

		ScrollTrigger.create({
			trigger: 'section.black',
			scrub: true,
			pin: true,
			start: () => 'top top',
			end: () => '+=' + (images.length + 1) * window.innerHeight,
		});

		gsap.from('#footer-title', {
			duration: 0.75,
			opacity: 0,
			yPercent: -200,
			autoAlpha: 0,
			ease: 'power1.easeOut',
			scrollTrigger: {
				trigger: '#footer',
				start: 'top 80%',
				end: 'bottom center',
			},
		});

		gsap.from('#footer-description', {
			duration: 1,
			opacity: 0,
			yPercent: -100,
			autoAlpha: 0,
			ease: 'power1.easeOut',
			scrollTrigger: {
				trigger: '#footer',
				start: 'top center',
				end: 'bottom center',
			},
		});
	}, []);

	const panels = ['blue', 'red', 'orange', 'purple'];
	return (
		<Layout>
			<Header />
			<StyledContainer>
				<StyledHeadingContainer>
					<StyledHeadingTitle id="title"> {title} </StyledHeadingTitle>
				</StyledHeadingContainer>
				<StyledAboutWrapper id="about">
					<StyledAboutSectionHeader id="about-title">
						O projekcie
					</StyledAboutSectionHeader>
					<StyledAboutDescription id="about-description">
						{description}
					</StyledAboutDescription>
				</StyledAboutWrapper>
				<section className="black">
					<div className="text-wrap">
						{gallery.map((item) => (
							<div className="panel-text">{item.title}</div>
						))}
					</div>
					<div className="p-wrap">
						{gallery.map((item, i) => (
							<div
								className="panel"
								style={{ backgroundImage: `url(${item.url})` }}
							></div>
						))}
					</div>
				</section>
				<StyledFooterWrapper id="footer">
					<StyledFooterSectionHeader id="footer-title">
						Made in
					</StyledFooterSectionHeader>
					<StyledFooterTitle id="footer-description"> THAIS </StyledFooterTitle>
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
			description
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
				title
			}
		}
	}
`;
