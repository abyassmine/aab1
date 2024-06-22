package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees20")
public class EmployeeControllerBelromar1 {

    @Autowired
    private EmployeeRepositoryBelromar1 employeeRepositoryBelromar1;

    @GetMapping
    public List<Belromar1> getAllEmployees(){
        return employeeRepositoryBelromar1.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Belromar1 createEmployee(@RequestBody Belromar1 employee20) {
        return employeeRepositoryBelromar1.save(employee20);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Belromar1> getEmployeeById(@PathVariable  long id){
        Belromar1 employee20 = employeeRepositoryBelromar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee20);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Belromar1> updateEmployee(@PathVariable long id,@RequestBody Belromar1 employeeDetails) {
        Belromar1 updateEmployee = employeeRepositoryBelromar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage20(employeeDetails.getDatedesoutage20());
updateEmployee.setDatedesortie20(employeeDetails.getDatedesortie20());
updateEmployee.setQuantitelivree20(employeeDetails.getQuantitelivree20());
updateEmployee.setQuantiteabord20(employeeDetails.getQuantiteabord20());
updateEmployee.setQuantitetotal20(employeeDetails.getQuantitetotal20());
updateEmployee.setStabilite20(employeeDetails.getStabilite20());
updateEmployee.setConsmyne20(employeeDetails.getConsmyne20());
updateEmployee.setJourautono20(employeeDetails.getJourautono20());
updateEmployee.setDateprochainesoutage20(employeeDetails.getDateprochainesoutage20());
updateEmployee.setSoutagedegazoil20(employeeDetails.getSoutagedegazoil20());
updateEmployee.setPrixdegazoil20(employeeDetails.getPrixdegazoil20());
updateEmployee.setQuantiteconsomme20(employeeDetails.getQuantiteconsomme20());
updateEmployee.setQuantitetransbordée20(employeeDetails.getQuantitetransbordée20());
updateEmployee.setQuantitereçue20(employeeDetails.getQuantitereçue20());
updateEmployee.setNombredimmobilisationescale20(employeeDetails.getNombredimmobilisationescale20());
updateEmployee.setNombredimmobilisationmer20(employeeDetails.getNombredimmobilisationmer20());


               employeeRepositoryBelromar1.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Belromar1 employee20 = employeeRepositoryBelromar1.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryBelromar1.delete(employee20);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
