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
@Table(name = "employees18")
public class Maranda7 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  
    @Column(name = "datedesoutage18")
    private String datedesoutage18;
    
    @Column(name = "datedesortie18")
    private String datedesortie18;
    
    @Column(name = "quantitelivree18")
    private String quantitelivree18;
    
    @Column(name = "quantiteabord18")
    private String quantiteabord18;
    
    @Column(name = "quantitetotal18")
    private String quantitetotal18;
    
    @Column(name = "stabilite18")
    private String stabilite18;
    
    @Column(name = "consmyne18")
    private String consmyne18;
    
    @Column(name = "jourautono18")
    private String jourautono18;
    
    @Column(name = "dateprochainesoutage18")
    private String dateprochainesoutage18;
    
    @Column(name = "soutagedegazoil18")
    private String soutagedegazoil18;
    
    @Column(name = "quantiteconsomme18")
    private String quantiteconsomme18;
    
    @Column(name = "quantitetransbordée18")
    private String quantitetransbordée18;
    
    @Column(name = "quantitereçue18")
    private String quantitereçue18;
    
    @Column(name = "nombredimmobilisationescale18")
    private String nombredimmobilisationescale18;
    
    @Column(name = "nombredimmobilisationmer18")
    private String nombredimmobilisationmer18;
    
    @Column(name = "prixdegazoil18")
    private String prixdegazoil18;
     
    
}
