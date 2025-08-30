package com.vti.live.demo_backend.crm_service.controller;

import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.crm_service.dto.CustomerCreateRequest;
import com.vti.live.demo_backend.crm_service.dto.CustomerUpdateRequest;
import com.vti.live.demo_backend.crm_service.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> list(@RequestParam(required = false) String q) {
        if (q != null && !q.isBlank())
            return ResponseEntity.ok(ApiResponse.success("Tìm kiếm khách hàng", service.search(q)));
        return ResponseEntity.ok(ApiResponse.success("Danh sách khách hàng", service.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> get(@PathVariable String id) {
        return ResponseEntity.ok(ApiResponse.success("Chi tiết khách hàng", service.findById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody CustomerCreateRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Tạo khách hàng thành công", service.create(req)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> update(@PathVariable String id, @RequestBody CustomerUpdateRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Cập nhật khách hàng thành công", service.update(id, req)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.success("Xóa khách hàng thành công", null));
    }
}
