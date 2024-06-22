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
@Table(name = "employees8")
public class Maranda6 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

      @Column(name = "datedesoutage8")
    private String datedesoutage8;

    @Column(name = "datedesortie8")
    private String datedesortie8;

     @Column(name = "quantitelivree8")
    private String quantitelivree8;

    @Column(name = "quantiteabord8")
    private String quantiteabord8;

      @Column(name = "quantitetotal8")
    private String quantitetotal8;

 @Column(name = "stabilite8")
    private String stabilite8;

   @Column(name = "consmyne8")
    private String consmyne8;

      @Column(name = "jourautono8")
    private String jourautono8;

      @Column(name = "dateprochainesoutage8")
    private String dateprochainesoutage8;

          @Column(name = "soutagedegazoil8")
    private String soutagedegazoil8;

  

      @Column(name = "quantiteconsomme8")
    private String quantiteconsomme8;
    @Column(name = "quantitetransbordée8")
    private String quantitetransbordée8;
  @Column(name = "quantitereçue8")
    private String quantitereçue8;
     @Column(name = "nombredimmobilisationescale8")
    private String nombredimmobilisationescale8;
     @Column(name = "nombredimmobilisationmer8")
    private String nombredimmobilisationmer8;
    @Column(name = "prixdegazoil8")
    private String prixdegazoil8;

   
    
}
