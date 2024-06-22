package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Kelti;
import net.javaguides.springboot.model.Igoudar;

import net.javaguides.springboot.model.Maranda6;
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
@RequestMapping("/api/v1/employees8")
public class EmployeeControllermaranda6 {

    @Autowired
    private EmployeeRepositoryMaranda6 employeeRepositoryMaranda6;

    @GetMapping
    public List<Maranda6> getAllEmployees(){
        return employeeRepositoryMaranda6.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Maranda6 createEmployee(@RequestBody Maranda6 employee8) {
        return employeeRepositoryMaranda6.save(employee8);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Maranda6> getEmployeeById(@PathVariable  long id){
        Maranda6 employee8 = employeeRepositoryMaranda6.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee8);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Maranda6> updateEmployee(@PathVariable long id,@RequestBody Maranda6 employeeDetails) {
        Maranda6 updateEmployee = employeeRepositoryMaranda6.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

      

                updateEmployee.setDatedesoutage8(employeeDetails.getDatedesoutage8());
        updateEmployee.setDatedesortie8(employeeDetails.getDatedesortie8());
        updateEmployee.setQuantitelivree8(employeeDetails.getQuantitelivree8());
         updateEmployee.setQuantiteabord8(employeeDetails.getQuantiteabord8());
           updateEmployee.setQuantitetotal8(employeeDetails.getQuantitetotal8());
         updateEmployee.setStabilite8(employeeDetails.getStabilite8());
           updateEmployee.setConsmyne8(employeeDetails.getConsmyne8());
           updateEmployee.setJourautono8(employeeDetails.getJourautono8());
             updateEmployee.setDateprochainesoutage8(employeeDetails.getDateprochainesoutage8());
              updateEmployee.setSoutagedegazoil8(employeeDetails.getSoutagedegazoil8());
            
              updateEmployee.setQuantiteconsomme8(employeeDetails.getQuantiteconsomme8());
              updateEmployee.setQuantitetransbordée8(employeeDetails.getQuantitetransbordée8());
                 updateEmployee.setQuantitereçue8(employeeDetails.getQuantitereçue8());
                       updateEmployee.setNombredimmobilisationescale8(employeeDetails.getNombredimmobilisationescale8());
                  updateEmployee.setNombredimmobilisationmer8(employeeDetails.getNombredimmobilisationmer8());   
       

               employeeRepositoryMaranda6.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Maranda6 employee8 = employeeRepositoryMaranda6.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

                employeeRepositoryMaranda6.delete(employee8);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
