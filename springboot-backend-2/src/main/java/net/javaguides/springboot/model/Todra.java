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
@Table(name = "employees3")
public class Todra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage3")
    private String datedesoutage3;

    @Column(name = "datedesortie3")
    private String datedesortie3;

     @Column(name = "quantitelivree3")
    private String quantitelivree3;

    @Column(name = "quantiteabord3")
    private String quantiteabord3;

      @Column(name = "quantitetotal3")
    private String quantitetotal3;

 @Column(name = "stabilite3")
    private String stabilite3;

   @Column(name = "consmyne3")
    private String consmyne3;

      @Column(name = "jourautono3")
    private String jourautono3;

      @Column(name = "dateprochainesoutage3")
    private String dateprochainesoutage3;

          @Column(name = "soutagedegazoil3")
    private String soutagedegazoil3;
    @Column(name = "quantiteconsomme3")
    private String quantiteconsomme3;
    @Column(name = "quantitetransbordée3")
    private String quantitetransbordée3;
    @Column(name = "quantitereçue3")
    private String quantitereçue3;
    @Column(name = "nombredimmobilisationescale3")
    private String nombredimmobilisationescale3;
    @Column(name = "nombredimmobilisationmer3")
    private String nombredimmobilisationmer3;
    
    @Column(name = "prixdegazoil3")
    private String prixdegazoil3;

   
    
}
