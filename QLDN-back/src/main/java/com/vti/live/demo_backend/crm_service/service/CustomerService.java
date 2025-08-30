package com.vti.live.demo_backend.crm_service.service;

import com.vti.live.demo_backend.crm_service.model.Customer;
import com.vti.live.demo_backend.crm_service.dto.CustomerCreateRequest;
import com.vti.live.demo_backend.crm_service.dto.CustomerUpdateRequest;
import java.util.List;

public interface CustomerService {
    Customer create(CustomerCreateRequest req);
    Customer update(String id, CustomerUpdateRequest req);
    void delete(String id);
    Customer findById(String id);
    List<Customer> search(String q);
    List<Customer> findAll();
}
