package com.vti.live.demo_backend.ai_service.controller;


import com.vti.live.demo_backend.ai_service.service.GeminiApiClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gemini")
public class GeminiApiController {

    private final GeminiApiClient geminiApiClient;

    public GeminiApiController(GeminiApiClient geminiApiClient) {
        this.geminiApiClient = geminiApiClient;
    }

    /**
     * Endpoint to send a prompt to Gemini API and return the generated content.
     *
     * @param request The prompt request object containing the "prompt" string.
     * @return The generated text from Gemini API.
     */
    @PostMapping("/generate")
    public ResponseEntity<?> generateContent(@RequestBody PromptRequest request) {
        try {
            String result = geminiApiClient.generateContent(request.getPrompt());
            return ResponseEntity.ok(new PromptResponse(result));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    // Request DTO
    public static class PromptRequest {
        private String prompt;

        public String getPrompt() {
            return prompt;
        }

        public void setPrompt(String prompt) {
            this.prompt = prompt;
        }
    }

    // Response DTO
    public static class PromptResponse {
        private String output;

        public PromptResponse(String output) {
            this.output = output;
        }

        public String getOutput() {
            return output;
        }

        public void setOutput(String output) {
            this.output = output;
        }
    }
}

