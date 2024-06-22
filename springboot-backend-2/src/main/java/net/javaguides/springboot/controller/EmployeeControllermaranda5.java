package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;
import net.javaguides.springboot.model.Maranda5;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees7")
public class EmployeeControllermaranda5 {

    @Autowired
    private EmployeeRepositoryMaranda5 employeeRepositoryMaranda5;

    @GetMapping
    public List<Maranda5> getAllEmployees(){
        return employeeRepositoryMaranda5.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda5 createEmployee(@RequestBody Maranda5 employee7) {
        return employeeRepositoryMaranda5.save(employee7);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda5> getEmployeeById(@PathVariable  long id){
        Maranda5 employee7 = employeeRepositoryMaranda5.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee7);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda5> updateEmployee(@PathVariable long id,@RequestBody Maranda5 employeeDetails) {
        Maranda5 updateEmployee = employeeRepositoryMaranda5.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage7(employeeDetails.getDatedesoutage7());
        updateEmployee.setDatedesortie7(employeeDetails.getDatedesortie7());
        updateEmployee.setQuantitelivree7(employeeDetails.getQuantitelivree7());
         updateEmployee.setQuantiteabord7(employeeDetails.getQuantiteabord7());
           updateEmployee.setQuantitetotal7(employeeDetails.getQuantitetotal7());
         updateEmployee.setStabilite7(employeeDetails.getStabilite7());
           updateEmployee.setConsmyne7(employeeDetails.getConsmyne7());
           updateEmployee.setJourautono7(employeeDetails.getJourautono7());
             updateEmployee.setDateprochainesoutage7(employeeDetails.getDateprochainesoutage7());
              updateEmployee.setSoutagedegazoil7(employeeDetails.getSoutagedegazoil7());
               updateEmployee.setPrixdegazoil7(employeeDetails.getPrixdegazoil7());
               updateEmployee.setQuantiteconsomme7(employeeDetails.getQuantiteconsomme7());
               updateEmployee.setQuantitetransbordée7(employeeDetails.getQuantitetransbordée7());
                  updateEmployee.setQuantitereçue7(employeeDetails.getQuantitereçue7());
                        updateEmployee.setNombredimmobilisationescale7(employeeDetails.getNombredimmobilisationescale7());
                   updateEmployee.setNombredimmobilisationmer7(employeeDetails.getNombredimmobilisationmer7());   
      
       

               employeeRepositoryMaranda5.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda5 employee7 = employeeRepositoryMaranda5.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda5.delete(employee7);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
