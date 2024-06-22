package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.model.Mlyelhabib;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryMlyelhabib extends JpaRepository<Mlyelhabib, Long> {
    // all crud database methods
}


