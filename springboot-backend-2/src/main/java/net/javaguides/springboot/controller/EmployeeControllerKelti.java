package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;

import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees1")
public class EmployeeControllerKelti {

    @Autowired
    private EmployeeRepositoryKelti employeeRepositoryKelti;

    @GetMapping
    public List<Kelti> getAllEmployees(){
        return employeeRepositoryKelti.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Kelti createEmployee(@RequestBody Kelti employee1) {
        return employeeRepositoryKelti.save(employee1);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Kelti> getEmployeeById(@PathVariable  long id){
        Kelti employee1 = employeeRepositoryKelti.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee1);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Kelti> updateEmployee(@PathVariable long id,@RequestBody Kelti employeeDetails) {
        Kelti updateEmployee = employeeRepositoryKelti.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage1(employeeDetails.getDatedesoutage1());
        updateEmployee.setDatedesortie1(employeeDetails.getDatedesortie1());
        updateEmployee.setQuantitelivree1(employeeDetails.getQuantitelivree1());
         updateEmployee.setQuantiteabord1(employeeDetails.getQuantiteabord1());
           updateEmployee.setQuantitetotal1(employeeDetails.getQuantitetotal1());
         updateEmployee.setStabilite1(employeeDetails.getStabilite1());
           updateEmployee.setConsmyne1(employeeDetails.getConsmyne1());
           updateEmployee.setJourautono1(employeeDetails.getJourautono1());
             updateEmployee.setDateprochainesoutage1(employeeDetails.getDateprochainesoutage1());
              updateEmployee.setSoutagedegazoil1(employeeDetails.getSoutagedegazoil1());
               updateEmployee.setPrixdegazoil1(employeeDetails.getPrixdegazoil1());
               updateEmployee.setQuantiteconsomme1(employeeDetails.getQuantiteconsomme1());
               updateEmployee.setQuantitetransbordée1(employeeDetails.getQuantitetransbordée1());
               updateEmployee.setQuantitereçue1(employeeDetails.getQuantitereçue1());
         updateEmployee.setNombredimmobilisationescale1(employeeDetails.getNombredimmobilisationescale1());
      updateEmployee.setNombredimmobilisationmer1(employeeDetails.getNombredimmobilisationmer1());
               
       

               employeeRepositoryKelti.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Kelti employee1 = employeeRepositoryKelti.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryKelti.delete(employee1);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
