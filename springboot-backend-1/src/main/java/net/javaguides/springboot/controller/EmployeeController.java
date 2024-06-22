package net.javaguides.springboot.controller;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Declaration;

import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/declaration")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Declaration> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Declaration createEmployee(@RequestBody Declaration employee) {
        return employeeRepository.save(employee);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Declaration> getEmployeeById(@PathVariable  long id){
        Declaration employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }
    
    @Autowired
    private DeclarationService declarationService;
    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file,
                                                   @RequestParam("bn") String bn) {
        try {
            // Check if the record with the provided 'bn' exists
            Declaration existingDeclaration = employeeRepository.findByBn(bn);
            if (existingDeclaration == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No record found with the specified 'bn' value: " + bn);
            }

            declarationService.saveFile(file, bn);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to upload file: " + e.getMessage());
        }
    }
    
    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Declaration> updateEmployee(@PathVariable long id,@RequestBody Declaration employeeDetails) {
        Declaration updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

       
        updateEmployee.setNom(employeeDetails.getNom());
        updateEmployee.setIddeclaration(employeeDetails.getIddeclaration());
        updateEmployee.setSubject(employeeDetails.getSubject());
        updateEmployee.setType(employeeDetails.getType());
        updateEmployee.setDescription(employeeDetails.getDescription());
              updateEmployee.setPrix(employeeDetails.getPrix());
       updateEmployee.setDate(employeeDetails.getDate());
        updateEmployee.setNumerobl(employeeDetails.getNumerobl());
         updateEmployee.setQuantite(employeeDetails.getQuantite());
          updateEmployee.setFournisseur(employeeDetails.getFournisseur());
          updateEmployee.setNombateau(employeeDetails.getNombateau());
          updateEmployee.setBn(employeeDetails.getBn());
             updateEmployee.setRapport(employeeDetails.getRapport());
        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Declaration employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Materiel not exist with id: " + id));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
}
