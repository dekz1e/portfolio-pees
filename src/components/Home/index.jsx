import gsap from 'gsap-trial';
import React, { useEffect, useRef } from 'react';
import SplitText from '../../utils/Split3.min';
import {
	Container,
	FirstPartWrapper,
	Paragraph,
	SecondPartText,
	SecondPartWrapper,
	Text,
	TextWrapper,
} from './Home';

const Home = () => {
	const ref = useRef();
	useEffect(() => {
		let first = gsap.timeline({
			defaults: {
				ease: 'inOut',
				delay: 0.25,
				stagger: 0.2,
			},
			repeat: -1,
			onStart() {
				gsap.set(ref.current, {
					autoAlpha: 1,
				});
			},
		});

		let splitPartTwoText = new SplitText('#second-text');
		first
			.from('#first-text', {
				skewY: 6,
				duration: 1,
				yPercent: 150,
			})
			.to(
				'#first-text',
				{
					skewY: 3,
					duration: 1,
					yPercent: -150,
				},
				'+=2'
			)
			.from(splitPartTwoText.lines, {
				opacity: 0,
				duration: 3,
			})
			.to(splitPartTwoText.lines, {
				opacity: 1,
				delay: 7,
			})
			.to(splitPartTwoText.lines, {
				opacity: 0,
			});
	}, []);
	return (
		<Container ref={ref} id="home">
			<FirstPartWrapper>
				<TextWrapper>
					<Paragraph>
						<Text id="first-text"> Mushouse </Text>
					</Paragraph>
				</TextWrapper>
				<TextWrapper>
					<Paragraph>
						<Text id="first-text"> Mushouse </Text>
					</Paragraph>
				</TextWrapper>
				<TextWrapper>
					<Paragraph>
						<Text id="first-text"> Mushouse </Text>
					</Paragraph>
				</TextWrapper>
			</FirstPartWrapper>
			<SecondPartWrapper>
				<TextWrapper>
					<Paragraph>
						<SecondPartText id="second-text">
							Projektujemy oraz wdrażamy strony, sklepy oraz aplikacje
							internetowe. Zajmujemy się również tworzeniem różnego rodzaju
							materiałów graficznych.
						</SecondPartText>
					</Paragraph>
				</TextWrapper>
			</SecondPartWrapper>
		</Container>
	);
};

export default Home;
