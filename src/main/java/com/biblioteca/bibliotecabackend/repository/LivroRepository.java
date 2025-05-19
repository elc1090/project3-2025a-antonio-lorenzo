package com.biblioteca.bibliotecabackend.repository;

import com.biblioteca.bibliotecabackend.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {
    // Métodos customizados podem ser adicionados aqui
}