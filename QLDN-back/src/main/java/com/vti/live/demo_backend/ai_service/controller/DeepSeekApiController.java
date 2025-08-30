package com.vti.live.demo_backend.ai_service.controller;

import com.vti.live.demo_backend.ai_service.service.DeepSeekApiClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deepseek")
public class DeepSeekApiController {

    private final DeepSeekApiClient deepSeekApiClient;

    public DeepSeekApiController(DeepSeekApiClient deepSeekApiClient) {
        this.deepSeekApiClient = deepSeekApiClient;
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generateContent(@RequestBody PromptRequest request) {
        try {
            String result = deepSeekApiClient.generateContent(request.getPrompt());
            return ResponseEntity.ok(new PromptResponse(result));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    // Request DTO
    public static class PromptRequest {
        private String prompt;
        public String getPrompt() { return prompt; }
        public void setPrompt(String prompt) { this.prompt = prompt; }
    }

    // Response DTO
    public static class PromptResponse {
        private String output;
        public PromptResponse(String output) { this.output = output; }
        public String getOutput() { return output; }
        public void setOutput(String output) { this.output = output; }
    }
}

