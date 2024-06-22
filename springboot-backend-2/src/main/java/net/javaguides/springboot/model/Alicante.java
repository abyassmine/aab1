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
@Table(name = "employees9")
public class Alicante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage9")
    private String datedesoutage9;

    @Column(name = "datedesortie9")
    private String datedesortie9;

     @Column(name = "quantitelivree9")
    private String quantitelivree9;

    @Column(name = "quantiteabord9")
    private String quantiteabord9;

      @Column(name = "quantitetotal9")
    private String quantitetotal9;

 @Column(name = "stabilite9")
    private String stabilite9;

   @Column(name = "consmyne9")
    private String consmyne9;

      @Column(name = "jourautono9")
    private String jourautono9;

      @Column(name = "dateprochainesoutage9")
    private String dateprochainesoutage9;

          @Column(name = "soutagedegazoil9")
    private String soutagedegazoil9;

      @Column(name = "quantiteconsomme9")
    private String quantiteconsomme9;
    @Column(name = "quantitetransbordée9")
    private String quantitetransbordée9;
  @Column(name = "quantitereçue9")
    private String quantitereçue9;
     @Column(name = "nombredimmobilisationescale9")
    private String nombredimmobilisationescale9;
     @Column(name = "nombredimmobilisationmer9")
    private String nombredimmobilisationmer9;
       @Column(name = "prixdegazoil9")
    private String prixdegazoil9;

   
    
}
