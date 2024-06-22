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
@Table(name = "employees11")
public class Gorgues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    
    @Column(name = "datedesoutage11")
    private String datedesoutage11;

    @Column(name = "datedesortie11")
    private String datedesortie11;

     @Column(name = "quantitelivree11")
    private String quantitelivree11;

    @Column(name = "quantiteabord11")
    private String quantiteabord11;

      @Column(name = "quantitetotal11")
    private String quantitetotal11;

 @Column(name = "stabilite11")
    private String stabilite11;

   @Column(name = "consmyne11")
    private String consmyne11;

      @Column(name = "jourautono11")
    private String jourautono11;

      @Column(name = "dateprochainesoutage11")
    private String dateprochainesoutage11;

          @Column(name = "soutagedegazoil11")
    private String soutagedegazoil11;

      @Column(name = "quantiteconsomme11")
    private String quantiteconsomme11;
    @Column(name = "quantitetransbordée11")
    private String quantitetransbordée11;
  @Column(name = "quantitereçue11")
    private String quantitereçue11;
     @Column(name = "nombredimmobilisationescale11")
    private String nombredimmobilisationescale11;
     @Column(name = "nombredimmobilisationmer11")
    private String nombredimmobilisationmer11;
    @Column(name = "prixdegazoil11")
    private String prixdegazoil11;


   
    
}
