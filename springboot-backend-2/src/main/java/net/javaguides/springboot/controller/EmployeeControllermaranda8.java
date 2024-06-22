package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.model.Maranda8;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda8;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees14")
public class EmployeeControllermaranda8 {

    @Autowired
    private EmployeeRepositoryMaranda8 employeeRepositoryMaranda8;

   
    @GetMapping
    public List<Maranda8> getAllEmployees() {
        return employeeRepositoryMaranda8.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda8 createEmployee(@RequestBody Maranda8 employee14) {
        return employeeRepositoryMaranda8.save(employee14);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda8> getEmployeeById(@PathVariable  long id){
        Maranda8 employee14 = employeeRepositoryMaranda8.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee14);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda8> updateEmployee(@PathVariable long id,@RequestBody Maranda8 employeeDetails) {
        Maranda8 updateEmployee = employeeRepositoryMaranda8.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage14(employeeDetails.getDatedesoutage14());
                updateEmployee.setDatedesortie14(employeeDetails.getDatedesortie14());
                updateEmployee.setQuantitelivree14(employeeDetails.getQuantitelivree14());
                updateEmployee.setQuantiteabord14(employeeDetails.getQuantiteabord14());
                updateEmployee.setQuantitetotal14(employeeDetails.getQuantitetotal14());
                updateEmployee.setStabilite14(employeeDetails.getStabilite14());
                updateEmployee.setConsmyne14(employeeDetails.getConsmyne14());
                updateEmployee.setJourautono14(employeeDetails.getJourautono14());
                updateEmployee.setDateprochainesoutage14(employeeDetails.getDateprochainesoutage14());
                updateEmployee.setSoutagedegazoil14(employeeDetails.getSoutagedegazoil14());
                updateEmployee.setPrixdegazoil14(employeeDetails.getPrixdegazoil14());
                updateEmployee.setQuantiteconsomme14(employeeDetails.getQuantiteconsomme14());
                updateEmployee.setQuantitetransbordée14(employeeDetails.getQuantitetransbordée14());
                updateEmployee.setQuantitereçue14(employeeDetails.getQuantitereçue14());
                updateEmployee.setNombredimmobilisationescale14(employeeDetails.getNombredimmobilisationescale14());
                updateEmployee.setNombredimmobilisationmer14(employeeDetails.getNombredimmobilisationmer14());
                
                 employeeRepositoryMaranda8.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda8 employee14 = employeeRepositoryMaranda8.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda8.delete(employee14);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
