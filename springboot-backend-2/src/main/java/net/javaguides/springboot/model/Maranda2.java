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
@Table(name = "employees16")
public class Maranda2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    
  
    @Column(name = "datedesoutage16")
private String datedesoutage16;

@Column(name = "datedesortie16")
private String datedesortie16;

@Column(name = "quantitelivree16")
private String quantitelivree16;

@Column(name = "quantiteabord16")
private String quantiteabord16;

@Column(name = "quantitetotal16")
private String quantitetotal16;

@Column(name = "stabilite16")
private String stabilite16;

@Column(name = "consmyne16")
private String consmyne16;

@Column(name = "jourautono16")
private String jourautono16;

@Column(name = "dateprochainesoutage16")
private String dateprochainesoutage16;

@Column(name = "soutagedegazoil16")
private String soutagedegazoil16;

@Column(name = "quantiteconsomme16")
private String quantiteconsomme16;

@Column(name = "quantitetransbordée16")
private String quantitetransbordée16;

@Column(name = "quantitereçue16")
private String quantitereçue16;

@Column(name = "nombredimmobilisationescale16")
private String nombredimmobilisationescale16;

@Column(name = "nombredimmobilisationmer16")
private String nombredimmobilisationmer16;

@Column(name = "prixdegazoil16")
private String prixdegazoil16;


   
    
}
