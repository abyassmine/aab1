package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Dades;
import net.javaguides.springboot.model.Masine;
import net.javaguides.springboot.model.Nayat;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepositoryNayat extends JpaRepository<Nayat, Long> {
    // all crud database methods
}


