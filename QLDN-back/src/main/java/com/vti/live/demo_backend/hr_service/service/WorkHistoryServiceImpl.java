package com.vti.live.demo_backend.hr_service.service;

import com.vti.live.demo_backend.hr_service.dto.WorkHistoryRequest;
import com.vti.live.demo_backend.hr_service.model.WorkHistory;
import com.vti.live.demo_backend.hr_service.repository.WorkHistoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class WorkHistoryServiceImpl implements WorkHistoryService {

    private final WorkHistoryRepository repo;

    public WorkHistoryServiceImpl(WorkHistoryRepository repo) {
        this.repo = repo;
    }

    @Override
    public WorkHistory create(WorkHistoryRequest req) {
        WorkHistory wh = new WorkHistory();
        wh.setEmployeeId(req.employeeId);
        wh.setDate(req.date);
        wh.setShift(req.shift);
        wh.setNote(req.note);
        return repo.save(wh);
    }

    @Override
    public List<WorkHistory> listByEmployee(String employeeId) {
        return repo.findByEmployeeIdOrderByDateDesc(employeeId);
    }
}