package com.vti.live.demo_backend.crm_service.service;

import com.vti.live.demo_backend.crm_service.model.Interaction;
import com.vti.live.demo_backend.crm_service.dto.InteractionRequest;

import java.util.List;

public interface InteractionService {
    Interaction add(String customerId, InteractionRequest req);
    List<Interaction> list(String customerId);
}
