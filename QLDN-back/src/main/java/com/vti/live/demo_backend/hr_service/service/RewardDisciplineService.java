package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.model.RewardDiscipline;
import com.vti.live.demo_backend.hr_service.dto.RewardDisciplineRequest;
import java.util.List;

public interface RewardDisciplineService {
    RewardDiscipline create(RewardDisciplineRequest req);
    List<RewardDiscipline> listByEmployee(String employeeId);
}