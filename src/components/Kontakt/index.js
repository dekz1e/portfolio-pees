import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import SplitText from '../../utils/Split3.min';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
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

const StyledTitle = styled.p`
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
		line-height: 1.1;

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

const StyledInfoWrapper = styled.div`
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

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
`;

const StyledDataHeading = styled.h2`
	font-weight: ${({ theme }) => theme.fw.s};
	font-size: ${({ theme }) => theme.fs.xs};
	text-transform: uppercase;
	letter-spacing: 2px;
	@media screen and (min-width: 550px) {
		font-size: ${({ theme }) => theme.fs.s};
	}
`;

const StyledDetails = styled.div`
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

const StyledSocials = styled.div`
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

export const Kontakt = () => {
	const ref = useRef(null);
	const detailsRef = useRef(null);
	useEffect(() => {
		gsap.config({ trialWarn: false });
		gsap.registerPlugin(ScrollTrigger);
		const split = new SplitText(ref.current, {
			type: 'lines',
		});

		gsap.from(detailsRef.current, {
			duration: 1,
			y: 100,
			autoAlpha: 0,
			ease: 'inOut',
			stagger: 0.05,
			scrollTrigger: {
				trigger: detailsRef.current,
				scrub: 1,
				start: 'top bottom',
				end: 'bottom bottom',
			},
		});

		split.lines.forEach((target) => {
			gsap.from(target, {
				duration: 0.25,
				y: -200,
				autoAlpha: 0,
				ease: 'inOut',
				stagger: 0.05,
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top center',
					end: 'bottom center',
				},
			});
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top center',
					end: 'bottom center',
				},
			});
		});
	}, []);
	return (
		<>
			<StyledContainer id="kontakt">
				<StyledTitle ref={ref}>
					Ode
					<wbr />
					zwij
					<wbr /> się
					<wbr /> do
					<wbr /> nas!
				</StyledTitle>
				<StyledInfoWrapper ref={detailsRef}>
					<StyledWrapper>
						<StyledDataHeading>Pozostańmy w kontakcie</StyledDataHeading>
						<StyledDetails>
							<p>kontakt@pees.pl</p>
							<p>Adrian</p>
							<p>+48 997 997 997</p>
							<p>ul. Lubelska 23/6</p>
							<p>997 Lublin</p>
						</StyledDetails>
					</StyledWrapper>
					<StyledWrapper>
						<StyledDataHeading>Jesteśmy też na</StyledDataHeading>
						<StyledSocials>
							<a
								href="https://facebook.com"
								target="_blank"
								className="contact__link"
							>
								Facebook
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								className="contact__link"
							>
								Twitter
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								className="contact__link"
							>
								Instagram
							</a>
							<a
								href="https://dribbble.com"
								target="_blank"
								className="contact__link"
							>
								Dribbble
							</a>
						</StyledSocials>
					</StyledWrapper>
				</StyledInfoWrapper>
			</StyledContainer>
		</>
	);
};
