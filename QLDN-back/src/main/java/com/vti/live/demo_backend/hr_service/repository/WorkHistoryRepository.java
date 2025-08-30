package com.vti.live.demo_backend.hr_service.repository;

import com.vti.live.demo_backend.hr_service.model.WorkHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface WorkHistoryRepository extends MongoRepository<WorkHistory, String> {
    List<WorkHistory> findByEmployeeIdOrderByDateDesc(String employeeId);
}