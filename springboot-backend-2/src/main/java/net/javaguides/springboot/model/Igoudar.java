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
@Table(name = "employees5")
public class Igoudar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage5")
    private String datedesoutage5;

    @Column(name = "datedesortie5")
    private String datedesortie5;

     @Column(name = "quantitelivree5")
    private String quantitelivree5;

    @Column(name = "quantiteabord5")
    private String quantiteabord5;

      @Column(name = "quantitetotal5")
    private String quantitetotal5;

 @Column(name = "stabilite5")
    private String stabilite5;

   @Column(name = "consmyne5")
    private String consmyne5;

      @Column(name = "jourautono5")
    private String jourautono5;

      @Column(name = "dateprochainesoutage5")
    private String dateprochainesoutage5;

          @Column(name = "soutagedegazoil5")
    private String soutagedegazoil5;
    @Column(name = "quantiteconsomme5")
    private String quantiteconsomme5;
    @Column(name = "quantitetransbordée5")
    private String quantitetransbordée5;
    @Column(name = "quantitereçue5")
    private String quantitereçue5;
    @Column(name = "nombredimmobilisationescale5")
    private String nombredimmobilisationescale5;
    @Column(name = "nombredimmobilisationmer5")
    private String nombredimmobilisationmer5;

    @Column(name = "prixdegazoil5")
    private String prixdegazoil5;

   
    
}
