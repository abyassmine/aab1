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
import net.javaguides.springboot.model.Nayat;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar1;
import net.javaguides.springboot.repository.EmployeeRepositoryAnzar2;
import net.javaguides.springboot.repository.EmployeeRepositoryAzal;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar1;
import net.javaguides.springboot.repository.EmployeeRepositoryBelromar2;
import net.javaguides.springboot.repository.EmployeeRepositoryDades;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMasine;
import net.javaguides.springboot.repository.EmployeeRepositoryNayat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees25")
public class EmployeeControllerNayat {

    @Autowired
    private EmployeeRepositoryNayat employeeRepositoryNayat;

    @GetMapping
    public List<Nayat> getAllEmployees(){
        return employeeRepositoryNayat.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Nayat createEmployee(@RequestBody Nayat employee25) {
        return employeeRepositoryNayat.save(employee25);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Nayat> getEmployeeById(@PathVariable  long id){
        Nayat employee25 = employeeRepositoryNayat.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee25);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Nayat> updateEmployee(@PathVariable long id,@RequestBody Nayat employeeDetails) {
        Nayat updateEmployee = employeeRepositoryNayat.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage25(employeeDetails.getDatedesoutage25());
                updateEmployee.setDatedesortie25(employeeDetails.getDatedesortie25());
                updateEmployee.setQuantitelivree25(employeeDetails.getQuantitelivree25());
                updateEmployee.setQuantiteabord25(employeeDetails.getQuantiteabord25());
                updateEmployee.setQuantitetotal25(employeeDetails.getQuantitetotal25());
                updateEmployee.setStabilite25(employeeDetails.getStabilite25());
                updateEmployee.setConsmyne25(employeeDetails.getConsmyne25());
                updateEmployee.setJourautono25(employeeDetails.getJourautono25());
                updateEmployee.setDateprochainesoutage25(employeeDetails.getDateprochainesoutage25());
                updateEmployee.setSoutagedegazoil25(employeeDetails.getSoutagedegazoil25());
                updateEmployee.setPrixdegazoil25(employeeDetails.getPrixdegazoil25());
                updateEmployee.setQuantiteconsomme25(employeeDetails.getQuantiteconsomme25());
                updateEmployee.setQuantitetransbordée25(employeeDetails.getQuantitetransbordée25());
                updateEmployee.setQuantitereçue25(employeeDetails.getQuantitereçue25());
                updateEmployee.setNombredimmobilisationescale25(employeeDetails.getNombredimmobilisationescale25());
                updateEmployee.setNombredimmobilisationmer25(employeeDetails.getNombredimmobilisationmer25());
                

                employeeRepositoryNayat.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Nayat employee25 = employeeRepositoryNayat.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryNayat.delete(employee25);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
