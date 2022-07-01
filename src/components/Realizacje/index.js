import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import styled from 'styled-components';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { Link } from 'gatsby';
import SplitText from '../../utils/Split3.min';

const StyledContainer = styled.section`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem 0;
	padding: 100px 0;

	@media screen and (min-width: 1280px) {
		padding: 100px 0;
	}
`;

const StyledGalleryItems = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(300px, 1fr));
	/* place-items: center; */
	gap: 1rem;
	position: relative;

	@media screen and (min-width: 650px) {
		grid-template-columns: repeat(2, minmax(300px, 1fr));
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, minmax(300px, 1fr));
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`;

const StyledLink = styled(Link)`
	width: min(100%, 450px);
	height: 450px;
	filter: grayscale(80%) sepia(10%);
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	object-fit: cover;

	&:hover {
		filter: none;
		transform: scale(1.02);
	}

	img {
		width: min(100%, 450px);
		height: min(100%, 450px);
	}
`;

const StyledHeading = styled.h2`
	width: 100%;
	font-family: ${({ theme }) => theme.ff.bai};
	font-size: calc(${({ theme }) => theme.fs.xl} * 2);

	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 3);
		text-align: center;
	}
`;

export const Realizacje = ({ nodes }) => {
	const headingRef = useRef();
	const galleryRef = useRef();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let proxy = { skew: 0 },
			skewSetter = gsap.quickSetter('#skewElem', 'skewY', 'deg'), // fast
			clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
		let splitheading = new SplitText(headingRef.current);

		gsap.from(splitheading.words, {
			duration: 1,
			y: -50,
			autoAlpha: 0,
			ease: 'elastic',
			stagger: 0.05,
			scrollTrigger: {
				trigger: '#realizacje',
				scrub: 1,
				start: 'top center',
				end: 'bottom center',
			},
		});

		ScrollTrigger.create({
			onUpdate: (self) => {
				let skew = clamp(self.getVelocity() / -300);
				// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: 'power3',
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew),
					});
				}
			},
		});

		gsap.set('#image', { y: 50, opacity: 0 });

		ScrollTrigger.batch('#image', {
			onEnter: (batch) =>
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: { each: 0.15, grid: [1, 3] },
					overwrite: true,
				}),
			onLeave: (batch) =>
				gsap.set(batch, { opacity: 0, y: -50, overwrite: true }),
			onEnterBack: (batch) =>
				gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
			onLeaveBack: (batch) =>
				gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
		});

		// make the right edge "stick" to the scroll bar. force3D: true improves performance
		gsap.set('#skewElem', { transformOrigin: 'right center', force3D: true });
	}, []);
	return (
		<>
			<StyledContainer id="realizacje">
				<StyledHeading ref={headingRef}>Nasze realizacje</StyledHeading>
				<StyledGalleryItems ref={galleryRef} id="gallery">
					{nodes.map((item) => (
						<StyledLink
							to={`/realizacje/${item.slug}`}
							key={item.image.url}
							id="image"
						>
							<img src={item.image.url} id="skewElem" />
						</StyledLink>
					))}
				</StyledGalleryItems>
			</StyledContainer>
		</>
	);
};
