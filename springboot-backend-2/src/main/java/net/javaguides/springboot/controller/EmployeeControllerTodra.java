package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Todra;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryTodra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees3")
public class EmployeeControllerTodra {

    @Autowired
    private EmployeeRepositoryTodra employeeRepositoryTodra;

    @GetMapping
    public List<Todra> getAllEmployees(){
        return employeeRepositoryTodra.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Todra createEmployee(@RequestBody Todra employee3) {
        return employeeRepositoryTodra.save(employee3);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Todra> getEmployeeById(@PathVariable  long id){
        Todra employee3 = employeeRepositoryTodra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee3);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Todra> updateEmployee(@PathVariable long id,@RequestBody Todra employeeDetails) {
        Todra updateEmployee = employeeRepositoryTodra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage3(employeeDetails.getDatedesoutage3());
        updateEmployee.setDatedesortie3(employeeDetails.getDatedesortie3());
        updateEmployee.setQuantitelivree3(employeeDetails.getQuantitelivree3());
         updateEmployee.setQuantiteabord3(employeeDetails.getQuantiteabord3());
           updateEmployee.setQuantitetotal3(employeeDetails.getQuantitetotal3());
         updateEmployee.setStabilite3(employeeDetails.getStabilite3());
           updateEmployee.setConsmyne3(employeeDetails.getConsmyne3());
           updateEmployee.setJourautono3(employeeDetails.getJourautono3());
             updateEmployee.setDateprochainesoutage3(employeeDetails.getDateprochainesoutage3());
              updateEmployee.setSoutagedegazoil3(employeeDetails.getSoutagedegazoil3());
               updateEmployee.setPrixdegazoil3(employeeDetails.getPrixdegazoil3());
               updateEmployee.setQuantiteconsomme3(employeeDetails.getQuantiteconsomme3());
               updateEmployee.setQuantitetransbordée3(employeeDetails.getQuantitetransbordée3());
               updateEmployee.setQuantitereçue3(employeeDetails.getQuantitereçue3());
               updateEmployee.setNombredimmobilisationescale3(employeeDetails.getNombredimmobilisationescale3());
               updateEmployee.setNombredimmobilisationmer3(employeeDetails.getNombredimmobilisationmer3());
               
       

               employeeRepositoryTodra.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Todra employee3 = employeeRepositoryTodra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryTodra.delete(employee3);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
