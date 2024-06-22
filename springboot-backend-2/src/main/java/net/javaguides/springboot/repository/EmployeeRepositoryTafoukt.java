
package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Tafoukt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryTafoukt extends JpaRepository<Tafoukt, Long> {
    // all crud database methods
}



