package com.biblioteca.bibliotecabackend.controller;

import com.biblioteca.bibliotecabackend.model.Livro;
import com.biblioteca.bibliotecabackend.repository.LivroRepository;
import com.biblioteca.bibliotecabackend.service.LivroService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/livros")
public class LivroController {

    private final LivroService livroService;

    public LivroController(LivroService livroService) {
        this.livroService = livroService;
    }

    @GetMapping
    public List<Livro> listarTodos() {
        return livroService.listarTodos();
    }

    @PostMapping
    public Livro criar(@RequestBody Livro livro) {
        return livroService.criar(livro);
    }
}