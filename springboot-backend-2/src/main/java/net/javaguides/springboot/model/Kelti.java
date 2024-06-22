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
@Table(name = "employees1")
public class Kelti {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage1")
    private String datedesoutage1;

    @Column(name = "datedesortie1")
    private String datedesortie1;

     @Column(name = "quantitelivree1")
    private String quantitelivree1;

    @Column(name = "quantiteabord1")
    private String quantiteabord1;

      @Column(name = "quantitetotal1")
    private String quantitetotal1;

 @Column(name = "stabilite1")
    private String stabilite1;

   @Column(name = "consmyne1")
    private String consmyne1;

      @Column(name = "jourautono1")
    private String jourautono1;

      @Column(name = "dateprochainesoutage1")
    private String dateprochainesoutage1;

          @Column(name = "soutagedegazoil1")
    private String soutagedegazoil1;

    @Column(name = "quantiteconsomme1")
    private String quantiteconsomme1;
    
    @Column(name = "quantitetransbordée1")
    private String quantitetransbordée1;
    
    @Column(name = "quantitereçue1")
    private String quantitereçue1;
    
    @Column(name = "nombredimmobilisationescale1")
    private String nombredimmobilisationescale1;
    
    @Column(name = "nombredimmobilisationmer1")
    private String nombredimmobilisationmer1;
    
    @Column(name = "prixdegazoil1")
    private String prixdegazoil1;

   
    
}
