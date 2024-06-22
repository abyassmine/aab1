package net.javaguides.springboot.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Maranda4;
import net.javaguides.springboot.model.Maranda7;

public interface EmployeeRepositoryMaranda7 extends JpaRepository<Maranda7, Long> {
    // all crud database methods
}


