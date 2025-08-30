package com.vti.live.demo_backend.hr_service.repository;

import com.vti.live.demo_backend.hr_service.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
    boolean existsByEmail(String email);
    List<Employee> findByFullNameRegex(String regex);
}