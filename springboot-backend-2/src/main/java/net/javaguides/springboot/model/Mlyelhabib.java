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
@Table(name = "employees13")
public class Mlyelhabib {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage13")
private String datedesoutage13;

@Column(name = "datedesortie13")
private String datedesortie13;

@Column(name = "quantitelivree13")
private String quantitelivree13;

@Column(name = "quantiteabord13")
private String quantiteabord13;

@Column(name = "quantitetotal13")
private String quantitetotal13;

@Column(name = "stabilite13")
private String stabilite13;

@Column(name = "consmyne13")
private String consmyne13;

@Column(name = "jourautono13")
private String jourautono13;

@Column(name = "dateprochainesoutage13")
private String dateprochainesoutage13;

@Column(name = "soutagedegazoil13")
private String soutagedegazoil13;

@Column(name = "quantiteconsomme13")
private String quantiteconsomme13;

@Column(name = "quantitetransbordée13")
private String quantitetransbordée13;

@Column(name = "quantitereçue13")
private String quantitereçue13;

@Column(name = "nombredimmobilisationescale13")
private String nombredimmobilisationescale13;

@Column(name = "nombredimmobilisationmer13")
private String nombredimmobilisationmer13;

@Column(name = "prixdegazoil13")
private String prixdegazoil13;

   
    
}
