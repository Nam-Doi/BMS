package com.vti.live.demo_backend.crm_service.repository;

import com.vti.live.demo_backend.crm_service.model.Interaction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface InteractionRepository extends MongoRepository<Interaction, String> {
    List<Interaction> findByCustomerIdOrderByTimeDesc(String customerId);
}
