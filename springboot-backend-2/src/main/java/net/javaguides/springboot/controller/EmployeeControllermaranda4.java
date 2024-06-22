package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Maranda2;
import net.javaguides.springboot.model.Maranda4;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda1;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda2;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees17")
public class EmployeeControllermaranda4 {

    @Autowired
    private EmployeeRepositoryMaranda4 employeeRepositoryMaranda4;

    @GetMapping
    public List<Maranda4> getAllEmployees(){
        return employeeRepositoryMaranda4.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda4 createEmployee(@RequestBody Maranda4 employee17) {
        return employeeRepositoryMaranda4.save(employee17);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda4> getEmployeeById(@PathVariable  long id){
        Maranda4 employee17 = employeeRepositoryMaranda4.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee17);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda4> updateEmployee(@PathVariable long id,@RequestBody Maranda4 employeeDetails) {
        Maranda4 updateEmployee = employeeRepositoryMaranda4.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage17(employeeDetails.getDatedesoutage17());
                updateEmployee.setDatedesortie17(employeeDetails.getDatedesortie17());
                updateEmployee.setQuantitelivree17(employeeDetails.getQuantitelivree17());
                updateEmployee.setQuantiteabord17(employeeDetails.getQuantiteabord17());
                updateEmployee.setQuantitetotal17(employeeDetails.getQuantitetotal17());
                updateEmployee.setStabilite17(employeeDetails.getStabilite17());
                updateEmployee.setConsmyne17(employeeDetails.getConsmyne17());
                updateEmployee.setJourautono17(employeeDetails.getJourautono17());
                updateEmployee.setDateprochainesoutage17(employeeDetails.getDateprochainesoutage17());
                updateEmployee.setSoutagedegazoil17(employeeDetails.getSoutagedegazoil17());
                updateEmployee.setPrixdegazoil17(employeeDetails.getPrixdegazoil17());
                updateEmployee.setQuantiteconsomme17(employeeDetails.getQuantiteconsomme17());
                updateEmployee.setQuantitetransbordée17(employeeDetails.getQuantitetransbordée17());
                updateEmployee.setQuantitereçue17(employeeDetails.getQuantitereçue17());
                updateEmployee.setNombredimmobilisationescale17(employeeDetails.getNombredimmobilisationescale17());
                updateEmployee.setNombredimmobilisationmer17(employeeDetails.getNombredimmobilisationmer17());
                
                employeeRepositoryMaranda4.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda4 employee17 = employeeRepositoryMaranda4.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda4.delete(employee17);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
