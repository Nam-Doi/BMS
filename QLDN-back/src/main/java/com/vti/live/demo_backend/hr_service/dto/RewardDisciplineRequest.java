package com.vti.live.demo_backend.hr_service.dto;

import java.time.LocalDate;
import com.vti.live.demo_backend.hr_service.model.RewardDiscipline.Type;

public class RewardDisciplineRequest {
    public String employeeId;
    public LocalDate date;
    public Type type;
    public String reason;
}