package com.stackInstance.HighChartDatabase.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackInstance.HighChartDatabase.model.Employee;
import com.stackInstance.HighChartDatabase.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/employees")
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee) {
        String result = service.saveEmployee(employee);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = service.getAllEmployee();
        return ResponseEntity.ok(employees);
    }
}
