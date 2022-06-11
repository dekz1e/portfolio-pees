import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledContainer = styled.section`
	padding: 0 5vw;
	margin: 100px 0;
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	gap: 2rem 0;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 0 2rem;
	}

	@media screen and (min-width: 1280px) {
		padding: 0 10vw;
	}
`;

const StyledTitle = styled.h1`
	font-size: 10em;
	word-break: break-all;
	color: transparent;
	-webkit-text-stroke: 2px ${({ theme }) => theme.colors.whiteAlt};
	line-height: 1.2;
	@media screen and (min-width: 450px) {
		font-size: 11em;
	}

	@media screen and (min-width: 500px) {
		font-size: 12em;
	}

	@media screen and (min-width: 550px) {
		font-size: 13em;
	}
	@media screen and (min-width: 600px) {
		font-size: 14em;
	}
	@media screen and (min-width: 640px) {
		font-size: 15em;
	}

	@media screen and (min-width: 690px) {
		font-size: 16em;
	}

	@media screen and (min-width: 735px) {
		font-size: 17em;
	}

	@media screen and (min-width: 768px) {
		grid-column: 1/2;
		font-size: 10rem;
	}

	@media screen and (min-width: 950px) {
		font-size: 11em;
	}

	@media screen and (min-width: 1040px) {
		font-size: 12em;
	}
	@media screen and (min-width: 1140px) {
		font-size: 13em;
	}
	@media screen and (min-width: 1230px) {
		font-size: 14em;
	}

	@media screen and (min-width: 1490px) {
		font-size: 15em;
	}
	@media screen and (min-width: 1590px) {
		font-size: 16em;
	}
	@media screen and (min-width: 1690px) {
		font-size: 17em;
	}
	@media screen and (min-width: 1790px) {
		font-size: 18em;
	}
	@media screen and (min-width: 1890px) {
		font-size: 19em;
	}
	@media screen and (min-width: 1990px) {
		font-size: 20em;
	}
`;

const StyledInfoWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	gap: 2rem 0;

	@media screen and (min-width: 768px) {
		position: fixed;
		right: 5vw;
		top: 50%;
		transform: translateY(-50%);
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
`;

const StyledDataHeading = styled.h2`
	font-weight: ${({ theme }) => theme.fw.r};
	font-size: ${({ theme }) => theme.fs.xs};
	text-transform: uppercase;
	letter-spacing: 2px;
	@media screen and (min-width: 550px) {
		font-size: ${({ theme }) => theme.fs.s};
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.fs.xs};
	}
`;

const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem 0;
	color: ${({ theme }) => theme.colors.whiteAlt};
	font-weight: ${({ theme }) => theme.fw.l};
	font-size: ${({ theme }) => theme.fs.xs};
	p:nth-child(1) {
		font-weight: ${({ theme }) => theme.fw.r};
		margin-bottom: .5rem;
		transition: 0.2s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.white};
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
		color: ${({ theme }) => theme.colors.whiteAlt};
		font-weight: ${({ theme }) => theme.fw.l};
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: 0.2s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;

const Kontakt = () => {
	return (
		<Layout>
			<Header />
			<StyledContainer>
				<StyledTitle>Odzywaj się śmiało!</StyledTitle>
				<StyledInfoWrapper>
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
		</Layout>
	);
};

export default Kontakt;
