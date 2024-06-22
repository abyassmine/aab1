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
@Table(name = "employees20")
public class Belromar1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage20")
    private String datedesoutage20;
    
    @Column(name = "datedesortie20")
    private String datedesortie20;
    
    @Column(name = "quantitelivree20")
    private String quantitelivree20;
    
    @Column(name = "quantiteabord20")
    private String quantiteabord20;
    
    @Column(name = "quantitetotal20")
    private String quantitetotal20;
    
    @Column(name = "stabilite20")
    private String stabilite20;
    
    @Column(name = "consmyne20")
    private String consmyne20;
    
    @Column(name = "jourautono20")
    private String jourautono20;
    
    @Column(name = "dateprochainesoutage20")
    private String dateprochainesoutage20;
    
    @Column(name = "soutagedegazoil20")
    private String soutagedegazoil20;
    
    @Column(name = "quantiteconsomme20")
    private String quantiteconsomme20;
    
    @Column(name = "quantitetransbordée20")
    private String quantitetransbordée20;
    
    @Column(name = "quantitereçue20")
    private String quantitereçue20;
    
    @Column(name = "nombredimmobilisationescale20")
    private String nombredimmobilisationescale20;
    
    @Column(name = "nombredimmobilisationmer20")
    private String nombredimmobilisationmer20;
    
    @Column(name = "prixdegazoil20")
    private String prixdegazoil20;
    
}
