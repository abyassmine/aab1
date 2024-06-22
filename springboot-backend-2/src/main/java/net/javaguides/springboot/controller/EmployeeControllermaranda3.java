package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda3;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees6")
public class EmployeeControllermaranda3 {

    @Autowired
    private EmployeeRepositoryMaranda3 employeeRepositoryMaranda3;

    @GetMapping
    public List<Maranda3> getAllEmployees(){
        return employeeRepositoryMaranda3.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda3 createEmployee(@RequestBody Maranda3 employee6) {
        return employeeRepositoryMaranda3.save(employee6);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda3> getEmployeeById(@PathVariable  long id){
        Maranda3 employee6 = employeeRepositoryMaranda3.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee6);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda3> updateEmployee(@PathVariable long id,@RequestBody Maranda3 employeeDetails) {
        Maranda3 updateEmployee = employeeRepositoryMaranda3.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage6(employeeDetails.getDatedesoutage6());
        updateEmployee.setDatedesortie6(employeeDetails.getDatedesortie6());
        updateEmployee.setQuantitelivree6(employeeDetails.getQuantitelivree6());
         updateEmployee.setQuantiteabord6(employeeDetails.getQuantiteabord6());
           updateEmployee.setQuantitetotal6(employeeDetails.getQuantitetotal6());
         updateEmployee.setStabilite6(employeeDetails.getStabilite6());
           updateEmployee.setConsmyne6(employeeDetails.getConsmyne6());
           updateEmployee.setJourautono6(employeeDetails.getJourautono6());
             updateEmployee.setDateprochainesoutage6(employeeDetails.getDateprochainesoutage6());
              updateEmployee.setSoutagedegazoil6(employeeDetails.getSoutagedegazoil6());
               updateEmployee.setPrixdegazoil6(employeeDetails.getPrixdegazoil6());
               updateEmployee.setQuantiteconsomme6(employeeDetails.getQuantiteconsomme6());
        updateEmployee.setQuantitetransbordée6(employeeDetails.getQuantitetransbordée6());
           updateEmployee.setQuantitereçue6(employeeDetails.getQuantitereçue6());
                 updateEmployee.setNombredimmobilisationescale6(employeeDetails.getNombredimmobilisationescale6());
            updateEmployee.setNombredimmobilisationmer6(employeeDetails.getNombredimmobilisationmer6());   
                 employeeRepositoryMaranda3.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda3 employee6 = employeeRepositoryMaranda3.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda3.delete(employee6);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
