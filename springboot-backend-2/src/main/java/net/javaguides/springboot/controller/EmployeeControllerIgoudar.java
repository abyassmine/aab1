package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees5")
public class EmployeeControllerIgoudar {

    @Autowired
    private EmployeeRepositoryIgoudar employeeRepositoryIgoudar;

    @GetMapping
    public List<Igoudar> getAllEmployees(){
        return employeeRepositoryIgoudar.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Igoudar createEmployee(@RequestBody Igoudar employee5) {
        return employeeRepositoryIgoudar.save(employee5);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Igoudar> getEmployeeById(@PathVariable  long id){
        Igoudar employee5 = employeeRepositoryIgoudar.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee5);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Igoudar> updateEmployee(@PathVariable long id,@RequestBody Igoudar employeeDetails) {
        Igoudar updateEmployee = employeeRepositoryIgoudar.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage5(employeeDetails.getDatedesoutage5());
        updateEmployee.setDatedesortie5(employeeDetails.getDatedesortie5());
        updateEmployee.setQuantitelivree5(employeeDetails.getQuantitelivree5());
         updateEmployee.setQuantiteabord5(employeeDetails.getQuantiteabord5());
           updateEmployee.setQuantitetotal5(employeeDetails.getQuantitetotal5());
         updateEmployee.setStabilite5(employeeDetails.getStabilite5());
           updateEmployee.setConsmyne5(employeeDetails.getConsmyne5());
           updateEmployee.setJourautono5(employeeDetails.getJourautono5());
             updateEmployee.setDateprochainesoutage5(employeeDetails.getDateprochainesoutage5());
              updateEmployee.setSoutagedegazoil5(employeeDetails.getSoutagedegazoil5());
               updateEmployee.setPrixdegazoil5(employeeDetails.getPrixdegazoil5());
               updateEmployee.setQuantiteconsomme5(employeeDetails.getQuantiteconsomme5());
               updateEmployee.setQuantitetransbordée5(employeeDetails.getQuantitetransbordée5());
               updateEmployee.setQuantitereçue5(employeeDetails.getQuantitereçue5());
               updateEmployee.setNombredimmobilisationescale5(employeeDetails.getNombredimmobilisationescale5());
               updateEmployee.setNombredimmobilisationmer5(employeeDetails.getNombredimmobilisationmer5());
               
       

               employeeRepositoryIgoudar.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Igoudar employee5 = employeeRepositoryIgoudar.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryIgoudar.delete(employee5);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
