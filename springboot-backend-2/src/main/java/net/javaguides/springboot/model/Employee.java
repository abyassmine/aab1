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
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
    @Column(name = "datedesoutage")
    private String datedesoutage;

    @Column(name = "datedesortie")
    private String datedesortie;

     @Column(name = "quantitelivree")
    private String quantitelivree;

    @Column(name = "quantiteabord")
    private String quantiteabord;

      @Column(name = "quantitetotal")
    private String quantitetotal;

 @Column(name = "stabilite")
    private String stabilite;

   @Column(name = "consmyne")
    private String consmyne;

      @Column(name = "jourautono")
    private String jourautono;

      @Column(name = "dateprochainesoutage")
    private String dateprochainesoutage;

          @Column(name = "soutagedegazoil")
    private String soutagedegazoil;

    @Column(name = "prixdegazoil")
    private String prixdegazoil;
@Column(name = "quantitereçu ")
    private String quantitereçu;

    @Column(name = "quantitetransbordée ")
    private String quantitetransbordée;
     @Column(name = "quantiteapproximative ")
    private String quantiteapproximative;


    @Column(name = "nom")
    private String nom;
    
    @Column(name = "entite")
    private String entite;
    
    @Column(name = "fonction")
    private String fonction;
    
    @Column(name = "marque")
    private String marque;
    
    @Column(name = "model")
    private String model;
   
    @Column(name = "ndeserie")
    private String ndeserie;
    
    @Column(name = "codeimmob")
    private String codeImmob;
    
    @Column(name = "datdacquis")
    private String datdacquis;
    
    @Column(name = "etat")
    private String etat;

    @Column(name = "observation")
    private String observation;

    @Column(name = "type")
    private String type;
   
    @Column(name = "departmentId")
    private String departmentId;
    
}
