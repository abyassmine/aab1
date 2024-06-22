package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryMaranda1 extends JpaRepository<Maranda1, Long> {
    // all crud database methods
}


