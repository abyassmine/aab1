package net.javaguides.springboot.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Maranda4;

public interface EmployeeRepositoryMaranda4 extends JpaRepository<Maranda4, Long> {
    // all crud database methods
}


