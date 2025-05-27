import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://biblioteca-backend-mk0j.onrender.com/usuarios', {
        nome,
        email,
        senha,
        dataNascimento,
        cpf,
        telefone
      });
      console.log('Usuário cadastrado com sucesso:', response.data);
      setMensagem('✅ Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setDataNascimento('');
      setCpf('');
      setTelefone('');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setMensagem('❌ Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            pattern="\d{11}"
            title="Digite os 11 números do CPF sem pontos ou traços"
          />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            pattern="\d{11}"
            title="Digite o telefone com DDD (somente números, ex: 11999999999)"
          />
        </div>
        <button type="submit" className="cadastro-button">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default Cadastro;
