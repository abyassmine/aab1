package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Maranda1;
import net.javaguides.springboot.model.Maranda2;
import net.javaguides.springboot.model.Maranda4;
import net.javaguides.springboot.model.Maranda7;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda1;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda2;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda4;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda7;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees18")
public class EmployeeControllermaranda7 {

    @Autowired
    private EmployeeRepositoryMaranda7 employeeRepositoryMaranda7;

    @GetMapping
    public List<Maranda7> getAllEmployees(){
        return employeeRepositoryMaranda7.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda7 createEmployee(@RequestBody Maranda7 employee18) {
        return employeeRepositoryMaranda7.save(employee18);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda7> getEmployeeById(@PathVariable  long id){
        Maranda7 employee18 = employeeRepositoryMaranda7.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee18);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda7> updateEmployee(@PathVariable long id,@RequestBody Maranda7 employeeDetails) {
        Maranda7 updateEmployee = employeeRepositoryMaranda7.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                updateEmployee.setDatedesoutage18(employeeDetails.getDatedesoutage18());
                updateEmployee.setDatedesortie18(employeeDetails.getDatedesortie18());
                updateEmployee.setQuantitelivree18(employeeDetails.getQuantitelivree18());
                updateEmployee.setQuantiteabord18(employeeDetails.getQuantiteabord18());
                updateEmployee.setQuantitetotal18(employeeDetails.getQuantitetotal18());
                updateEmployee.setStabilite18(employeeDetails.getStabilite18());
                updateEmployee.setConsmyne18(employeeDetails.getConsmyne18());
                updateEmployee.setJourautono18(employeeDetails.getJourautono18());
                updateEmployee.setDateprochainesoutage18(employeeDetails.getDateprochainesoutage18());
                updateEmployee.setSoutagedegazoil18(employeeDetails.getSoutagedegazoil18());
                updateEmployee.setPrixdegazoil18(employeeDetails.getPrixdegazoil18());
                updateEmployee.setQuantiteconsomme18(employeeDetails.getQuantiteconsomme18());
                updateEmployee.setQuantitetransbordée18(employeeDetails.getQuantitetransbordée18());
                updateEmployee.setQuantitereçue18(employeeDetails.getQuantitereçue18());
                updateEmployee.setNombredimmobilisationescale18(employeeDetails.getNombredimmobilisationescale18());
                updateEmployee.setNombredimmobilisationmer18(employeeDetails.getNombredimmobilisationmer18());
                

             employeeRepositoryMaranda7.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda7 employee18 = employeeRepositoryMaranda7.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda7.delete(employee18);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
