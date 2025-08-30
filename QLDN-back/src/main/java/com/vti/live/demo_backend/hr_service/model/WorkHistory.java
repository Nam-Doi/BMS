package com.vti.live.demo_backend.hr_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "work_histories")
public class WorkHistory {
    @Id
    private String id;
    private String employeeId;
    private LocalDate date;
    private String shift;
    private String note;

    public WorkHistory() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public String getShift() { return shift; }
    public void setShift(String shift) { this.shift = shift; }
    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
}