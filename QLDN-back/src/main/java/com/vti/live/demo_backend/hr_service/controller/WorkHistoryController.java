package com.vti.live.demo_backend.hr_service.controller;

import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.hr_service.dto.WorkHistoryRequest;
import com.vti.live.demo_backend.hr_service.service.WorkHistoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/work-history")
public class WorkHistoryController {

    private final WorkHistoryService service;

    public WorkHistoryController(WorkHistoryService service) {
        this.service = service;
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<ApiResponse> list(@PathVariable String employeeId) {
        return ResponseEntity.ok(ApiResponse.success("Danh sách lịch sử", service.listByEmployee(employeeId)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody WorkHistoryRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Tạo lịch sử thành công", service.create(req)));
    }
}