package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Alicante;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;

import net.javaguides.springboot.model.Maranda6;
import net.javaguides.springboot.repository.EmployeeRepositoryAlicante;
import net.javaguides.springboot.repository.EmployeeRepositoryIgoudar;
import net.javaguides.springboot.repository.EmployeeRepositoryKelti;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda5;
import net.javaguides.springboot.repository.EmployeeRepositoryMaranda6;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees9")
public class EmployeeControllerAlicante {

    @Autowired
    private EmployeeRepositoryAlicante employeeRepositoryAlicante;

    @GetMapping
    public List<Alicante> getAllEmployees(){
        return employeeRepositoryAlicante.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Alicante createEmployee(@RequestBody Alicante employee9) {
        return employeeRepositoryAlicante.save(employee9);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Alicante> getEmployeeById(@PathVariable  long id){
        Alicante employee9 = employeeRepositoryAlicante.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee9);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Alicante> updateEmployee(@PathVariable long id,@RequestBody Alicante employeeDetails) {
        Alicante updateEmployee = employeeRepositoryAlicante.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage9(employeeDetails.getDatedesoutage9());
        updateEmployee.setDatedesortie9(employeeDetails.getDatedesortie9());
        updateEmployee.setQuantitelivree9(employeeDetails.getQuantitelivree9());
         updateEmployee.setQuantiteabord9(employeeDetails.getQuantiteabord9());
           updateEmployee.setQuantitetotal9(employeeDetails.getQuantitetotal9());
         updateEmployee.setStabilite9(employeeDetails.getStabilite9());
           updateEmployee.setConsmyne9(employeeDetails.getConsmyne9());
           updateEmployee.setJourautono9(employeeDetails.getJourautono9());
             updateEmployee.setDateprochainesoutage9(employeeDetails.getDateprochainesoutage9());
              updateEmployee.setSoutagedegazoil9(employeeDetails.getSoutagedegazoil9());
               updateEmployee.setPrixdegazoil9(employeeDetails.getPrixdegazoil9());
               updateEmployee.setQuantiteconsomme9(employeeDetails.getQuantiteconsomme9());
               updateEmployee.setQuantitetransbordée9(employeeDetails.getQuantitetransbordée9());
                  updateEmployee.setQuantitereçue9(employeeDetails.getQuantitereçue9());
                        updateEmployee.setNombredimmobilisationescale9(employeeDetails.getNombredimmobilisationescale9());
                   updateEmployee.setNombredimmobilisationmer9(employeeDetails.getNombredimmobilisationmer9());   
       

               employeeRepositoryAlicante.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Alicante employee9 = employeeRepositoryAlicante.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryAlicante.delete(employee9);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
