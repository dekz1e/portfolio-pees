import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledHeader = styled.header`
	position: relative;
	z-index: 10;
`;

const StyledNav = styled.nav`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: ${({ theme, isOpen }) => isOpen && theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: 0.3s ease-in-out;
	@media screen and (min-width: 768px) {
		display: flex;
		height: 100px;
		padding: 0 5vw;
		position: fixed;
		left: 0;
		right: 0;
		background:  'transparent';
		/* -webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border-radius: 0 0 100% 100%;
		-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0);
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0); */
	}

	@media screen and (min-width: 1280px) {
		padding: 0 10vw;
	}

	@keyframes animate {
		0% {
			top: -100%;
		}
		70% {
			top: 0;
		}
	}
`;

const StyledList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem 0;
	list-style: none;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
		gap: 0 1rem;
	}

	@media screen and (min-width: 1024px) {
		gap: 0 1.5rem;
	}
`;

const StyledItem = styled.li`
	font-size: ${({ theme }) => theme.fs.s};
	font-weight: ${({ theme }) => theme.fw.m};
	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.fs.xs};
	}
`;

const StyledLink = styled(AnchorLink)`
	text-decoration: none;
	color: ${({ theme, isOpen }) =>
		isOpen ? theme.colors.black : theme.colors.white};
	transition: all 0.3s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.colors.black};
	}
`;

const StyledHamburgerIcon = styled.div`
	position: fixed;
	top: 50px;
	right: 5vw;
	width: ${({ isOpen }) => (isOpen ? '50px' : '')};
	background-color: ${({ theme, isOpen }) =>
		isOpen ? theme.colors.black : theme.colors.white};
	transition: 0.3s ease-in-out;
	z-index: 5;
	cursor: pointer;

	&::after,
	&::before {
		content: '';
		border-radius: 100px;
		position: absolute;
		width: 50px;
		height: 3px;
		right: 0;
		background-color: ${({ theme, isOpen }) =>
			isOpen ? theme.colors.black : theme.colors.white};
		transition: 0.3s ease-in-out;
	}

	&::after {
		transform: ${({ isOpen }) =>
			isOpen ? 'rotate(45deg)' : `translateY(5px)`};
	}
	&::before {
		width: ${({ isOpen }) => (isOpen ? '50px' : '40px')};
		transform: ${({ isOpen }) =>
			isOpen ? 'rotate(-45deg)' : `translateY(-5px)`};
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledLogo = styled(Link)`
	font-size: ${({ theme }) => theme.fs.s};
	font-family: ${({ theme }) => theme.ff.bai};
	font-weight: ${({ theme }) => theme.fw.b};
	display: none;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	transition: 0.3s ease-in-out;

	@media screen and (min-width: 768px) {
		display: block;

		&:hover {
			color: ${({ theme, isScroll }) =>
				isScroll ? theme.colors.whiteAlt : theme.colors.blackAlt};
		}
	}
`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
	}, []);

	const handleMenuOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<StyledHeader>
			<StyledNav isOpen={isOpen} isScroll={isScroll}>
				<StyledLogo to="/#home" isScroll={isScroll}>
					PEES
				</StyledLogo>
				<StyledList isOpen={isOpen}>
					<StyledItem>
						<StyledLink to="/#home" isOpen={isOpen} isScroll={isScroll}>
							strona główna
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink to="/#realizacje" isOpen={isOpen} isScroll={isScroll}>
							realizacje
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink to="/#kontakt" isOpen={isOpen} isScroll={isScroll}>
							kontakt
						</StyledLink>
					</StyledItem>
				</StyledList>
			</StyledNav>
			<StyledHamburgerIcon
				onClick={handleMenuOpen}
				isOpen={isOpen}
			></StyledHamburgerIcon>
		</StyledHeader>
	);
};

export default Header;
