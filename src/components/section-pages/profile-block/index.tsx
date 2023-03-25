import React from 'react';
import { ProfileImg } from '../../profile-img';
import { BsArrowRight } from 'react-icons/bs';

//Styles
import './profile-block.css';

const ProfileBlock = () => {
	return (
		<header className="container-profile-header" id="profile">
			<div className="content-profile-scale">
				<div className="profile-block-img">
					<ProfileImg></ProfileImg>
				</div>
				<h3 className="profile-name">Alef S. Soares</h3>
				<h1 className="profile-role">Web Developer Expert</h1>
				<a href="/public/curriculos/curriculo.pdf" download style={{ textDecoration: 'none' }}>
					<h3 className="action-project-request">
						Baixar Currículo <BsArrowRight style={{ margin: '0px 10px' }} />
					</h3>
				</a>
			</div>
		</header>
	);
};

export { ProfileBlock };
