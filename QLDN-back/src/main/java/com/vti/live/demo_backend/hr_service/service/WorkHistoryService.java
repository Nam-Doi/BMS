package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.model.WorkHistory;
import com.vti.live.demo_backend.hr_service.dto.WorkHistoryRequest;
import java.util.List;

public interface WorkHistoryService {
    WorkHistory create(WorkHistoryRequest req);
    List<WorkHistory> listByEmployee(String employeeId);
}