package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.model.Employee;
import com.vti.live.demo_backend.hr_service.dto.EmployeeCreateRequest;
import com.vti.live.demo_backend.hr_service.dto.EmployeeUpdateRequest;

import java.util.List;

public interface EmployeeService {
    Employee create(EmployeeCreateRequest req);
    Employee update(String id, EmployeeUpdateRequest req);
    void delete(String id);
    Employee findById(String id);
    List<Employee> search(String q);
    List<Employee> findAll();
}