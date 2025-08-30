package com.vti.live.demo_backend.hr_service.repository;

import com.vti.live.demo_backend.hr_service.model.RewardDiscipline;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RewardDisciplineRepository extends MongoRepository<RewardDiscipline, String> {
    List<RewardDiscipline> findByEmployeeIdOrderByDateDesc(String employeeId);
}