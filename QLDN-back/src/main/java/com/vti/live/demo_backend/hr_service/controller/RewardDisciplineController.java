package com.vti.live.demo_backend.hr_service.controller;

import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.hr_service.dto.RewardDisciplineRequest;
import com.vti.live.demo_backend.hr_service.service.RewardDisciplineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reward-discipline")
public class RewardDisciplineController {

    private final RewardDisciplineService service;

    public RewardDisciplineController(RewardDisciplineService service) {
        this.service = service;
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<ApiResponse> list(@PathVariable String employeeId) {
        return ResponseEntity.ok(ApiResponse.success("Danh sách khen thưởng/kỷ luật", service.listByEmployee(employeeId)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody RewardDisciplineRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Tạo bản ghi thành công", service.create(req)));
    }
}