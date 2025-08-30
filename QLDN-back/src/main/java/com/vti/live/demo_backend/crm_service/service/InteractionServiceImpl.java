package com.vti.live.demo_backend.crm_service.service;

import com.vti.live.demo_backend.crm_service.dto.InteractionRequest;
import com.vti.live.demo_backend.crm_service.model.Interaction;
import com.vti.live.demo_backend.crm_service.repository.InteractionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class InteractionServiceImpl implements InteractionService {

    private final InteractionRepository repo;

    public InteractionServiceImpl(InteractionRepository repo) {
        this.repo = repo;
    }

    @Override
    public Interaction add(String customerId, InteractionRequest req) {
        Interaction i = new Interaction();
        i.setCustomerId(customerId);
        i.setChannel(req.channel);
        i.setContent(req.content);
        i.setStaff(req.staff);
        if (req.time != null) i.setTime(req.time);
        else i.setTime(LocalDateTime.now());
        return repo.save(i);
    }

    @Override
    public List<Interaction> list(String customerId) {
        return repo.findByCustomerIdOrderByTimeDesc(customerId);
    }
}
