package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryAzal;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees22")
public class EmployeeControllerAzal {

    @Autowired
    private EmployeeRepositoryAzal employeeRepositoryAzal;

    @GetMapping
    public List<Azal> getAllEmployees(){
        return employeeRepositoryAzal.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Azal createEmployee(@RequestBody Azal employee22) {
        return employeeRepositoryAzal.save(employee22);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Azal> getEmployeeById(@PathVariable  long id){
        Azal employee22 = employeeRepositoryAzal.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee22);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Azal> updateEmployee(@PathVariable long id,@RequestBody Azal employeeDetails) {
        Azal updateEmployee = employeeRepositoryAzal.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage22(employeeDetails.getDatedesoutage22());
                updateEmployee.setDatedesortie22(employeeDetails.getDatedesortie22());
                updateEmployee.setQuantitelivree22(employeeDetails.getQuantitelivree22());
                updateEmployee.setQuantiteabord22(employeeDetails.getQuantiteabord22());
                updateEmployee.setQuantitetotal22(employeeDetails.getQuantitetotal22());
                updateEmployee.setStabilite22(employeeDetails.getStabilite22());
                updateEmployee.setConsmyne22(employeeDetails.getConsmyne22());
                updateEmployee.setJourautono22(employeeDetails.getJourautono22());
                updateEmployee.setDateprochainesoutage22(employeeDetails.getDateprochainesoutage22());
                updateEmployee.setSoutagedegazoil22(employeeDetails.getSoutagedegazoil22());
                updateEmployee.setPrixdegazoil22(employeeDetails.getPrixdegazoil22());
                updateEmployee.setQuantiteconsomme22(employeeDetails.getQuantiteconsomme22());
                updateEmployee.setQuantitetransbordée22(employeeDetails.getQuantitetransbordée22());
                updateEmployee.setQuantitereçue22(employeeDetails.getQuantitereçue22());
                updateEmployee.setNombredimmobilisationescale22(employeeDetails.getNombredimmobilisationescale22());
                updateEmployee.setNombredimmobilisationmer22(employeeDetails.getNombredimmobilisationmer22());
                

               employeeRepositoryAzal.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Azal employee22 = employeeRepositoryAzal.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryAzal.delete(employee22);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
