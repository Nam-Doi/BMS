package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.dto.EmployeeCreateRequest;
import com.vti.live.demo_backend.hr_service.dto.EmployeeUpdateRequest;
import com.vti.live.demo_backend.hr_service.model.Employee;
import com.vti.live.demo_backend.hr_service.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeServiceImpl(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public Employee create(EmployeeCreateRequest req) {
        if (repo.existsByEmail(req.email)) {
            throw new IllegalArgumentException("Email đã tồn tại");
        }
        Employee e = new Employee();
        e.setFullName(req.fullName);
        e.setEmail(req.email);
        e.setPhone(req.phone);
        e.setDob(req.dob);
        e.setPosition(req.position);
        e.setDepartment(req.department);
        e.setActive(true);
        return repo.save(e);
    }

    @Override
    public Employee update(String id, EmployeeUpdateRequest req) {
        Employee e = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Không tìm thấy nhân viên"));
        if (req.fullName != null) e.setFullName(req.fullName);
        if (req.phone != null) e.setPhone(req.phone);
        if (req.dob != null) e.setDob(req.dob);
        if (req.position != null) e.setPosition(req.position);
        if (req.department != null) e.setDepartment(req.department);
        if (req.active != null) e.setActive(req.active);
        return repo.save(e);
    }

    @Override public void delete(String id) { repo.deleteById(id); }
    @Override public Employee findById(String id) { return repo.findById(id).orElseThrow(); }
    @Override public List<Employee> search(String q) {
        String regex = ".*" + (q==null? "" : q) + ".*";
        return repo.findByFullNameRegex(regex);
    }
    @Override public List<Employee> findAll() { return repo.findAll(); }
}