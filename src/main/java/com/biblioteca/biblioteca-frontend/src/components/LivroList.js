import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LivroList.css';

const LivroList = () => {
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [anoPublicacao, setAnoPublicacao] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [editandoLivro, setEditandoLivro] = useState({
    titulo: '',
    autor: '',
    anoPublicacao: '',
    isbn: '',
    quantidade: ''
  });

  const fetchLivros = async () => {
    try {
      const res = await axios.get('https://biblioteca-backend-mk0j.onrender.com/livros');
      setLivros(res.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const adicionarLivro = async () => {
    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      anoPublicacao.trim() === '' ||
      isbn.trim() === '' ||
      quantidade.trim() === ''
    ) {
      return;
    }

    const novoLivro = {
      titulo,
      autor,
      anoPublicacao,
      isbn,
      quantidade
    };

    try {
      await axios.post('https://biblioteca-backend-mk0j.onrender.com/livros', novoLivro);
      setTitulo('');
      setAutor('');
      setAnoPublicacao('');
      setIsbn('');
      setQuantidade('');
      fetchLivros();
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  const excluirLivro = async (id) => {
    try {
      await axios.delete(`https://biblioteca-backend-mk0j.onrender.com/livros/${id}`);
      fetchLivros();
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  const iniciarEdicao = (livro) => {
    setEditandoId(livro.id);
    setEditandoLivro({
      titulo: livro.titulo,
      autor: livro.autor,
      anoPublicacao: livro.anoPublicacao,
      isbn: livro.isbn,
      quantidade: livro.quantidade
    });
  };

  const cancelarEdicao = () => {
    setEditandoId(null);
    setEditandoLivro({
      titulo: '',
      autor: '',
      anoPublicacao: '',
      isbn: '',
      quantidade: ''
    });
  };

  const salvarEdicao = async (id) => {
    try {
      await axios.put(`https://biblioteca-backend-mk0j.onrender.com/livros/${id}`, editandoLivro);
      setEditandoId(null);
      setEditandoLivro({
        titulo: '',
        autor: '',
        anoPublicacao: '',
        isbn: '',
        quantidade: ''
      });
      fetchLivros();
    } catch (error) {
      console.error('Erro ao editar livro:', error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <div className="container">
      <h2>Lista de Livros</h2>
      <ul>
  {livros.map((livro) => (
    <li key={livro.id} className="livro-item">
      {editandoId === livro.id ? (
        <div className="edit-form">
          <input
            type="text"
            value={editandoLivro.titulo}
            onChange={(e) => setEditandoLivro({ ...editandoLivro, titulo: e.target.value })}
            placeholder="Nome do livro"
          />
          <input
            type="text"
            value={editandoLivro.autor}
            onChange={(e) => setEditandoLivro({ ...editandoLivro, autor: e.target.value })}
            placeholder="Autor"
          />
          <input
            type="number"
            value={editandoLivro.anoPublicacao}
            onChange={(e) => setEditandoLivro({ ...editandoLivro, anoPublicacao: e.target.value })}
            placeholder="Ano"
          />
          <input
            type="text"
            value={editandoLivro.isbn}
            onChange={(e) => setEditandoLivro({ ...editandoLivro, isbn: e.target.value })}
            placeholder="ISBN"
          />
          <input
            type="number"
            value={editandoLivro.quantidade}
            onChange={(e) => setEditandoLivro({ ...editandoLivro, quantidade: e.target.value })}
            placeholder="Quantidade"
          />
          <button onClick={() => salvarEdicao(livro.id)}>Salvar</button>
          <button onClick={cancelarEdicao}>Cancelar</button>
        </div>
      ) : (
        <div className="livro-detalhes">
          <p><strong>Nome:</strong> {livro.titulo}</p>
          <p><strong>Autor:</strong> {livro.autor}</p>
          <p><strong>Ano:</strong> {livro.anoPublicacao}</p>
          <p><strong>ISBN:</strong> {livro.isbn}</p>
          <p><strong>Quantidade:</strong> {livro.quantidade}</p>
          <div className="botoes">
            <button onClick={() => iniciarEdicao(livro)} className="btn editar">Editar</button>
            <button onClick={() => excluirLivro(livro.id)} className="btn excluir">Excluir</button>
          </div>
        </div>
      )}
    </li>
  ))}
</ul>

      <h3>Adicionar Novo Livro</h3>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <input
        type="text"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        placeholder="Autor"
      />
      <input
        type="number"
        value={anoPublicacao}
        onChange={(e) => setAnoPublicacao(e.target.value)}
        placeholder="Ano de Publicação"
      />
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        placeholder="ISBN"
      />
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        placeholder="Quantidade"
      />
      <button onClick={adicionarLivro}>Adicionar</button>
    </div>
  );
};

export default LivroList;
