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
@Table(name = "employees24")
public class Masine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage24")
    private String datedesoutage24;
    
    @Column(name = "datedesortie24")
    private String datedesortie24;
    
    @Column(name = "quantitelivree24")
    private String quantitelivree24;
    
    @Column(name = "quantiteabord24")
    private String quantiteabord24;
    
    @Column(name = "quantitetotal24")
    private String quantitetotal24;
    
    @Column(name = "stabilite24")
    private String stabilite24;
    
    @Column(name = "consmyne24")
    private String consmyne24;
    
    @Column(name = "jourautono24")
    private String jourautono24;
    
    @Column(name = "dateprochainesoutage24")
    private String dateprochainesoutage24;
    
    @Column(name = "soutagedegazoil24")
    private String soutagedegazoil24;
    
    @Column(name = "quantiteconsomme24")
    private String quantiteconsomme24;
    
    @Column(name = "quantitetransbordée24")
    private String quantitetransbordée24;
    
    @Column(name = "quantitereçue24")
    private String quantitereçue24;
    
    @Column(name = "nombredimmobilisationescale24")
    private String nombredimmobilisationescale24;
    
    @Column(name = "nombredimmobilisationmer24")
    private String nombredimmobilisationmer24;
    
    @Column(name = "prixdegazoil24")
    private String prixdegazoil24;
    
}
