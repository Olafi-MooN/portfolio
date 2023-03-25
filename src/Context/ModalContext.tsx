import React, { createContext, useContext, useState } from 'react';

export interface IModalContextModal {
  show: boolean;
  data: IDataModel | undefined;
  openModal: IOpenModalModel;
  closeModal: () => void;
}

export interface IOpenModalModel { 
  (data?: IDataModel): void;
}

export interface IDataModel { 
  childNode: JSX.Element;
  title: string;
}

export const ModalContext = createContext({} as IModalContextModal);

const ModalProvider = (props: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<IDataModel | undefined>();

  const openModal: IOpenModalModel = (data) => { 
    setShow(true);
    setData(data);
  };

  const closeModal = () => setShow(false);

  return (
    <ModalContext.Provider value={{ data, show, closeModal, openModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => useContext(ModalContext);

export { ModalProvider, useModalContext };