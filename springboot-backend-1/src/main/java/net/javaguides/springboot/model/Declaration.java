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
@Table(name = "declaration")
public class Declaration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "nom")
    private String nom;
    
    @Column(name = "iddeclaration")
    private String iddeclaration;
    
    @Column(name = "subject")
    private String subject;
    
    @Column(name = "type")
    private String type;
    
    @Column(name = "description")
    private String description;

   @Column(name = "prix")
    private String prix;

    @Column(name = "date")
    private String date;

     @Column(name = "numerobl")
    private String numerobl;

     @Column(name = "quantite")
    private String quantite;

      @Column(name = "fournisseur")
    private String fournisseur;
    
    @Column(name = "nombateau")
    private String nombateau;

    private String bn;
    private String fileName;
    @Lob
    private byte[] fileData;

     @Column(name = "rapport")
    private String rapport;

    // Rest of the code...
}