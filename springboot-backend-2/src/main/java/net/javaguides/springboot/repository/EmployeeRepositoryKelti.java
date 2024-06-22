package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryKelti extends JpaRepository<Kelti, Long> {
    // all crud database methods
}


