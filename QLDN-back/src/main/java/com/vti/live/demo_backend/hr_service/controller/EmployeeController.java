package com.vti.live.demo_backend.hr_service.controller;

import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.hr_service.dto.EmployeeCreateRequest;
import com.vti.live.demo_backend.hr_service.dto.EmployeeUpdateRequest;
import com.vti.live.demo_backend.hr_service.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> list(@RequestParam(required = false) String q) {
        return ResponseEntity.ok(ApiResponse.success("Lấy danh sách thành công", service.search(q)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> get(@PathVariable String id) {
        return ResponseEntity.ok(ApiResponse.success("Chi tiết nhân viên", service.findById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody EmployeeCreateRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Tạo nhân viên thành công", service.create(req)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> update(@PathVariable String id, @RequestBody EmployeeUpdateRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Cập nhật nhân viên thành công", service.update(id, req)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.success("Xóa nhân viên thành công", null));
    }
}