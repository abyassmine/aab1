package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Dades;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepositoryDades extends JpaRepository<Dades, Long> {
    // all crud database methods
}


