package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Mlyelhabib;
import net.javaguides.springboot.model.Igoudar;
// Update model class
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
 // Update repository interface
import net.javaguides.springboot.repository.EmployeeRepositoryMlyelhabib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees13") // Update API path
public class EmployeeControllerMlyelhabib {

    @Autowired
    private EmployeeRepositoryMlyelhabib employeeRepositoryMlyelhabib; // Update repository field

    @GetMapping
    public List<Mlyelhabib> getAllEmployees(){
        return employeeRepositoryMlyelhabib.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Mlyelhabib createEmployee(@RequestBody Mlyelhabib employee13) { // Update parameter name
        return employeeRepositoryMlyelhabib.save(employee13);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Mlyelhabib> getEmployeeById(@PathVariable long id){
        Mlyelhabib employee13 = employeeRepositoryMlyelhabib.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee13);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Mlyelhabib> updateEmployee(@PathVariable long id, @RequestBody Mlyelhabib employeeDetails) {
        Mlyelhabib updateEmployee = employeeRepositoryMlyelhabib.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        updateEmployee.setDatedesoutage13(employeeDetails.getDatedesoutage13());
        updateEmployee.setDatedesortie13(employeeDetails.getDatedesortie13());
        updateEmployee.setQuantitelivree13(employeeDetails.getQuantitelivree13());
        updateEmployee.setQuantiteabord13(employeeDetails.getQuantiteabord13());
        updateEmployee.setQuantitetotal13(employeeDetails.getQuantitetotal13());
        updateEmployee.setStabilite13(employeeDetails.getStabilite13());
        updateEmployee.setConsmyne13(employeeDetails.getConsmyne13());
        updateEmployee.setJourautono13(employeeDetails.getJourautono13());
        updateEmployee.setDateprochainesoutage13(employeeDetails.getDateprochainesoutage13());
        updateEmployee.setSoutagedegazoil13(employeeDetails.getSoutagedegazoil13());
        updateEmployee.setPrixdegazoil13(employeeDetails.getPrixdegazoil13());
        updateEmployee.setQuantiteconsomme13(employeeDetails.getQuantiteconsomme13());
        updateEmployee.setQuantitetransbordée13(employeeDetails.getQuantitetransbordée13());
        updateEmployee.setQuantitereçue13(employeeDetails.getQuantitereçue13());
        updateEmployee.setNombredimmobilisationescale13(employeeDetails.getNombredimmobilisationescale13());
        updateEmployee.setNombredimmobilisationmer13(employeeDetails.getNombredimmobilisationmer13());
        
        employeeRepositoryMlyelhabib.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Mlyelhabib employee13 = employeeRepositoryMlyelhabib.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        employeeRepositoryMlyelhabib.delete(employee13);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
