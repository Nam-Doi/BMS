package com.vti.live.demo_backend.crm_service.repository;

import com.vti.live.demo_backend.crm_service.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
    List<Customer> findByFullNameRegexOrPhoneRegex(String nameRegex, String phoneRegex);
}
