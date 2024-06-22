package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees19")
public class Anzar2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage19")
    private String datedesoutage19;

    @Column(name = "datedesortie19")
    private String datedesortie19;

    @Column(name = "quantitelivree19")
    private String quantitelivree19;

    @Column(name = "quantiteabord19")
    private String quantiteabord19;

    @Column(name = "quantitetotal19")
    private String quantitetotal19;

    @Column(name = "stabilite19")
    private String stabilite19;

    @Column(name = "consmyne19")
    private String consmyne19;

    @Column(name = "jourautono19")
    private String jourautono19;

    @Column(name = "dateprochainesoutage19")
    private String dateprochainesoutage19;

    @Column(name = "soutagedegazoil19")
    private String soutagedegazoil19;

    @Column(name = "quantiteconsomme19")
    private String quantiteconsomme19;

    @Column(name = "quantitetransbordée19")
    private String quantitetransbordée19;

    @Column(name = "quantitereçue19")
    private String quantitereçue19;

    @Column(name = "nombredimmobilisationescale19")
    private String nombredimmobilisationescale19;

    @Column(name = "nombredimmobilisationmer19")
    private String nombredimmobilisationmer19;

    @Column(name = "prixdegazoil19")
    private String prixdegazoil19;
    
}
