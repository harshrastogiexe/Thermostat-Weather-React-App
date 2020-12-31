import React from 'react';
import Logo from '../assets/Logo';
import Button from './Button';
const Header = () => {
	return (
		<header>
			<nav className="navbar">
				<div className="navbar__left" id="logo">
					<Logo size={40} />
					<span>thermo</span>
					<span>Stat</span>
				</div>

				<div className="navbar__right">
					<Button>About</Button>
					<Button>Github</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
