package com.stackInstance.HighChartDatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackInstance.HighChartDatabase.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
