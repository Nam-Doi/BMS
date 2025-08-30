package com.vti.live.demo_backend.crm_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document(collection = "customer_interactions")
public class Interaction {
    @Id
    private String id;

    @Field("customerId")
    private String customerId;

    private LocalDateTime time = LocalDateTime.now();
    private String channel; // CALL, EMAIL, MEETING, CHAT
    private String content;
    private String staff;   // nhân viên phụ trách

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }
    public LocalDateTime getTime() { return time; }
    public void setTime(LocalDateTime time) { this.time = time; }
    public String getChannel() { return channel; }
    public void setChannel(String channel) { this.channel = channel; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getStaff() { return staff; }
    public void setStaff(String staff) { this.staff = staff; }
}
