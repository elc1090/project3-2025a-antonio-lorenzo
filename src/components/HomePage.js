import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('usuarioLogado');
    if (user) {
      setUsuarioLogado(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.reload();
  };

  return (
    <div className="homepage-container">
      {/* Botões do topo */}
      <div className="top-right-buttons">
        {!usuarioLogado ? (
          <>
            <Link to="/cadastro">
              <button className="cadastro-button">Cadastrar</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/perfil">
              <button className="perfil-button">👤 Perfil</button>
            </Link>
            <button onClick={handleLogout} className="logout-button">🚪 Sair</button>
          </>
        )}
      </div>

      <div className="homepage-content"></div>
        <div className="homepage-box">
          <h1 className="homepage-title">📚 Biblioteca Virtual</h1>
          <p className="homepage-subtitle">Gerencie seus livros com facilidade!</p>
          <div className="homepage-buttons">
            <Link to="/livros">
              <button className="homepage-button">Ver Livros</button>
            </Link>
            <Link to="/usuarios">
              <button className="homepage-button">Ver Usuários</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
