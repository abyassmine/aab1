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
@Table(name = "employees7")
public class Maranda5 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "datedesoutage7")
    private String datedesoutage7;

    @Column(name = "datedesortie7")
    private String datedesortie7;

     @Column(name = "quantitelivree7")
    private String quantitelivree7;

    @Column(name = "quantiteabord7")
    private String quantiteabord7;

      @Column(name = "quantitetotal7")
    private String quantitetotal7;

 @Column(name = "stabilite7")
    private String stabilite7;

   @Column(name = "consmyne7")
    private String consmyne7;

      @Column(name = "jourautono7")
    private String jourautono7;

      @Column(name = "dateprochainesoutage7")
    private String dateprochainesoutage7;

          @Column(name = "soutagedegazoil7")
    private String soutagedegazoil7;
    @Column(name = "quantiteconsomme7")
    private String quantiteconsomme7;
    @Column(name = "quantitetransbordée7")
    private String quantitetransbordée7;
  @Column(name = "quantitereçue7")
    private String quantitereçue7;
     @Column(name = "nombredimmobilisationescale7")
    private String nombredimmobilisationescale7;
     @Column(name = "nombredimmobilisationmer7")
    private String nombredimmobilisationmer7;
   
    @Column(name = "prixdegazoil7")
    private String prixdegazoil7;

   
    
}
