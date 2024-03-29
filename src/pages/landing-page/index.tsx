// libraries
import React, { useEffect } from 'react';

// Components
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HeaderMenu } from '../../components/header-menu';
import { ProfileBlock } from '../../components/section-pages/profile-block';
import { scrollEffects, gsap } from '../../components/shared/utils/animate-gsap';
import { BenefitsBlock } from '../../components/section-pages/benefits-block';
import { ProjectsBlock } from '../../components/section-pages/projects-block';

// Styles
import './landing-page.css';
import { TextMotivation } from '../../components/text-motivation';
import { Modal } from '../../components/Modal';
import { ProcessBlock } from '../../components/section-pages/process-block';
import { VscChevronRight } from 'react-icons/vsc';
import { FooterMenu } from '../../components/footer-menu';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
	useEffect(() => (window.innerWidth > 1000 ? scrollEffects() : () => {}), []);

	return (
		<>
			<div className="container-landing-page">
				<HeaderMenu></HeaderMenu>
				<div className="scroll-gsap-profile">
					<ProfileBlock></ProfileBlock>
				</div>
				<TextMotivation text={'Transforme a <br> sua ideia em <br/> um negócio digital.'}></TextMotivation>
				<BenefitsBlock />
				<ProjectsBlock />
				<ProcessBlock />
				<div className="content-process-grid">
					<div className="content-card">
						<div className="title-call-action">Eai, Vamos trabalhar junto?</div>
						<div className="description-call-action">
							Entre em contato, agora mesmo,<br></br>pelo WhatsApp!
						</div>
						<div className="btn-contacts-call">
							<a href="https://api.whatsapp.com/send?phone=5531975452891&text=Ol%C3%A1%20Alef%2C%20quero%20iniciar%20um%20projeto!">Entrar em contato</a>
						</div>
					</div>
				</div>
			</div>
			<FooterMenu />
			<Modal />
		</>
	);
}

export { LandingPage };
