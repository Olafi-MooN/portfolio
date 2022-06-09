import React from 'react';
import { Routes } from './routers';
import { ModalProvider } from './Context/ModalContext';

import 'atropos/css';
import "./global.css";

function App() {
  return(
    <ModalProvider>
      <Routes />
    </ModalProvider>
  )
}

export default App
