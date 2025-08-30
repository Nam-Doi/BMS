package com.vti.live.demo_backend.crm_service.service;

import com.vti.live.demo_backend.crm_service.dto.CustomerCreateRequest;
import com.vti.live.demo_backend.crm_service.dto.CustomerUpdateRequest;
import com.vti.live.demo_backend.crm_service.model.Customer;
import com.vti.live.demo_backend.crm_service.repository.CustomerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository repo;

    public CustomerServiceImpl(CustomerRepository repo) {
        this.repo = repo;
    }

    @Override
    public Customer create(CustomerCreateRequest req) {
        Customer c = new Customer();
        c.setFullName(req.fullName);
        c.setEmail(req.email);
        c.setPhone(req.phone);
        c.setAddress(req.address);
        c.setGroupName(req.groupName);
        c.setNote(req.note);
        return repo.save(c);
    }

    @Override
    public Customer update(String id, CustomerUpdateRequest req) {
        Customer c = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Không tìm thấy khách hàng"));
        if (req.fullName != null) c.setFullName(req.fullName);
        if (req.email != null) c.setEmail(req.email);
        if (req.phone != null) c.setPhone(req.phone);
        if (req.address != null) c.setAddress(req.address);
        if (req.groupName != null) c.setGroupName(req.groupName);
        if (req.note != null) c.setNote(req.note);
        if (req.active != null) c.setActive(req.active);
        return repo.save(c);
    }

    @Override public void delete(String id) { repo.deleteById(id); }
    @Override public Customer findById(String id) { return repo.findById(id).orElseThrow(); }
    @Override public List<Customer> search(String q) {
        String s = (q == null) ? "" : q;
        String regex = ".*" + s + ".*";
        return repo.findByFullNameRegexOrPhoneRegex(regex, regex);
    }
    @Override public List<Customer> findAll() { return repo.findAll(); }
}
