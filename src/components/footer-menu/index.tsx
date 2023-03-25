import React from 'react';
import { Link } from 'react-router-dom';

import { VscChevronRight } from 'react-icons/vsc';

// Styles
import './footer-menu.css';

const FooterMenu = () => {
	return (
		<nav className="container-footer-menu">
			<ul className="content-footer-menu">
				<li className="footer-menu-li li-remove-visible">
					<ul className="content-footer-menu">
						<li className="footer-menu-li">
							<a href="#benefits" className="nav-main">
								© 2023 Alef S. Soares. All rights reserved.
							</a>
						</li>
					</ul>
				</li>
				<li className="footer-menu-li">
					<ul className="content-footer-menu">
						<li className="footer-menu-li">
							<a target={'_blank'} href="https://api.whatsapp.com/send?phone=5531975452891&text=Ol%C3%A1%20Alef%2C%20quero%20iniciar%20um%20projeto!" className="nav-main">
								WhatsApp
							</a>
						</li>
						<li className="footer-menu-li">
							<a href="https://github.com/Olafi-MooN" target={'_blank'} className="nav-main">
								Github
							</a>
						</li>
						<li className="footer-menu-li">
							<a href="https://www.instagram.com/alef.all/?next=%2F" target={'_blank'} className="nav-main">
								Instagram
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export { FooterMenu };
