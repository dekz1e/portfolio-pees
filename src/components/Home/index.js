import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap-trial';

const StyledContainer = styled.section`
	width: calc(100% - 10vw);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	word-wrap: break-word;
	opacity: 0;
	position: relative;
	margin-inline: auto;
	@media screen and (min-width: 1280px) {
		width: calc(100% - 20vw);
	}
`;

const StyledLinesWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	/* align-items: center; */
	/* text-align: center; */
	position: absolute;
	line-height: 1.25;
`;
const StyledLines = styled.div``;
const StyledLine = styled.p`
	overflow: hidden;
`;
const StyledLineText = styled.span`
	display: block;
	color: #fff;
	font-size: calc(${({ theme }) => theme.fs.xl} * 1.5);
	font-weight: 800;
	text-align: left;

	@media screen and (min-width: 768px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.75);
		text-align: center;
	}
	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 2);
	}
`;

const StyledDetailsWrapper = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	gap: 4rem 0;
	line-height: 1.25;
	font-size: ${({ theme }) => theme.fs.xl};
	display: grid;
	place-items: center;

	@media screen and (min-width: 768px) {
		height: 50vh;
		gap: 0 2rem;
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.25);
	}

	@media screen and (min-width: 1024px) {
		font-size: calc(${({ theme }) => theme.fs.xl} * 1.35);
	}

	@media screen and (min-width: 1280px) {
		gap: 0 3rem;
	}
`;

const StyledDetailsLineText = styled(StyledLineText)`
	width: 100%;
	font-size: ${({ theme }) => theme.fs.s};

	@media screen and (min-width: 768px) {
		text-align: center;
	}
`;

export const Home = () => {
	const ref = useRef();
	useEffect(() => {
		const imageTl = gsap.timeline({
			defaults: {
				duration: 0.5,
				ease: 'expo.inOut',
			},
			paused: true,
			onStart: () => {
				detail1Tl.play();
			},
			onComplete: () => {
				lineTl.restart();
			},
		});
		const detail1Tl = gsap.timeline({
			defaults: {
				duration: 0.5,
				delay: 0.5,
				ease: 'expo.inOut',
			},
			paused: true,
		});
		const lineTl = gsap.timeline({
			defaults: {
				delay: 0.25,
				duration: 2,
				stagger: 0.1,
				ease: 'expo.inOut',
			},
			onStart: () => {
				gsap.set(ref.current, {
					autoAlpha: 1,
				});
			},
			onComplete: () => {
				imageTl.restart();
				detail1Tl.restart();
			},
		});
		imageTl
			.from('#image--item__slide', {
				scaleY: 0,
				transformOrigin: 'bottom',
			})
			.to('#image--item__slide', {
				opacity: 1,
				delay: 7,
				scaleY: 0,
				transformOrigin: 'top',
			});
		detail1Tl
			.from('#detail', {
				scaleY: 0,
				transformOrigin: 'bottom',
			})
			.to('#detail', {
				opacity: 1,
				delay: 7,
				scaleY: 0,
				transformOrigin: 'top',
			});
		lineTl
			.from('#line--text', {
				yPercent: 150,
				skewY: 6,
			})
			.to('#line--text', {
				yPercent: -150,
				skewY: -5,
			});
	}, []);
	return (
		<StyledContainer ref={ref} id="home" >
			<StyledLinesWrapper>
				<StyledLines>
					<StyledLine>
						<StyledLineText id="line--text">Awesome People.</StyledLineText>
					</StyledLine>

					<StyledLine>
						<StyledLineText id="line--text">Awesome Things.</StyledLineText>
					</StyledLine>

					<StyledLine>
						<StyledLineText id="line--text">Awesome Work.</StyledLineText>
					</StyledLine>
				</StyledLines>
			</StyledLinesWrapper>

			<StyledDetailsWrapper id="image--item__slide">
				<StyledLines>
					<StyledLine>
						<StyledDetailsLineText id="detail">
							Zajmujemy się przede wszystkim tworzeniem stron internetowych oraz
							różnego rodzaju grafiki.
						</StyledDetailsLineText>
					</StyledLine>
				</StyledLines>
			</StyledDetailsWrapper>
		</StyledContainer>
	);
};
