package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Kelti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryBelromar1 extends JpaRepository<Belromar1, Long> {
    // all crud database methods
}


