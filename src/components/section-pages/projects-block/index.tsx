import Atropos from 'atropos/react';
import './Projects.css';

import { ProjectsFunctions } from './Projects.functions';

const ProjectsBlock = () => {
	const { openModal, list } = ProjectsFunctions({});

	return (
		<section className="container-projects-block" id="projects">
			<div className="content-benefits">
				<h3 className="benefits-aba">Projetos</h3>
				<h1 className="effect-phrase">Uma pequena seleção dos meus projetos</h1>
			</div>
			<div className="content-projects-grid">
				{list.map((x) => {
					return (
						<div className="projects-block" id={x.id} onClick={() => openModal({ title: x.title, childNode: <iframe src={x?.site} height={'100%'} width={'100%'}></iframe> })}>
							<Atropos highlight={true} shadow={true} rotateTouch={window.innerWidth > 1000} rotate={window.innerWidth > 1000} className="projects-block-atr1">
								<img src={x.thumbnail} alt={x?.title} height="100%" width="100%" />
							</Atropos>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export { ProjectsBlock };
