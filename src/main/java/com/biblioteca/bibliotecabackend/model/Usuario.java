package com.biblioteca.bibliotecabackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @Column(name = "data_nascimento")
    private String dataNascimento;

    @Column(unique = true)
    private String cpf;  // Cadastro de pessoa física - único

    private String telefone;
}
