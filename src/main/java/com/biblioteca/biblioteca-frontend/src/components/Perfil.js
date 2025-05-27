import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('usuarioLogado');
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '/home';
  };

  const handleExcluirConta = async () => {
    if (window.confirm('Tem certeza que deseja excluir sua conta? Essa ação não poderá ser desfeita.')) {
      try {
        await axios.delete(`https://biblioteca-backend-mk0j.onrender.com/usuarios/${usuario.id}`);
        localStorage.removeItem('usuarioLogado');
        setMensagem('✅ Conta excluída com sucesso.');
        setTimeout(() => {
          window.location.href = '/home';
        }, 1500);
      } catch (error) {
        console.error('Erro ao excluir conta:', error);
        setMensagem('❌ Erro ao excluir conta. Tente novamente mais tarde.');
      }
    }
  };

  if (!usuario) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div className="perfil-container">
      <h2>👤 Meu Perfil</h2>
      <div className="perfil-box">
        <p><strong>Nome:</strong> {usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>CPF:</strong> {usuario.cpf}</p>
        <p><strong>Telefone:</strong> {usuario.telefone}</p>
        <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>

        <div className="perfil-buttons">
          <button onClick={handleLogout} className="logout-button">🚪 Sair</button>
          <button onClick={handleExcluirConta} className="delete-button">🗑️ Excluir Conta</button>
        </div>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
};

export default Perfil;
