import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
	position: relative;
	z-index: 10;
`;

const StyledNav = styled.nav`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	background: ${({ theme, isOpen }) => isOpen && theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: 0.3s ease-in-out;
	@media screen and (min-width: 768px) {
		display: flex;
		/* transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67); */
		/* background: ${({ isScroll }) =>
			isScroll ? 'rgba(255, 255, 255, .9)' : 'transparent'}; */
		height: 100px;
		padding: 0 5vw;
		/* animation: animate 1s linear;
		border-radius: 0 0 100% 100%;
		-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0);
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 100% 0);
		box-shadow: ${({ isScroll }) =>
			isScroll ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
		backdrop-filter: &{({isScroll}) => isScroll ? blur(5.4px) : 'none'};
		-webkit-backdrop-filter: &{({isScroll}) => isScroll ? blur(5.4px) : 'none'}; */
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

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme, isOpen, isScroll }) =>
		isOpen ? theme.colors.black : theme.colors.white};
	transition: all 0.3s ease-in-out;
	&:hover {
		color: ${({ theme, isScroll, isOpen }) =>
			isOpen ? theme.colors.whiteAlt : theme.colors.blackAlt};
	}
`;

const StyledHamburgerIcon = styled.div`
	position: fixed;
	top: 50px;
	right: 50px;
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
	font-size: ${({ theme }) => theme.fs.m};
	font-family: ${({ theme }) => theme.ff.bl};
	display: none;
	text-decoration: none;
	color: ${({ theme, isScroll }) => theme.colors.white};
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
				<StyledLogo to="/" isScroll={isScroll}>
					PEES
				</StyledLogo>
				<StyledList isOpen={isOpen}>
					<StyledItem>
						<StyledLink to="/" isOpen={isOpen} isScroll={isScroll}>
							strona główna
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink to="/realizacje" isOpen={isOpen} isScroll={isScroll}>
							realizacje
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink to="/kontakt" isOpen={isOpen} isScroll={isScroll}>
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
