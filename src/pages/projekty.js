import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { gsap } from 'gsap-trial';
import styled from 'styled-components';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';

const StyledWrapper = styled.div`
	overflow: hidden;
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const StyledContent = styled.section`
	overflow: visible;
	width: 100%;
`;

const StyledHeading = styled.h1`
	position: fixed;
	top: 50vh;
	font-family: ${({ theme }) => theme.ff.pd};
	font-weight: ${({ theme }) => theme.fw.bold};
	font-style: normal;
	font-size: 5em;
	text-align: center;
	width: 100%;
	transform: translateY(-100%);
	z-index: 2;
	color: white;
	-webkit-text-stroke-width: 1.5px;
	-webkit-text-stroke-color: white;
	z-index: -2;
`;

const StyledOutlineHeading = styled(StyledHeading)`
	color: transparent;
	-webkit-text-stroke-width: 1.5px;
	-webkit-text-stroke-color: white;
	z-index: 2;
`;

const StyledFilterHeading = styled(StyledHeading)`
	mix-blend-mode: screen;
	color: ${({ theme }) => theme.colors.black};
	z-index: 2;
`;

const StyledImagesWrapper = styled.section`
	padding-top: 50vh;
	position: relative;
	width: min(100%, 1200px);
	margin: 0 auto;
	height: min(100%, 150vh);
	display: grid;
	grid-template-columns: repeat(20, 2%);
	grid-template-rows: repeat(30, 3%);
	justify-content: center;
	justify-items: center;
	align-items: center;
	z-index: 1;
	object-fit: cover;
`;

const StyledLink = styled(Link)`
	width: max(80px, 100%);
	height: 100%;
	object-fit: cover;
	filter: grayscale(80%) sepia(10%);
	transition: all 0.5s ease-in-out;

	&:hover {
		filter: none;
		transform: scale(1.1);
	}

	&:nth-child(1) {
		grid-area: 1/1/6/8;
	}

	&:nth-child(2) {
		grid-area: 3/12/8/20;
	}

	&:nth-child(3) {
		grid-area: 9/5/13/15;
	}

	&:nth-child(4) {
		grid-area: 14/1/18/8;
	}

	&:nth-child(5) {
		grid-area: 16/12/20/19;
	}

	&:nth-child(6) {
		grid-area: 20/2/25/9;
	}

	&:nth-child(7) {
		grid-area: 22/11/24/20;
	}

	&:nth-child(8) {
		grid-area: 26/5/30/15;
	}
`;

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Projekty = ({
	data: {
		allDatoCmsProject: { nodes },
	},
}) => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	useEffect(() => {
		let skewSetter = gsap.quickTo('img', 'skewY'), // fast
			clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

		ScrollSmoother.create({
			wrapper: '#wrapper',
			content: '#content',
			smooth: 2,
			effects: true,
			onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
			onStop: () => skewSetter(0),
		});
	}, []);
	return (
		<Layout>
			<Header />
			<StyledHeading>Nasze projekty</StyledHeading>
			<StyledOutlineHeading aria-hidden="true">
				Nasze projekty
			</StyledOutlineHeading>
			<StyledFilterHeading aria-hidden="true">
				Nasze projekty
			</StyledFilterHeading>

			<StyledWrapper id="wrapper">
				<StyledContent id="content">
					<StyledImagesWrapper>
						{nodes.map((item, index) => (
							<StyledLink to={`/projekty/${item.slug}`}>
								<StyledImg
									data-speed={Math.floor(Math.random() + 0.2)}
									src={item.image.url}
								/>
							</StyledLink>
						))}
					</StyledImagesWrapper>
				</StyledContent>
			</StyledWrapper>
		</Layout>
	);
};

export default Projekty;

export const query = graphql`
	query {
		allDatoCmsProject {
			nodes {
				id
				info
				image {
					filename
					url
				}
				title
				slug
			}
		}
	}
`;
