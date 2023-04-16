import React, { useEffect, useState } from 'react';
import { IOpenModalModel, useModalContext } from '../../../Context/ModalContext';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../firebase';

interface IProjectFunctions {}

const ProjectsFunctions = (props: IProjectFunctions) => {
	const { openModal } = useModalContext();
	const [list, setList] = useState<any[]>([]);
	const { projectId } = useParams();
	const navigate = useNavigate();

	const getElementScroll = () => {
		var target = document.getElementById(`${projectId}`);
		if (target)
			target.scrollIntoView({
				behavior: 'smooth',
			});
	};

	const openModalProjectByParams = (projectId: string | undefined, list: any[], openModal: IOpenModalModel) => {
		if (projectId!) {
			const project = list.find((x: any) => x?.id === projectId);
			if (project?.id) {
				getElementScroll();
				setTimeout(() => {
					openModal({
						title: project.title,
						childNode: <iframe src={project?.site} height={'100%'} width={'100%'}></iframe>,
					});
				}, 1000);
			}
		}
	};

	useEffect(() => {
		const db = getFirestore(firebaseApp);
		const docRef = doc(db, 'projects', 'AJKFtOr7VwiJsIUQKjCr');
		getDoc(docRef).then((docSnap) => {
			if (docSnap.exists()) {
				setList(docSnap.data().list);
				console.log('Document data:', docSnap.data());
				openModalProjectByParams(projectId, docSnap.data().list, openModal);
			} else {
				console.log('No such document!');
			}
		});
	}, [projectId]);

	return { openModal, list, setList, projectId };
};

export { ProjectsFunctions };
