package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Declaration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Declaration, Long> {
    Declaration findByBn(String bn);
}


