package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.dto.RewardDisciplineRequest;
import com.vti.live.demo_backend.hr_service.model.RewardDiscipline;
import com.vti.live.demo_backend.hr_service.repository.RewardDisciplineRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RewardDisciplineServiceImpl implements RewardDisciplineService {

    private final RewardDisciplineRepository repo;

    public RewardDisciplineServiceImpl(RewardDisciplineRepository repo) {
        this.repo = repo;
    }

    @Override
    public RewardDiscipline create(RewardDisciplineRequest req) {
        RewardDiscipline rd = new RewardDiscipline();
        rd.setEmployeeId(req.employeeId);
        rd.setDate(req.date);
        rd.setType(req.type);
        rd.setReason(req.reason);
        return repo.save(rd);
    }

    @Override
    public List<RewardDiscipline> listByEmployee(String employeeId) {
        return repo.findByEmployeeIdOrderByDateDesc(employeeId);
    }
}