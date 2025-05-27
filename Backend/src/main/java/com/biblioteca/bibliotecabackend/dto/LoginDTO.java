package com.biblioteca.bibliotecabackend.dto;

public class LoginDTO {
    private String cpf;
    private String senha;

    // Construtores
    public LoginDTO() {}

    public LoginDTO(String cpf, String senha) {
        this.cpf = cpf;
        this.senha = senha;
    }

    // Getters e Setters
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}