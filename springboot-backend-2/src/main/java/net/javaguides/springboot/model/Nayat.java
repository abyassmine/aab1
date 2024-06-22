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
@Table(name = "employees25")
public class Nayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "datedesoutage25")
    private String datedesoutage25;

    @Column(name = "datedesortie25")
    private String datedesortie25;

    @Column(name = "quantitelivree25")
    private String quantitelivree25;

    @Column(name = "quantiteabord25")
    private String quantiteabord25;

    @Column(name = "quantitetotal25")
    private String quantitetotal25;

    @Column(name = "stabilite25")
    private String stabilite25;

    @Column(name = "consmyne25")
    private String consmyne25;

    @Column(name = "jourautono25")
    private String jourautono25;

    @Column(name = "dateprochainesoutage25")
    private String dateprochainesoutage25;

    @Column(name = "soutagedegazoil25")
    private String soutagedegazoil25;

    @Column(name = "quantiteconsomme25")
    private String quantiteconsomme25;

    @Column(name = "quantitetransbordée25")
    private String quantitetransbordée25;

    @Column(name = "quantitereçue25")
    private String quantitereçue25;

    @Column(name = "nombredimmobilisationescale25")
    private String nombredimmobilisationescale25;

    @Column(name = "nombredimmobilisationmer25")
    private String nombredimmobilisationmer25;

    @Column(name = "prixdegazoil25")
    private String prixdegazoil25;

}
