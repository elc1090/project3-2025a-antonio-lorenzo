package com.biblioteca.bibliotecabackend.service;

import com.biblioteca.bibliotecabackend.model.Usuario;
import com.biblioteca.bibliotecabackend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public void deletar(Long id) {
        usuarioRepository.deleteById(id);
    }

    public Usuario criar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(Long id, Usuario usuarioAtualizado) {

        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com o id: " + id));

        usuarioExistente.setNome(usuarioAtualizado.getNome());
        usuarioExistente.setEmail(usuarioAtualizado.getEmail());

        return usuarioRepository.save(usuarioExistente);
    }

    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com o ID: " + id));
    }

    public Usuario verificarCredenciais(String cpf, String senha) {
        Usuario usuario = usuarioRepository.findByCpfContainingIgnoreCase(cpf)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!usuario.getSenha().equals(senha)) {
            throw new RuntimeException("Senha incorreta");
        }

        return usuario;
    }
}