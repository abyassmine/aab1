package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda1;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees15")
public class EmployeeControllermaranda1 {

    @Autowired
    private EmployeeRepositoryMaranda1 employeeRepositoryMaranda1;

    @GetMapping
    public List<Maranda1> getAllEmployees(){
        return employeeRepositoryMaranda1.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda1 createEmployee(@RequestBody Maranda1 employee15) {
        return employeeRepositoryMaranda1.save(employee15);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda1> getEmployeeById(@PathVariable  long id){
        Maranda1 employee15 = employeeRepositoryMaranda1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee15);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda1> updateEmployee(@PathVariable long id,@RequestBody Maranda1 employeeDetails) {
        Maranda1 updateEmployee = employeeRepositoryMaranda1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage15(employeeDetails.getDatedesoutage15());
                updateEmployee.setDatedesortie15(employeeDetails.getDatedesortie15());
                updateEmployee.setQuantitelivree15(employeeDetails.getQuantitelivree15());
                updateEmployee.setQuantiteabord15(employeeDetails.getQuantiteabord15());
                updateEmployee.setQuantitetotal15(employeeDetails.getQuantitetotal15());
                updateEmployee.setStabilite15(employeeDetails.getStabilite15());
                updateEmployee.setConsmyne15(employeeDetails.getConsmyne15());
                updateEmployee.setJourautono15(employeeDetails.getJourautono15());
                updateEmployee.setDateprochainesoutage15(employeeDetails.getDateprochainesoutage15());
                updateEmployee.setSoutagedegazoil15(employeeDetails.getSoutagedegazoil15());
                updateEmployee.setPrixdegazoil15(employeeDetails.getPrixdegazoil15());
                updateEmployee.setQuantiteconsomme15(employeeDetails.getQuantiteconsomme15());
                updateEmployee.setQuantitetransbordée15(employeeDetails.getQuantitetransbordée15());
                updateEmployee.setQuantitereçue15(employeeDetails.getQuantitereçue15());
                updateEmployee.setNombredimmobilisationescale15(employeeDetails.getNombredimmobilisationescale15());
                updateEmployee.setNombredimmobilisationmer15(employeeDetails.getNombredimmobilisationmer15());
                
                employeeRepositoryMaranda1.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda1 employee15 = employeeRepositoryMaranda1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda1.delete(employee15);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
