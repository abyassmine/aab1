package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Maranda2;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda1;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda2;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees16")
public class EmployeeControllermaranda2 {

    @Autowired
    private EmployeeRepositoryMaranda2 employeeRepositoryMaranda2;

    @GetMapping
    public List<Maranda2> getAllEmployees(){
        return employeeRepositoryMaranda2.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda2 createEmployee(@RequestBody Maranda2 employee16) {
        return employeeRepositoryMaranda2.save(employee16);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda2> getEmployeeById(@PathVariable  long id){
        Maranda2 employee16 = employeeRepositoryMaranda2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee16);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda2> updateEmployee(@PathVariable long id,@RequestBody Maranda2 employeeDetails) {
        Maranda2 updateEmployee = employeeRepositoryMaranda2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage16(employeeDetails.getDatedesoutage16());
                updateEmployee.setDatedesortie16(employeeDetails.getDatedesortie16());
                updateEmployee.setQuantitelivree16(employeeDetails.getQuantitelivree16());
                updateEmployee.setQuantiteabord16(employeeDetails.getQuantiteabord16());
                updateEmployee.setQuantitetotal16(employeeDetails.getQuantitetotal16());
                updateEmployee.setStabilite16(employeeDetails.getStabilite16());
                updateEmployee.setConsmyne16(employeeDetails.getConsmyne16());
                updateEmployee.setJourautono16(employeeDetails.getJourautono16());
                updateEmployee.setDateprochainesoutage16(employeeDetails.getDateprochainesoutage16());
                updateEmployee.setSoutagedegazoil16(employeeDetails.getSoutagedegazoil16());
                updateEmployee.setPrixdegazoil16(employeeDetails.getPrixdegazoil16());
                updateEmployee.setQuantiteconsomme16(employeeDetails.getQuantiteconsomme16());
                updateEmployee.setQuantitetransbordée16(employeeDetails.getQuantitetransbordée16());
                updateEmployee.setQuantitereçue16(employeeDetails.getQuantitereçue16());
                updateEmployee.setNombredimmobilisationescale16(employeeDetails.getNombredimmobilisationescale16());
                updateEmployee.setNombredimmobilisationmer16(employeeDetails.getNombredimmobilisationmer16());
                
                employeeRepositoryMaranda2.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda2 employee16 = employeeRepositoryMaranda2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda2.delete(employee16);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
