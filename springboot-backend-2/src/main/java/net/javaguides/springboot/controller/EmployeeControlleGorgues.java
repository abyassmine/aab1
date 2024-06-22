package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Alicante;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Gorgues;

import net.javaguides.springboot.model.Maranda6;
import net.javaguides.springboot.model.Toumzin;
import net.javaguides.springboot.repository.EmployeeRepositoryAlicante;
import net.javaguides.springboot.repository.EmployeeRepositoryGorgues;
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
@RequestMapping("/api/v1/employees11")
public class EmployeeControlleGorgues {

    @Autowired
    private EmployeeRepositoryGorgues employeeRepositoryGorgues;

    @GetMapping
    public List<Gorgues> getAllEmployees(){
        return employeeRepositoryGorgues.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Gorgues createEmployee(@RequestBody Gorgues employee11) {
        return employeeRepositoryGorgues.save(employee11);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Gorgues> getEmployeeById(@PathVariable  long id){
        Gorgues employee11 = employeeRepositoryGorgues.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee11);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Gorgues> updateEmployee(@PathVariable long id,@RequestBody Gorgues employeeDetails) {
        Gorgues updateEmployee = employeeRepositoryGorgues.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage11(employeeDetails.getDatedesoutage11());
        updateEmployee.setDatedesortie11(employeeDetails.getDatedesortie11());
        updateEmployee.setQuantitelivree11(employeeDetails.getQuantitelivree11());
         updateEmployee.setQuantiteabord11(employeeDetails.getQuantiteabord11());
           updateEmployee.setQuantitetotal11(employeeDetails.getQuantitetotal11());
         updateEmployee.setStabilite11(employeeDetails.getStabilite11());
           updateEmployee.setConsmyne11(employeeDetails.getConsmyne11());
           updateEmployee.setJourautono11(employeeDetails.getJourautono11());
             updateEmployee.setDateprochainesoutage11(employeeDetails.getDateprochainesoutage11());
              updateEmployee.setSoutagedegazoil11(employeeDetails.getSoutagedegazoil11());
               updateEmployee.setPrixdegazoil11(employeeDetails.getPrixdegazoil11());
               updateEmployee.setQuantiteconsomme11(employeeDetails.getQuantiteconsomme11());
               updateEmployee.setQuantitetransbordée11(employeeDetails.getQuantitetransbordée11());
                  updateEmployee.setQuantitereçue11(employeeDetails.getQuantitereçue11());
                        updateEmployee.setNombredimmobilisationescale11(employeeDetails.getNombredimmobilisationescale11());
                   updateEmployee.setNombredimmobilisationmer11(employeeDetails.getNombredimmobilisationmer11());   
       

               employeeRepositoryGorgues.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Gorgues employee11 = employeeRepositoryGorgues.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryGorgues.delete(employee11);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
