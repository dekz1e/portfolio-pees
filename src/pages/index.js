import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Home } from '../components/Home';
import { Kontakt } from '../components/Kontakt';
import { Realizacje } from '../components/Realizacje';
import { graphql } from 'gatsby';
import gsap from 'gsap-trial';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import styled from 'styled-components';

const StyledSmoothContainer = styled.div`
	padding: 0 5vw;

	@media screen and (min-width: 1024px) {
		padding: 0 10vw;
	}
`;

const IndexPage = ({
	data: {
		allDatoCmsProject: { nodes },
	},
}) => {
	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// 	let smoother = ScrollSmoother.create({
	// 		content: '#smooth-content',
	// 		effects: true,
	// 		smooth: 0.3,
	// 		smoothTouch: 0.1,
	// 	});
	// }, []);
	return (
		<Layout>
			<Header />
			{/* <StyledSmoothContainer id="smooth-content"> */}
				<Home />
				<Realizacje nodes={nodes} />
				<Kontakt />
			{/* </StyledSmoothContainer> */}
		</Layout>
	);
};

export default IndexPage;

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
