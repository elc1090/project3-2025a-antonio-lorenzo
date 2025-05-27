import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const location = useLocation();
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  // Oculta a navbar na rota / ou /home
  if (location.pathname === '/' || location.pathname === '/home') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">📚 Biblioteca</Link>
      </div>
      <div className="navbar-links">
        {/* Mostra link de Livros apenas se NÃO estiver na página /livros */}
        {location.pathname !== '/livros' && (
          <Link to="/livros">Livros</Link>
        )}
        
        {/* Mostra link de Usuários apenas se NÃO estiver na página /usuarios */}
        {location.pathname !== '/usuarios' && (
          <Link to="/usuarios">Usuários</Link>
        )}

        {usuario ? (
          <>
            {/* Mostra link de Perfil apenas se NÃO estiver na página /perfil */}
            {location.pathname !== '/perfil' && (
              <Link to="/perfil">👤 {usuario.nome}</Link>
            )}
          </>
        ) : (
          <>
            {/* Mostra link de Login apenas se NÃO estiver na página /login */}
            {location.pathname !== '/login' && (
              <Link to="/login">Login</Link>
            )}
            
            {/* Mostra link de Cadastro apenas se NÃO estiver na página /cadastro */}
            {location.pathname !== '/cadastro' && (
              <Link to="/cadastro">Cadastro</Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;