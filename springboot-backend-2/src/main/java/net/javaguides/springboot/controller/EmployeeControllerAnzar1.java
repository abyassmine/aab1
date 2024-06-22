package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees2")
public class EmployeeControllerAnzar1 {

    @Autowired
    private EmployeeRepositoryAnzar1 employeeRepositoryAnzar1;

    @GetMapping
    public List<Anzar1> getAllEmployees(){
        return employeeRepositoryAnzar1.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Anzar1 createEmployee(@RequestBody Anzar1 employee2) {
        return employeeRepositoryAnzar1.save(employee2);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Anzar1> getEmployeeById(@PathVariable  long id){
        Anzar1 employee2 = employeeRepositoryAnzar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee2);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Anzar1> updateEmployee(@PathVariable long id,@RequestBody Anzar1 employeeDetails) {
        Anzar1 updateEmployee = employeeRepositoryAnzar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage2(employeeDetails.getDatedesoutage2());
updateEmployee.setDatedesortie2(employeeDetails.getDatedesortie2());
updateEmployee.setQuantitelivree2(employeeDetails.getQuantitelivree2());
updateEmployee.setQuantiteabord2(employeeDetails.getQuantiteabord2());
updateEmployee.setQuantitetotal2(employeeDetails.getQuantitetotal2());
updateEmployee.setStabilite2(employeeDetails.getStabilite2());
updateEmployee.setConsmyne2(employeeDetails.getConsmyne2());
updateEmployee.setJourautono2(employeeDetails.getJourautono2());
updateEmployee.setDateprochainesoutage2(employeeDetails.getDateprochainesoutage2());
updateEmployee.setSoutagedegazoil2(employeeDetails.getSoutagedegazoil2());
updateEmployee.setPrixdegazoil2(employeeDetails.getPrixdegazoil2());
updateEmployee.setQuantiteconsomme2(employeeDetails.getQuantiteconsomme2());
updateEmployee.setQuantitetransbordée2(employeeDetails.getQuantitetransbordée2());
updateEmployee.setQuantitereçue2(employeeDetails.getQuantitereçue2());
updateEmployee.setNombredimmobilisationescale2(employeeDetails.getNombredimmobilisationescale2());
updateEmployee.setNombredimmobilisationmer2(employeeDetails.getNombredimmobilisationmer2());

      
       

               employeeRepositoryAnzar1.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Anzar1 employee2 = employeeRepositoryAnzar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryAnzar1.delete(employee2);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
