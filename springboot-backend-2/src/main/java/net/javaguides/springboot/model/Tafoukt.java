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
@Table(name = "employees12")
public class Tafoukt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    
    @Column(name = "datedesoutage12")
    private String datedesoutage12;
    
    @Column(name = "datedesortie12")
    private String datedesortie12;
    
    @Column(name = "quantitelivree12")
    private String quantitelivree12;
    
    @Column(name = "quantiteabord12")
    private String quantiteabord12;
    
    @Column(name = "quantitetotal12")
    private String quantitetotal12;
    
    @Column(name = "stabilite12")
    private String stabilite12;
    
    @Column(name = "consmyne12")
    private String consmyne12;
    
    @Column(name = "jourautono12")
    private String jourautono12;
    
    @Column(name = "dateprochainesoutage12")
    private String dateprochainesoutage12;
    
    @Column(name = "soutagedegazoil12")
    private String soutagedegazoil12;
    
    @Column(name = "quantiteconsomme12")
    private String quantiteconsomme12;
    
    @Column(name = "quantitetransbordée12")
    private String quantitetransbordée12;
    
    @Column(name = "quantitereçue12")
    private String quantitereçue12;
    
    @Column(name = "nombredimmobilisationescale12")
    private String nombredimmobilisationescale12;
    
    @Column(name = "nombredimmobilisationmer12")
    private String nombredimmobilisationmer12;
    
    @Column(name = "prixdegazoil12")
    private String prixdegazoil12;
    


   
    
}
