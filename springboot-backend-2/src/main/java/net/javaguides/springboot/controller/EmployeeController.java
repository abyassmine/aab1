package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable  long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        updateEmployee.setDatedesoutage(employeeDetails.getDatedesoutage());
        updateEmployee.setDatedesortie(employeeDetails.getDatedesortie());
        updateEmployee.setQuantitelivree(employeeDetails.getQuantitelivree());
         updateEmployee.setQuantiteabord(employeeDetails.getQuantiteabord());
           updateEmployee.setQuantitetotal(employeeDetails.getQuantitetotal());
         updateEmployee.setStabilite(employeeDetails.getStabilite());
           updateEmployee.setConsmyne(employeeDetails.getConsmyne());
           updateEmployee.setJourautono(employeeDetails.getJourautono());
             updateEmployee.setDateprochainesoutage(employeeDetails.getDateprochainesoutage());
              updateEmployee.setSoutagedegazoil(employeeDetails.getSoutagedegazoil());
               updateEmployee.setPrixdegazoil(employeeDetails.getPrixdegazoil());
        updateEmployee.setQuantitereçu(employeeDetails.getQuantitereçu());
        updateEmployee.setQuantitetransbordée(employeeDetails.getQuantitetransbordée());
       updateEmployee.setQuantiteapproximative(employeeDetails.getQuantiteapproximative());
        updateEmployee.setNom(employeeDetails.getNom());
        updateEmployee.setEntite(employeeDetails.getEntite());
        updateEmployee.setFonction(employeeDetails.getFonction());
        updateEmployee.setMarque(employeeDetails.getMarque());
        updateEmployee.setModel(employeeDetails.getModel());
        updateEmployee.setCodeImmob(employeeDetails.getCodeImmob());
        updateEmployee.setDatdacquis(employeeDetails.getDatdacquis());
        updateEmployee.setEtat(employeeDetails.getEtat());
        updateEmployee.setDepartmentId(employeeDetails.getDepartmentId());
        updateEmployee.setObservation(employeeDetails.getObservation());
        updateEmployee.setType(employeeDetails.getType());
       

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
