package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Tafoukt;
import net.javaguides.springboot.repository.EmployeeRepositoryTafoukt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees12")
public class EmployeeControlleTafoukt {

    @Autowired
    private EmployeeRepositoryTafoukt employeeRepositoryTafoukt;

    @GetMapping
    public List<Tafoukt> getAllEmployees() {
        return employeeRepositoryTafoukt.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Tafoukt createEmployee(@RequestBody Tafoukt employee12) {
        return employeeRepositoryTafoukt.save(employee12);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Tafoukt> getEmployeeById(@PathVariable long id) {
        Tafoukt employee12 = employeeRepositoryTafoukt.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee12);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Tafoukt> updateEmployee(@PathVariable long id, @RequestBody Tafoukt employeeDetails) {
        Tafoukt updateEmployee = employeeRepositoryTafoukt.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        updateEmployee.setDatedesoutage12(employeeDetails.getDatedesoutage12());
        updateEmployee.setDatedesortie12(employeeDetails.getDatedesortie12());
        updateEmployee.setQuantitelivree12(employeeDetails.getQuantitelivree12());
        updateEmployee.setQuantiteabord12(employeeDetails.getQuantiteabord12());
        updateEmployee.setQuantitetotal12(employeeDetails.getQuantitetotal12());
        updateEmployee.setStabilite12(employeeDetails.getStabilite12());
        updateEmployee.setConsmyne12(employeeDetails.getConsmyne12());
        updateEmployee.setJourautono12(employeeDetails.getJourautono12());
        updateEmployee.setDateprochainesoutage12(employeeDetails.getDateprochainesoutage12());
        updateEmployee.setSoutagedegazoil12(employeeDetails.getSoutagedegazoil12());
        updateEmployee.setPrixdegazoil12(employeeDetails.getPrixdegazoil12());
        updateEmployee.setQuantiteconsomme12(employeeDetails.getQuantiteconsomme12());
        updateEmployee.setQuantitetransbordée12(employeeDetails.getQuantitetransbordée12());
        updateEmployee.setQuantitereçue12(employeeDetails.getQuantitereçue12());
        updateEmployee.setNombredimmobilisationescale12(employeeDetails.getNombredimmobilisationescale12());
        updateEmployee.setNombredimmobilisationmer12(employeeDetails.getNombredimmobilisationmer12());

        employeeRepositoryTafoukt.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {

        Tafoukt employee12 = employeeRepositoryTafoukt.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        employeeRepositoryTafoukt.delete(employee12);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
