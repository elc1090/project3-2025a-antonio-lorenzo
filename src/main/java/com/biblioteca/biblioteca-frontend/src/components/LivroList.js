import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LivroList = () => {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');

  const fetchLivros = async () => {
    const res = await axios.get('http://localhost:8080/livros');
    setLivros(res.data);
  };

  const adicionarLivro = async () => {
    if (titulo.trim() === '') return;
    await axios.post('http://localhost:8080/livros', { titulo });
    setTitulo('');
    fetchLivros();
  };

  const excluirLivro = async (id) => {
    await axios.delete(`http://localhost:8080/livros/${id}`);
    fetchLivros();
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>
            {livro.titulo}
            <button onClick={() => excluirLivro(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Novo livro"
      />
      <button onClick={adicionarLivro}>Adicionar</button>
    </div>
  );
};

export default LivroList;