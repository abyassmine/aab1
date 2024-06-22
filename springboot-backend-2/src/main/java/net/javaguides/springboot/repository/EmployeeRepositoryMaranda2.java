package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Maranda2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryMaranda2 extends JpaRepository<Maranda2, Long> {
    // all crud database methods
}


