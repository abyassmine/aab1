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
@Table(name = "employees2")
public class Anzar1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage2")
private String datedesoutage2;

@Column(name = "datedesortie2")
private String datedesortie2;

@Column(name = "quantitelivree2")
private String quantitelivree2;

@Column(name = "quantiteabord2")
private String quantiteabord2;

@Column(name = "quantitetotal2")
private String quantitetotal2;

@Column(name = "stabilite2")
private String stabilite2;

@Column(name = "consmyne2")
private String consmyne2;

@Column(name = "jourautono2")
private String jourautono2;

@Column(name = "dateprochainesoutage2")
private String dateprochainesoutage2;

@Column(name = "soutagedegazoil2")
private String soutagedegazoil2;

@Column(name = "quantiteconsomme2")
private String quantiteconsomme2;

@Column(name = "quantitetransbordée2")
private String quantitetransbordée2;

@Column(name = "quantitereçue2")
private String quantitereçue2;

@Column(name = "nombredimmobilisationescale2")
private String nombredimmobilisationescale2;

@Column(name = "nombredimmobilisationmer2")
private String nombredimmobilisationmer2;

@Column(name = "prixdegazoil2")
private String prixdegazoil2;

   
    
}
