import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LivroList from './components/LivroList';
import UsuarioList from './components/Usuarios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/livros" element={<LivroList />} />
        <Route path="/usuarios" element={<UsuarioList />} />
      </Routes>
    </Router>
  );
}

export default App;