package com.biblioteca.bibliotecabackend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Data
@Entity
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "livro_seq")
    @SequenceGenerator(
            name = "livro_seq",
            sequenceName = "livro_sequence",
            allocationSize = 1
    )
    private Long id;

    @Column(nullable = false, length = 255)
    private String titulo;

    @Column(nullable = false, length = 255)
    private String autor;

    @Column(name = "ano_publicacao")
    private Integer anoPublicacao;

    @Column(unique = true, length = 20)
    private String isbn;

    @Column(columnDefinition = "INTEGER DEFAULT 0")
    private Integer quantidade;
}