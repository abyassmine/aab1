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
@Table(name = "employees10")
public class Toumzin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage10")
    private String datedesoutage10;

    @Column(name = "datedesortie10")
    private String datedesortie10;

     @Column(name = "quantitelivree10")
    private String quantitelivree10;

    @Column(name = "quantiteabord10")
    private String quantiteabord10;

      @Column(name = "quantitetotal10")
    private String quantitetotal10;

 @Column(name = "stabilite10")
    private String stabilite10;

   @Column(name = "consmyne10")
    private String consmyne10;

      @Column(name = "jourautono10")
    private String jourautono10;

      @Column(name = "dateprochainesoutage10")
    private String dateprochainesoutage10;

          @Column(name = "soutagedegazoil10")
    private String soutagedegazoil10;
    @Column(name = "quantiteconsomme10")
private String quantiteconsomme10;
@Column(name = "quantitetransbordée10")
private String quantitetransbordée10;
@Column(name = "quantitereçue10")
private String quantitereçue10;
@Column(name = "nombredimmobilisationescale10")
private String nombredimmobilisationescale10;
@Column(name = "nombredimmobilisationmer10")
private String nombredimmobilisationmer10;

    @Column(name = "prixdegazoil10")
    private String prixdegazoil10;

   
    
}
