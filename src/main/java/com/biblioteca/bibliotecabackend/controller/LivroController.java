package com.biblioteca.bibliotecabackend.controller;

import com.biblioteca.bibliotecabackend.model.Livro;
import com.biblioteca.bibliotecabackend.service.LivroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://antonio-lorenzo-t3.netlify.app"
})
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

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizar(@PathVariable Long id, @RequestBody Livro livroAtualizado) {
        try {
            Livro livro = livroService.atualizar(id, livroAtualizado);
            return ResponseEntity.ok(livro);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        livroService.deletar(id);
    }

    @GetMapping("/titulo/{titulo}")
    public List<Livro> listarPorTitulo(@PathVariable String titulo) {
        return livroService.listarPorTitulo(titulo);
    }

    @GetMapping("/autor/{autor}")
    public List<Livro> listarPorAutor(@PathVariable String autor) {
        return livroService.listarPorAutor(autor);
    }

    @GetMapping("/ano/{anoPublicacao}")
    public List<Livro> listarPorAnoPublicacao(@PathVariable Integer anoPublicacao) {
        return livroService.listarPorAnoPublicacao(anoPublicacao);
    }
}