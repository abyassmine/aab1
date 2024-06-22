package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Dades;
import net.javaguides.springboot.model.Masine;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepositoryMasine extends JpaRepository<Masine, Long> {
    // all crud database methods
}


