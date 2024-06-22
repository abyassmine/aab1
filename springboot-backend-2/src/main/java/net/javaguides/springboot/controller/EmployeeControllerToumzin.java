package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Alicante;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;

import net.javaguides.springboot.model.Maranda6;
import net.javaguides.springboot.model.Toumzin;
import net.javaguides.springboot.repository.EmployeeRepositoryAlicante;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda5;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda6;
import net.javaguides.springboot.repository.EmployeeRepositoryToumzin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees10")
public class EmployeeControllerToumzin {

    @Autowired
    private EmployeeRepositoryToumzin employeeRepositoryToumzin;

    @GetMapping
    public List<Toumzin> getAllEmployees(){
        return employeeRepositoryToumzin.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Toumzin createEmployee(@RequestBody Toumzin employee10) {
        return employeeRepositoryToumzin.save(employee10);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Toumzin> getEmployeeById(@PathVariable  long id){
        Toumzin employee10 = employeeRepositoryToumzin.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee10);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Toumzin> updateEmployee(@PathVariable long id,@RequestBody Toumzin employeeDetails) {
        Toumzin updateEmployee = employeeRepositoryToumzin.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage10(employeeDetails.getDatedesoutage10());
        updateEmployee.setDatedesortie10(employeeDetails.getDatedesortie10());
        updateEmployee.setQuantitelivree10(employeeDetails.getQuantitelivree10());
         updateEmployee.setQuantiteabord10(employeeDetails.getQuantiteabord10());
           updateEmployee.setQuantitetotal10(employeeDetails.getQuantitetotal10());
         updateEmployee.setStabilite10(employeeDetails.getStabilite10());
           updateEmployee.setConsmyne10(employeeDetails.getConsmyne10());
           updateEmployee.setJourautono10(employeeDetails.getJourautono10());
             updateEmployee.setDateprochainesoutage10(employeeDetails.getDateprochainesoutage10());
              updateEmployee.setSoutagedegazoil10(employeeDetails.getSoutagedegazoil10());
               updateEmployee.setPrixdegazoil10(employeeDetails.getPrixdegazoil10());
               updateEmployee.setQuantiteconsomme10(employeeDetails.getQuantiteconsomme10());
updateEmployee.setQuantitetransbordée10(employeeDetails.getQuantitetransbordée10());
updateEmployee.setQuantitereçue10(employeeDetails.getQuantitereçue10());
updateEmployee.setNombredimmobilisationescale10(employeeDetails.getNombredimmobilisationescale10());
updateEmployee.setNombredimmobilisationmer10(employeeDetails.getNombredimmobilisationmer10());

       

               employeeRepositoryToumzin.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Toumzin employee10 = employeeRepositoryToumzin.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryToumzin.delete(employee10);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
