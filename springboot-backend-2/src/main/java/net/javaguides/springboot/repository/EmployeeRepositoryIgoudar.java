package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryIgoudar extends JpaRepository<Igoudar, Long> {
    // all crud database methods
}


