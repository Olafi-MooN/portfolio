import Atropos from 'atropos/react';
import "./Projects.css"

import comuBibliPNG from '../../../public/images/Comubibli.png';
import { useModalContext } from '../../../Context/ModalContext';

const ProjectsBlock = () => {
  const { openModal } = useModalContext();

  return (
    <section className="container-projects-block" id="projects">
      <div className="content-benefits">
        <h3 className="benefits-aba">Projetos</h3>
        <h1 className="effect-phrase">Uma pequena seleção dos meus projetos</h1>
      </div>
      <div className="content-projects-grid">
        <div className="projects-block" onClick={() => openModal({title: "Green Chain - Landing Page", childNode: <></>})}>
          <Atropos
            highlight={true}
            shadow={true}
            rotateTouch={window.innerWidth > 1000}
            rotate={window.innerWidth > 1000}
            className="projects-block-atr1"
          >
            <img src="https://github.com/Olafi-MooN/StartSe/raw/main/src/image/page-initial.png" alt="projeto 1" height="100%" width="100%"/>
          </Atropos>
        </div>
        <div className="projects-block" onClick={() => openModal({title: "Be The Hero", childNode: <></>})}>
          <Atropos
            highlight={true}
            shadow={true}
            rotateTouch={window.innerWidth > 1000}
            rotate={window.innerWidth > 1000}
            className="projects-block-atr2"
          >
            <img src="https://i.ytimg.com/vi/ZYzQSgAuYRM/maxresdefault.jpg" alt="projeto 2" height="100%" width="100%"/>
          </Atropos>
        </div>
        <div className="projects-block" onClick={() => openModal({title: "Tela de Login", childNode: <></>})}>
          <Atropos
            highlight={true}
            shadow={true}
            rotateTouch={window.innerWidth > 1000}
            rotate={window.innerWidth > 1000}
            className="projects-block-atr3"
          >
            <img src="https://myportfolioalef.herokuapp.com/img/telaLogin.png" alt="projeto 1" height="100%" width="100%"/>
          </Atropos>
        </div>
        <div className="projects-block" onClick={() => openModal({title: "ComuBibli - Biblioteca Comunitária", childNode: <></>})}>
          <Atropos
            highlight={true}
            shadow={true}
            rotateTouch={window.innerWidth > 1000}
            rotate={window.innerWidth > 1000}
            className="projects-block-atr4"
          >
            <img src={comuBibliPNG} alt="projeto 1" height="100%" width="100%"/>
          </Atropos>
        </div>
       
      </div>
    </section>
  );
}

export { ProjectsBlock };