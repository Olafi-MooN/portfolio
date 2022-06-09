import React from 'react';
import { useModalContext } from '../../Context/ModalContext';
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./modal.css";

const Modal = () => {
  const { closeModal, show, data } = useModalContext();

  return show ? <>
    <div className="container-modal-blur"></div>
    <div className="container-modal">
      <div className="content-modal">
        <div className="header-modal">
          <h3>{data?.title}</h3>
          <AiOutlineCloseCircle className="close-modal" size={32} onClick={closeModal} />
        </div>
        <div className="main-modal">
          {data?.childNode}
        </div>
      </div>
    </div>
  </> : <></>;
}

export { Modal };