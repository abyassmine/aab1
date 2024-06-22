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
@Table(name = "employees6")
public class Maranda3 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage6")
    private String datedesoutage6;

    @Column(name = "datedesortie6")
    private String datedesortie6;

     @Column(name = "quantitelivree6")
    private String quantitelivree6;

    @Column(name = "quantiteabord6")
    private String quantiteabord6;

      @Column(name = "quantitetotal6")
    private String quantitetotal6;

 @Column(name = "stabilite6")
    private String stabilite6;

   @Column(name = "consmyne6")
    private String consmyne6;

      @Column(name = "jourautono6")
    private String jourautono6;

      @Column(name = "dateprochainesoutage6")
    private String dateprochainesoutage6;

          @Column(name = "soutagedegazoil6")
    private String soutagedegazoil6;

      @Column(name = "quantiteconsomme6")
    private String quantiteconsomme6;
    @Column(name = "quantitetransbordée6")
    private String quantitetransbordée6;
  @Column(name = "quantitereçue6")
    private String quantitereçue6;
     @Column(name = "nombredimmobilisationescale6")
    private String nombredimmobilisationescale6;
     @Column(name = "nombredimmobilisationmer6")
    private String nombredimmobilisationmer6;
    @Column(name = "prixdegazoil6")
    private String prixdegazoil6;

   
    
}
