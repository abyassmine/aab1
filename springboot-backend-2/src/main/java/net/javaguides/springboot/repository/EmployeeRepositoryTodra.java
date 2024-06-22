package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Todra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryTodra extends JpaRepository<Todra, Long> {
    // all crud database methods
}


