import Atropos from 'atropos/react';
import './Projects.css';

import comuBibliPNG from '../../../public/images/Comubibli.png';
import { useModalContext } from '../../../Context/ModalContext';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../../../firebase';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';

const ProjectsBlock = () => {
	const { openModal } = useModalContext();
	const [list, setList] = useState<any[]>([]);

	useEffect(() => {
		const db = getFirestore(firebaseApp);
		const docRef = doc(db, 'projects', 'AJKFtOr7VwiJsIUQKjCr');
		getDoc(docRef).then((docSnap) => {
			if (docSnap.exists()) {
				setList(docSnap.data().list);
				console.log('Document data:', docSnap.data());
			} else {
				console.log('No such document!');
			}
		});
	}, []);

	return (
		<section className="container-projects-block" id="projects">
			<div className="content-benefits">
				<h3 className="benefits-aba">Projetos</h3>
				<h1 className="effect-phrase">Uma pequena seleção dos meus projetos</h1>
			</div>
			<div className="content-projects-grid">
				{list.map((x) => {
					return (
						<div className="projects-block" onClick={() => openModal({ title: x.title, childNode: <iframe src={x?.site} height={'100%'} width={'100%'}></iframe> })}>
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
