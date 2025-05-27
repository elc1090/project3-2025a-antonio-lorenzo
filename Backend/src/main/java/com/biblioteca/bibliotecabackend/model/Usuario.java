package com.biblioteca.bibliotecabackend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Type;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "usuario",
        indexes = {
                @Index(name = "idx_usuario_email", columnList = "email"),
                @Index(name = "idx_usuario_cpf", columnList = "cpf")
        })
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_seq")
    @SequenceGenerator(
            name = "usuario_seq",
            sequenceName = "usuario_sequence",
            allocationSize = 1
    )
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String senha;

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;  // Alterado para LocalDate

    @Column(unique = true, length = 14)
    private String cpf;

    @Column(length = 20)
    private String telefone;
}