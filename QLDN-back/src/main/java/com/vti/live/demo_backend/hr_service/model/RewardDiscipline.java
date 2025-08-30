package com.vti.live.demo_backend.hr_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "reward_discipline")
public class RewardDiscipline {
    @Id
    private String id;
    private String employeeId;
    private LocalDate date;
    private Type type;  // REWARD / DISCIPLINE
    private String reason;

    public enum Type { REWARD, DISCIPLINE }

    public RewardDiscipline() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public Type getType() { return type; }
    public void setType(Type type) { this.type = type; }
    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }
}