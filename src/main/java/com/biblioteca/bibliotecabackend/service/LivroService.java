package com.biblioteca.bibliotecabackend.service;

import com.biblioteca.bibliotecabackend.model.Livro;
import com.biblioteca.bibliotecabackend.repository.LivroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Livro criar(Livro livro) {
        return livroRepository.save(livro);
    }

    public void deletar(Long id) {
        livroRepository.deleteById(id);
    }

    public List<Livro> listarPorTitulo(String titulo) {
        return livroRepository.findByTituloContainingIgnoreCase(titulo);
    }

    public List<Livro> listarPorAutor(String autor) {
        return livroRepository.findByAutorContainingIgnoreCase(autor);
    }

    public List<Livro> listarPorAnoPublicacao(Integer anoPublicacao) {
        return livroRepository.findByAnoPublicacao(anoPublicacao);
    }
}