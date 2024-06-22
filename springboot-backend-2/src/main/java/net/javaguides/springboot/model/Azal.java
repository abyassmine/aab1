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
@Table(name = "employees22")
public class Azal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage22")
    private String datedesoutage22;
    
    @Column(name = "datedesortie22")
    private String datedesortie22;
    
    @Column(name = "quantitelivree22")
    private String quantitelivree22;
    
    @Column(name = "quantiteabord22")
    private String quantiteabord22;
    
    @Column(name = "quantitetotal22")
    private String quantitetotal22;
    
    @Column(name = "stabilite22")
    private String stabilite22;
    
    @Column(name = "consmyne22")
    private String consmyne22;
    
    @Column(name = "jourautono22")
    private String jourautono22;
    
    @Column(name = "dateprochainesoutage22")
    private String dateprochainesoutage22;
    
    @Column(name = "soutagedegazoil22")
    private String soutagedegazoil22;
    
    @Column(name = "quantiteconsomme22")
    private String quantiteconsomme22;
    
    @Column(name = "quantitetransbordée22")
    private String quantitetransbordée22;
    
    @Column(name = "quantitereçue22")
    private String quantitereçue22;
    
    @Column(name = "nombredimmobilisationescale22")
    private String nombredimmobilisationescale22;
    
    @Column(name = "nombredimmobilisationmer22")
    private String nombredimmobilisationmer22;
    
    @Column(name = "prixdegazoil22")
    private String prixdegazoil22;
    
    
}
