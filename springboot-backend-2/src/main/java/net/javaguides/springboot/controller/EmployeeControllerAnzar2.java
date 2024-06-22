package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees19")
public class EmployeeControllerAnzar2 {

    @Autowired
    private EmployeeRepositoryAnzar2 employeeRepositoryAnzar2;

    @GetMapping
    public List<Anzar2> getAllEmployees(){
        return employeeRepositoryAnzar2.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Anzar2 createEmployee(@RequestBody Anzar2 employee19) {
        return employeeRepositoryAnzar2.save(employee19);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Anzar2> getEmployeeById(@PathVariable  long id){
        Anzar2 employee19 = employeeRepositoryAnzar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee19);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Anzar2> updateEmployee(@PathVariable long id,@RequestBody Anzar2 employeeDetails) {
        Anzar2 updateEmployee = employeeRepositoryAnzar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage19(employeeDetails.getDatedesoutage19());
                updateEmployee.setDatedesortie19(employeeDetails.getDatedesortie19());
                updateEmployee.setQuantitelivree19(employeeDetails.getQuantitelivree19());
                updateEmployee.setQuantiteabord19(employeeDetails.getQuantiteabord19());
                updateEmployee.setQuantitetotal19(employeeDetails.getQuantitetotal19());
                updateEmployee.setStabilite19(employeeDetails.getStabilite19());
                updateEmployee.setConsmyne19(employeeDetails.getConsmyne19());
                updateEmployee.setJourautono19(employeeDetails.getJourautono19());
                updateEmployee.setDateprochainesoutage19(employeeDetails.getDateprochainesoutage19());
                updateEmployee.setSoutagedegazoil19(employeeDetails.getSoutagedegazoil19());
                updateEmployee.setPrixdegazoil19(employeeDetails.getPrixdegazoil19());
                updateEmployee.setQuantiteconsomme19(employeeDetails.getQuantiteconsomme19());
                updateEmployee.setQuantitetransbordée19(employeeDetails.getQuantitetransbordée19());
                updateEmployee.setQuantitereçue19(employeeDetails.getQuantitereçue19());
                updateEmployee.setNombredimmobilisationescale19(employeeDetails.getNombredimmobilisationescale19());
                updateEmployee.setNombredimmobilisationmer19(employeeDetails.getNombredimmobilisationmer19());
                
      
       

               employeeRepositoryAnzar2.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Anzar2 employee19 = employeeRepositoryAnzar2.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryAnzar2.delete(employee19);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
