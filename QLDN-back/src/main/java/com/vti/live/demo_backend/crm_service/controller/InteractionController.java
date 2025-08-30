package com.vti.live.demo_backend.crm_service.controller;

import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.crm_service.dto.InteractionRequest;
import com.vti.live.demo_backend.crm_service.service.InteractionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers/{customerId}/interactions")
public class InteractionController {

    private final InteractionService service;

    public InteractionController(InteractionService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> list(@PathVariable String customerId) {
        return ResponseEntity.ok(ApiResponse.success("Lịch sử tương tác", service.list(customerId)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> add(@PathVariable String customerId, @RequestBody InteractionRequest req) {
        return ResponseEntity.ok(ApiResponse.success("Đã ghi nhận tương tác", service.add(customerId, req)));
    }
}
