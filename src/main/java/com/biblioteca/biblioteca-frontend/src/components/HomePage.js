import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
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