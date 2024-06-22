package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees21")
public class EmployeeControllerBelromar2 {

    @Autowired
    private EmployeeRepositoryBelromar2 employeeRepositoryBelromar2;

    @GetMapping
    public List<Belromar2> getAllEmployees(){
        return employeeRepositoryBelromar2.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Belromar2 createEmployee(@RequestBody Belromar2 employee21) {
        return employeeRepositoryBelromar2.save(employee21);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Belromar2> getEmployeeById(@PathVariable  long id){
        Belromar2 employee21 = employeeRepositoryBelromar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee21);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Belromar2> updateEmployee(@PathVariable long id,@RequestBody Belromar2 employeeDetails) {
        Belromar2 updateEmployee = employeeRepositoryBelromar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage21(employeeDetails.getDatedesoutage21());
                updateEmployee.setDatedesortie21(employeeDetails.getDatedesortie21());
                updateEmployee.setQuantitelivree21(employeeDetails.getQuantitelivree21());
                updateEmployee.setQuantiteabord21(employeeDetails.getQuantiteabord21());
                updateEmployee.setQuantitetotal21(employeeDetails.getQuantitetotal21());
                updateEmployee.setStabilite21(employeeDetails.getStabilite21());
                updateEmployee.setConsmyne21(employeeDetails.getConsmyne21());
                updateEmployee.setJourautono21(employeeDetails.getJourautono21());
                updateEmployee.setDateprochainesoutage21(employeeDetails.getDateprochainesoutage21());
                updateEmployee.setSoutagedegazoil21(employeeDetails.getSoutagedegazoil21());
                updateEmployee.setPrixdegazoil21(employeeDetails.getPrixdegazoil21());
                updateEmployee.setQuantiteconsomme21(employeeDetails.getQuantiteconsomme21());
                updateEmployee.setQuantitetransbordée21(employeeDetails.getQuantitetransbordée21());
                updateEmployee.setQuantitereçue21(employeeDetails.getQuantitereçue21());
                updateEmployee.setNombredimmobilisationescale21(employeeDetails.getNombredimmobilisationescale21());
                updateEmployee.setNombredimmobilisationmer21(employeeDetails.getNombredimmobilisationmer21());
                


               employeeRepositoryBelromar2.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Belromar2 employee21 = employeeRepositoryBelromar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryBelromar2.delete(employee21);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
