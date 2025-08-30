package com.vti.live.demo_backend.crm_service.dto;

import java.time.LocalDateTime;

public class InteractionRequest {
    public String channel; // CALL, EMAIL, MEETING, CHAT
    public String content;
    public String staff;
    public LocalDateTime time;
}
