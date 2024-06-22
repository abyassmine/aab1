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
@Table(name = "employees14")
public class Maranda8 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  

    @Column(name = "datedesoutage14")
private String datedesoutage14;

@Column(name = "datedesortie14")
private String datedesortie14;

@Column(name = "quantitelivree14")
private String quantitelivree14;

@Column(name = "quantiteabord14")
private String quantiteabord14;

@Column(name = "quantitetotal14")
private String quantitetotal14;

@Column(name = "stabilite14")
private String stabilite14;

@Column(name = "consmyne14")
private String consmyne14;

@Column(name = "jourautono14")
private String jourautono14;

@Column(name = "dateprochainesoutage14")
private String dateprochainesoutage14;

@Column(name = "soutagedegazoil14")
private String soutagedegazoil14;

@Column(name = "quantiteconsomme14")
private String quantiteconsomme14;
@Column(name = "quantitetransbordée14")
private String quantitetransbordée14;
@Column(name = "quantitereçue14")
private String quantitereçue14;
@Column(name = "nombredimmobilisationescale14")
private String nombredimmobilisationescale14;
@Column(name = "nombredimmobilisationmer14")
private String nombredimmobilisationmer14;
@Column(name = "prixdegazoil14")
private String prixdegazoil14;

    
}
