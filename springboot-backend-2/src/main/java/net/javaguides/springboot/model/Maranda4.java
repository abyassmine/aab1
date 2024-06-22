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
@Table(name = "employees17")
public class Maranda4 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  
    @Column(name = "datedesoutage17")
    private String datedesoutage17;
    
    @Column(name = "datedesortie17")
    private String datedesortie17;
    
    @Column(name = "quantitelivree17")
    private String quantitelivree17;
    
    @Column(name = "quantiteabord17")
    private String quantiteabord17;
    
    @Column(name = "quantitetotal17")
    private String quantitetotal17;
    
    @Column(name = "stabilite17")
    private String stabilite17;
    
    @Column(name = "consmyne17")
    private String consmyne17;
    
    @Column(name = "jourautono17")
    private String jourautono17;
    
    @Column(name = "dateprochainesoutage17")
    private String dateprochainesoutage17;
    
    @Column(name = "soutagedegazoil17")
    private String soutagedegazoil17;
    
    @Column(name = "quantiteconsomme17")
    private String quantiteconsomme17;
    
    @Column(name = "quantitetransbordée17")
    private String quantitetransbordée17;
    
    @Column(name = "quantitereçue17")
    private String quantitereçue17;
    
    @Column(name = "nombredimmobilisationescale17")
    private String nombredimmobilisationescale17;
    
    @Column(name = "nombredimmobilisationmer17")
    private String nombredimmobilisationmer17;
    
    @Column(name = "prixdegazoil17")
    private String prixdegazoil17;
    
   
    
}
