import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Usuarios.css';


const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://biblioteca-backend-mk0j.onrender.com/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">👤 Lista de Usuários</h2>
      <div className="card-list">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="card">
            <h3>{usuario.nome}</h3>
            <p><strong>Email:</strong> {usuario.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;