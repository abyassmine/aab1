package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Dades;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryAzal;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryDades;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees23")
public class EmployeeControllerDades {

    @Autowired
    private EmployeeRepositoryDades employeeRepositoryDades;

    @GetMapping
    public List<Dades> getAllEmployees(){
        return employeeRepositoryDades.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Dades createEmployee(@RequestBody Dades employee23) {
        return employeeRepositoryDades.save(employee23);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Dades> getEmployeeById(@PathVariable  long id){
        Dades employee23 = employeeRepositoryDades.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee23);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Dades> updateEmployee(@PathVariable long id,@RequestBody Dades employeeDetails) {
        Dades updateEmployee = employeeRepositoryDades.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage23(employeeDetails.getDatedesoutage23());
                updateEmployee.setDatedesortie23(employeeDetails.getDatedesortie23());
                updateEmployee.setQuantitelivree23(employeeDetails.getQuantitelivree23());
                updateEmployee.setQuantiteabord23(employeeDetails.getQuantiteabord23());
                updateEmployee.setQuantitetotal23(employeeDetails.getQuantitetotal23());
                updateEmployee.setStabilite23(employeeDetails.getStabilite23());
                updateEmployee.setConsmyne23(employeeDetails.getConsmyne23());
                updateEmployee.setJourautono23(employeeDetails.getJourautono23());
                updateEmployee.setDateprochainesoutage23(employeeDetails.getDateprochainesoutage23());
                updateEmployee.setSoutagedegazoil23(employeeDetails.getSoutagedegazoil23());
                updateEmployee.setPrixdegazoil23(employeeDetails.getPrixdegazoil23());
                updateEmployee.setQuantiteconsomme23(employeeDetails.getQuantiteconsomme23());
                updateEmployee.setQuantitetransbordée23(employeeDetails.getQuantitetransbordée23());
                updateEmployee.setQuantitereçue23(employeeDetails.getQuantitereçue23());
                updateEmployee.setNombredimmobilisationescale23(employeeDetails.getNombredimmobilisationescale23());
                updateEmployee.setNombredimmobilisationmer23(employeeDetails.getNombredimmobilisationmer23());
                
                employeeRepositoryDades.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Dades employee23 = employeeRepositoryDades.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryDades.delete(employee23);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
