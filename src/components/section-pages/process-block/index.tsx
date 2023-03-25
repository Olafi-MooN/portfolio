import gsap from 'gsap';
import { useEffect } from 'react';
import { BlockProcess } from '../../block-process';
import './process.css';

const ProcessBlock = () => {
	return (
		<>
			<section className="container-projects-block" id="projects">
				<div className="content-benefits">
					<h3 className="benefits-aba">Processo</h3>
					<h1 className="effect-phrase">Conheça o meu fluxo de trabalho!</h1>
				</div>
				<div className="content-process-grid">
					<BlockProcess
						stop={170}
						data={{
							step: 1,
							description:
								'Nosso processo de colaboração começa com a requisição do projeto. Isso me permite compreender melhor suas necessidades e avaliar se sou a pessoa adequada para atender suas demandas. Caso seja apropriado, poderemos agendar uma videoconferência para discutir com mais detalhes.',
							title: 'Project Request',
						}}
					/>
					<BlockProcess
						stop={190}
						data={{
							step: 2,
							description:
								'Para mim, a confiança é um fator primordial em nossas colaborações. Na nossa primeira reunião, temos a oportunidade de nos conhecermos melhor e avaliar se há uma boa sintonia entre nós. Discutimos seus objetivos e requisitos, respondemos perguntas e delineamos os próximos passos.',
							title: 'Primeiro encontro',
						}}
					/>
					<BlockProcess
						stop={210}
						data={{
							step: 3,
							description:
								'Após me informar detalhadamente sobre seu projeto, elaborarei uma proposta personalizada. Opto por cobrar pelo projeto e não por hora trabalhada, assim você terá uma visão clara dos custos totais com antecedência.',
							title: 'Proposta',
						}}
					/>
					<BlockProcess
						stop={240}
						data={{
							step: 4,
							description:
								'Após reunir todas as informações necessárias, estou preparado para iniciar a implementação. Manter uma comunicação transparente e fornecer atualizações regulares é uma prioridade para mim. Usarei canais de comunicação convenientes, como o Slack, para mantê-lo informado sobre o andamento do projeto.',
							title: 'Implementação',
						}}
					/>
					<BlockProcess
						stop={270}
						data={{
							step: 5,
							description:
								'Antes do lançamento, o site finalizado passará por um controle de qualidade para garantir que todos os detalhes estejam corretos. Dependendo do projeto, ajudo a lançar com a hospedagem ultrarrápida do Webflow ou via exportação de código.',
							title: 'Lançamento',
						}}
					/>
				</div>
			</section>
		</>
	);
};

export { ProcessBlock };
