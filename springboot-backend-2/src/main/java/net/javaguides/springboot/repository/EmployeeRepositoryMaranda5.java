package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.model.Maranda5;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryMaranda5 extends JpaRepository<Maranda5, Long> {
    // all crud database methods
}


