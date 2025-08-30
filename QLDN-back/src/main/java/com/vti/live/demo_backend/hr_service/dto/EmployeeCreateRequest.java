package com.vti.live.demo_backend.hr_service.dto;

import java.time.LocalDate;

public class EmployeeCreateRequest {
    public String fullName;
    public String email;
    public String phone;
    public LocalDate dob;
    public String position;
    public String department;
}