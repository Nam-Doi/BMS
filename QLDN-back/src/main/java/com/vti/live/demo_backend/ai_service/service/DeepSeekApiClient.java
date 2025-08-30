package com.vti.live.demo_backend.ai_service.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Map;

@Service
public class DeepSeekApiClient {
    private static final Logger log = LoggerFactory.getLogger(DeepSeekApiClient.class);

    @Value("${deepseek.api.key}")
    private String apiKey;

    private final String apiUrl = "https://api.deepseek.com/v1/chat/completions";

    private final OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(Duration.ofSeconds(20))
            .readTimeout(Duration.ofSeconds(60))
            .writeTimeout(Duration.ofSeconds(60))
            .build();

    private final ObjectMapper mapper = new ObjectMapper();

    public String generateContent(String prompt) throws IOException {
        Map<String, Object> requestBody = Map.of(
                "model", "deepseek-chat",
                "messages", List.of(
                        Map.of("role", "user", "content", prompt)
                )
        );

        String requestBodyJson = mapper.writeValueAsString(requestBody);

        Request request = new Request.Builder()
                .url(apiUrl)
                .post(RequestBody.create(requestBodyJson, MediaType.get("application/json; charset=utf-8")))
                .addHeader("Authorization", "Bearer " + apiKey)
                .addHeader("Content-Type", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            String responseBodyString = response.body() != null ? response.body().string() : "{}";

            if (!response.isSuccessful()) {
                log.error("DeepSeek API Error Response: {} - {}", response.code(), responseBodyString);
                throw new IOException("DeepSeek API request failed with code " + response.code() + ": " + response.message());
            }

            JsonNode rootNode = mapper.readTree(responseBodyString);
            JsonNode textNode = rootNode.path("choices").path(0).path("message").path("content");

            if (textNode.isMissingNode()) {
                log.error("Could not find 'content' in DeepSeek response: {}", responseBodyString);
                throw new IOException("Invalid response structure from DeepSeek API.");
            }

            return textNode.asText();
        }
    }
}
