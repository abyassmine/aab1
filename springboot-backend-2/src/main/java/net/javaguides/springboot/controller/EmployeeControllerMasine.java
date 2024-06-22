package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Anzar1;
import net.javaguides.springboot.model.Anzar2;
import net.javaguides.springboot.model.Azal;
import net.javaguides.springboot.model.Belromar1;
import net.javaguides.springboot.model.Belromar2;
import net.javaguides.springboot.model.Dades;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Masine;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryAzal;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryDades;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMasine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees24")
public class EmployeeControllerMasine {

    @Autowired
    private EmployeeRepositoryMasine employeeRepositoryMasine;

    @GetMapping
    public List<Masine> getAllEmployees(){
        return employeeRepositoryMasine.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Masine createEmployee(@RequestBody Masine employee24) {
        return employeeRepositoryMasine.save(employee24);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Masine> getEmployeeById(@PathVariable  long id){
        Masine employee24 = employeeRepositoryMasine.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee24);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Masine> updateEmployee(@PathVariable long id,@RequestBody Masine employeeDetails) {
        Masine updateEmployee = employeeRepositoryMasine.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage24(employeeDetails.getDatedesoutage24());
updateEmployee.setDatedesortie24(employeeDetails.getDatedesortie24());
updateEmployee.setQuantitelivree24(employeeDetails.getQuantitelivree24());
updateEmployee.setQuantiteabord24(employeeDetails.getQuantiteabord24());
updateEmployee.setQuantitetotal24(employeeDetails.getQuantitetotal24());
updateEmployee.setStabilite24(employeeDetails.getStabilite24());
updateEmployee.setConsmyne24(employeeDetails.getConsmyne24());
updateEmployee.setJourautono24(employeeDetails.getJourautono24());
updateEmployee.setDateprochainesoutage24(employeeDetails.getDateprochainesoutage24());
updateEmployee.setSoutagedegazoil24(employeeDetails.getSoutagedegazoil24());
updateEmployee.setPrixdegazoil24(employeeDetails.getPrixdegazoil24());
updateEmployee.setQuantiteconsomme24(employeeDetails.getQuantiteconsomme24());
updateEmployee.setQuantitetransbordée24(employeeDetails.getQuantitetransbordée24());
updateEmployee.setQuantitereçue24(employeeDetails.getQuantitereçue24());
updateEmployee.setNombredimmobilisationescale24(employeeDetails.getNombredimmobilisationescale24());
updateEmployee.setNombredimmobilisationmer24(employeeDetails.getNombredimmobilisationmer24());

                employeeRepositoryMasine.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Masine employee24 = employeeRepositoryMasine.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMasine.delete(employee24);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
