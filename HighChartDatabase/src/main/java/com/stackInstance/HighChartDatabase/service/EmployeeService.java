package com.stackInstance.HighChartDatabase.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackInstance.HighChartDatabase.model.Employee;
import com.stackInstance.HighChartDatabase.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repository;
	
	public String saveEmployee(Employee employee)
	{
		repository.save(employee);
		return "saved Employee Resource";
	}
	
	public List<Employee> getAllEmployee()
	{
		return repository.findAll();
	}

}
