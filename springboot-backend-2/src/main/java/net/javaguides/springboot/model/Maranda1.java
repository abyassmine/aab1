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
@Table(name = "employees15")
public class Maranda1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  
    @Column(name = "datedesoutage15")
    private String datedesoutage15;
    
    @Column(name = "datedesortie15")
    private String datedesortie15;
    
    @Column(name = "quantitelivree15")
    private String quantitelivree15;
    
    @Column(name = "quantiteabord15")
    private String quantiteabord15;
    
    @Column(name = "quantitetotal15")
    private String quantitetotal15;
    
    @Column(name = "stabilite15")
    private String stabilite15;
    
    @Column(name = "consmyne15")
    private String consmyne15;
    
    @Column(name = "jourautono15")
    private String jourautono15;
    
    @Column(name = "dateprochainesoutage15")
    private String dateprochainesoutage15;
    
    @Column(name = "soutagedegazoil15")
    private String soutagedegazoil15;
    
    @Column(name = "quantiteconsomme15")
    private String quantiteconsomme15;
    
    @Column(name = "quantitetransbordée15")
    private String quantitetransbordée15;
    
    @Column(name = "quantitereçue15")
    private String quantitereçue15;
    
    @Column(name = "nombredimmobilisationescale15")
    private String nombredimmobilisationescale15;
    
    @Column(name = "nombredimmobilisationmer15")
    private String nombredimmobilisationmer15;
    
    @Column(name = "prixdegazoil15")
    private String prixdegazoil15;
    

   
    
}
