import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // ✅ Importa o CSS

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setSucesso(false);

    try {
      const response = await axios.post('https://biblioteca-backend-mk0j.onrender.com/usuarios/login', {
        cpf,
        senha
      });

      setMensagem('✅ Login realizado com sucesso!');
      setSucesso(true);
      localStorage.setItem('usuarioLogado', JSON.stringify(response.data));
      window.location.href = '/home';
    } catch (error) {
      if (error.response) {
        setMensagem(`❌ Erro: ${error.response.data.message || 'Credenciais inválidas.'}`);
      } else if (error.request) {
        setMensagem('❌ Erro: Sem resposta do servidor (conexão falhou).');
      } else {
        setMensagem(`❌ Erro desconhecido: ${error.message}`);
      }
      setSucesso(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {mensagem && (
        <p className="login-message" style={{ color: sucesso ? 'green' : 'red' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
};

export default Login;

