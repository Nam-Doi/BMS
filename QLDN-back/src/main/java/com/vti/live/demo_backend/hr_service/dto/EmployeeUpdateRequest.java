package com.vti.live.demo_backend.hr_service.dto;

import java.time.LocalDate;

public class EmployeeUpdateRequest {
    public String fullName;
    public String phone;
    public LocalDate dob;
    public String position;
    public String department;
    public Boolean active;
}