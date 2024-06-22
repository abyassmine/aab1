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
@Table(name = "employees23")
public class Dades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage23")
    private String datedesoutage23;
    
    @Column(name = "datedesortie23")
    private String datedesortie23;
    
    @Column(name = "quantitelivree23")
    private String quantitelivree23;
    
    @Column(name = "quantiteabord23")
    private String quantiteabord23;
    
    @Column(name = "quantitetotal23")
    private String quantitetotal23;
    
    @Column(name = "stabilite23")
    private String stabilite23;
    
    @Column(name = "consmyne23")
    private String consmyne23;
    
    @Column(name = "jourautono23")
    private String jourautono23;
    
    @Column(name = "dateprochainesoutage23")
    private String dateprochainesoutage23;
    
    @Column(name = "soutagedegazoil23")
    private String soutagedegazoil23;
    
    @Column(name = "quantiteconsomme23")
    private String quantiteconsomme23;
    
    @Column(name = "quantitetransbordée23")
    private String quantitetransbordée23;
    
    @Column(name = "quantitereçue23")
    private String quantitereçue23;
    
    @Column(name = "nombredimmobilisationescale23")
    private String nombredimmobilisationescale23;
    
    @Column(name = "nombredimmobilisationmer23")
    private String nombredimmobilisationmer23;
    
    @Column(name = "prixdegazoil23")
    private String prixdegazoil23;
    
}
