package com.vti.live.demo_backend.hr_service.dto;

import java.time.LocalDate;

public class WorkHistoryRequest {
    public String employeeId;
    public LocalDate date;
    public String shift;
    public String note;
}