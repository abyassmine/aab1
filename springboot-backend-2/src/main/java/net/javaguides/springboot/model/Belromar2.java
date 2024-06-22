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
@Table(name = "employees21")
public class Belromar2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage21")
    private String datedesoutage21;
    
    @Column(name = "datedesortie21")
    private String datedesortie21;
    
    @Column(name = "quantitelivree21")
    private String quantitelivree21;
    
    @Column(name = "quantiteabord21")
    private String quantiteabord21;
    
    @Column(name = "quantitetotal21")
    private String quantitetotal21;
    
    @Column(name = "stabilite21")
    private String stabilite21;
    
    @Column(name = "consmyne21")
    private String consmyne21;
    
    @Column(name = "jourautono21")
    private String jourautono21;
    
    @Column(name = "dateprochainesoutage21")
    private String dateprochainesoutage21;
    
    @Column(name = "soutagedegazoil21")
    private String soutagedegazoil21;
    
    @Column(name = "quantiteconsomme21")
    private String quantiteconsomme21;
    
    @Column(name = "quantitetransbordée21")
    private String quantitetransbordée21;
    
    @Column(name = "quantitereçue21")
    private String quantitereçue21;
    
    @Column(name = "nombredimmobilisationescale21")
    private String nombredimmobilisationescale21;
    
    @Column(name = "nombredimmobilisationmer21")
    private String nombredimmobilisationmer21;
    
    @Column(name = "prixdegazoil21")
    private String prixdegazoil21;
    
}
