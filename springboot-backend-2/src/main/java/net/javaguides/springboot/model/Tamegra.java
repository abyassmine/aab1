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
@Table(name = "employees4")
public class Tamegra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage4")
    private String datedesoutage4;

    @Column(name = "datedesortie4")
    private String datedesortie4;

     @Column(name = "quantitelivree4")
    private String quantitelivree4;

    @Column(name = "quantiteabord4")
    private String quantiteabord4;

      @Column(name = "quantitetotal4")
    private String quantitetotal4;

 @Column(name = "stabilite4")
    private String stabilite4;

   @Column(name = "consmyne4")
    private String consmyne4;

      @Column(name = "jourautono4")
    private String jourautono4;

      @Column(name = "dateprochainesoutage4")
    private String dateprochainesoutage4;

          @Column(name = "soutagedegazoil4")
    private String soutagedegazoil4;
    @Column(name = "quantiteconsomme4")
    private String quantiteconsomme4;
    
    @Column(name = "quantitetransbordée4")
    private String quantitetransbordée4;
    
    @Column(name = "quantitereçue4")
    private String quantitereçue4;
    
    @Column(name = "nombredimmobilisationescale4")
    private String nombredimmobilisationescale4;
    
    @Column(name = "nombredimmobilisationmer4")
    private String nombredimmobilisationmer4;
    
    @Column(name = "prixdegazoil4")
    private String prixdegazoil4;

   
    
}
