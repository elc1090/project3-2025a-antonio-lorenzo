import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LivroList from './components/LivroList';
import UsuarioList from './components/Usuarios';
import Cadastro from './components/Cadastro';
import Login from './components/Login'; 
import Perfil from './components/Perfil';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/livros" element={<LivroList />} />
        <Route path="/usuarios" element={<UsuarioList />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;