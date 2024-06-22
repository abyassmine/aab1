
package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Alicante;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.model.Maranda6;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepositoryAlicante extends JpaRepository<Alicante, Long> {
    // all crud database methods
}



