import React, { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu';
import { AnimatePresence } from 'framer-motion';
import {
	HeaderWrap,
	Nav,
	Logo,
	List,
	Item,
	StyledLink,
	BurgerWrap,
	BurgerContainer,
	HamburgerIcon,
} from './Header';

const Header = () => {
	const [isOpen, setisOpen] = useState(false);
	const setIsOpenHandler = () => {
		// console.log(`${isOpen}`);
		setisOpen(!isOpen);

		isOpen
			? document.body.classList.remove('no-scroll')
			: document.body.classList.add('no-scroll');
	};

	// useEffect(() => {
	//   window.addEventListener("scroll", () => {
	//     if (window.scrollY > 50) {
	//       setIsScroll(true);
	//     } else {
	//       setIsScroll(false);
	//     }
	//   });
	// }, []);

	const Scroll = require('react-scroll');
	const scroll = Scroll.animateScroll;

	return (
		<HeaderWrap>
			<Nav>
				<Logo
					className="link hover"
					spy={true}
					smooth={true}
					duration={500}
					onClick={() => scroll.scrollToTop()}
					to="home"
				>
					Mushouse
				</Logo>
				<List isOpen={isOpen}>
					<Item>
						<StyledLink
							className="link hover"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => scroll.scrollToTop()}
							
						>
							strona główna
						</StyledLink>
					</Item>
					<Item>
						<StyledLink
							className="link hover"
							spy={true}
							smooth={true}
							duration={500}
							to="projects"
						>
              realizacje
						</StyledLink>
					</Item>
					<Item>
						<StyledLink
							className="link hover"
							spy={true}
							smooth={true}
							duration={2500}
							to="contact"
						>
							kontakt
						</StyledLink>
					</Item>
				</List>
			</Nav>
			<BurgerWrap className="link">
				<BurgerContainer onClick={setIsOpenHandler}>
					<HamburgerIcon isOpen={isOpen} onClick={() => isOpen} />
				</BurgerContainer>
			</BurgerWrap>
			<AnimatePresence>
				{isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
			</AnimatePresence>
		</HeaderWrap>
	);
};

export default Header;
