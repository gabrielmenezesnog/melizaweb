import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import PageAutenticacao from '../pages/Autenticacao/PageAutenticacao';
import PageInicio from '../pages/Home/PageInicio';
import Page404 from '../pages/Erro/Page404';

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageAutenticacao />} />
        <Route path="/inicio" element={<PageInicio />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
