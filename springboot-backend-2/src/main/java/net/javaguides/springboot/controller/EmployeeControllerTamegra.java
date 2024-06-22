package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Tamegra;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryTamegra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees4")
public class EmployeeControllerTamegra {

    @Autowired
    private EmployeeRepositoryTamegra employeeRepositoryTamegra;

    @GetMapping
    public List<Tamegra> getAllEmployees(){
        return employeeRepositoryTamegra.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Tamegra createEmployee(@RequestBody Tamegra employee4) {
        return employeeRepositoryTamegra.save(employee4);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Tamegra> getEmployeeById(@PathVariable  long id){
        Tamegra employee4 = employeeRepositoryTamegra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee4);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Tamegra> updateEmployee(@PathVariable long id,@RequestBody Tamegra employeeDetails) {
        Tamegra updateEmployee = employeeRepositoryTamegra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage4(employeeDetails.getDatedesoutage4());
        updateEmployee.setDatedesortie4(employeeDetails.getDatedesortie4());
        updateEmployee.setQuantitelivree4(employeeDetails.getQuantitelivree4());
         updateEmployee.setQuantiteabord4(employeeDetails.getQuantiteabord4());
           updateEmployee.setQuantitetotal4(employeeDetails.getQuantitetotal4());
         updateEmployee.setStabilite4(employeeDetails.getStabilite4());
           updateEmployee.setConsmyne4(employeeDetails.getConsmyne4());
           updateEmployee.setJourautono4(employeeDetails.getJourautono4());
             updateEmployee.setDateprochainesoutage4(employeeDetails.getDateprochainesoutage4());
              updateEmployee.setSoutagedegazoil4(employeeDetails.getSoutagedegazoil4());
               updateEmployee.setPrixdegazoil4(employeeDetails.getPrixdegazoil4());
               updateEmployee.setQuantiteconsomme4(employeeDetails.getQuantiteconsomme4());
               updateEmployee.setQuantitetransbordée4(employeeDetails.getQuantitetransbordée4());
               updateEmployee.setQuantitereçue4(employeeDetails.getQuantitereçue4());
               updateEmployee.setNombredimmobilisationescale4(employeeDetails.getNombredimmobilisationescale4());
               updateEmployee.setNombredimmobilisationmer4(employeeDetails.getNombredimmobilisationmer4());
               
       

               employeeRepositoryTamegra.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Tamegra employee4 = employeeRepositoryTamegra.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryTamegra.delete(employee4);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
