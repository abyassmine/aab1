package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar2;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepositoryAzal extends JpaRepository<Azal, Long> {
    // all crud database methods
}


