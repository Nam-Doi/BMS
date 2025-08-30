//package com.vti.live.demo_backend.ai_service.service;
//
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import okhttp3.*;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.time.Duration;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class GeminiApiClient {
//
//    private static final Logger log = LoggerFactory.getLogger(GeminiApiClient.class);
//
//    @Value("${gemini.api.key}")
//    private String apiKey;
//
//    @Value("${gemini.api.url}")
//    private String apiUrl;
//
//    private final OkHttpClient client = new OkHttpClient.Builder()
//            .connectTimeout(Duration.ofSeconds(20)) // Tăng thời gian kết nối
//            .readTimeout(Duration.ofSeconds(60))    // Tăng thời gian đọc
//            .writeTimeout(Duration.ofSeconds(60))   // Tăng thời gian ghi
//            .build();
//
//    private final ObjectMapper mapper = new ObjectMapper();
//
//    /**
//     * Gửi một prompt đến Gemini API và trích xuất nội dung văn bản trả về.
//     * @param prompt Câu lệnh yêu cầu gửi đến AI.
//     * @return Chuỗi văn bản phân tích từ AI.
//     * @throws IOException nếu có lỗi mạng hoặc lỗi parse JSON.
//     */
//    public String generateContent(String prompt) throws IOException {
//        // 1. Xây dựng cấu trúc body của request
//        Map<String, Object> requestBody = Map.of(
//                "contents", List.of(
//                        Map.of("parts", List.of(Map.of("text", prompt)))
//                ),
//                // (Tùy chọn) Thêm các tham số để kiểm soát model
//                "generationConfig", Map.of(
//                        "temperature", 0.2,
//                        "topK", 40,
//                        "topP", 0.95,
//                        "maxOutputTokens", 1024
//                )
//        );
//
//        String requestBodyJson = mapper.writeValueAsString(requestBody);
//
//        // 2. Tạo yêu cầu HTTP POST
//        Request request = new Request.Builder()
//                .url(apiUrl + "?key=" + apiKey)
//                .post(RequestBody.create(requestBodyJson, MediaType.get("application/json; charset=utf-8")))
//                .build();
//
//        // 3. Thực thi yêu cầu và xử lý phản hồi
//        try (Response response = client.newCall(request).execute()) {
//            String responseBodyString = response.body() != null ? response.body().string() : "{}";
//
//            if (!response.isSuccessful()) {
//                log.error("Gemini API Error Response: {} - {}", response.code(), responseBodyString);
//                throw new IOException("Gemini API request failed with code " + response.code() + ": " + response.message());
//            }
//
//            // 4. Parse JSON response để trích xuất nội dung văn bản
//            // Cấu trúc response của Gemini: { "candidates": [ { "content": { "parts": [ { "text": "..." } ] } } ] }
//            JsonNode rootNode = mapper.readTree(responseBodyString);
//            JsonNode textNode = rootNode.path("candidates").path(0).path("content").path("parts").path(0).path("text");
//
//            if (textNode.isMissingNode()) {
//                log.error("Could not find 'text' in Gemini response: {}", responseBodyString);
//                throw new IOException("Invalid response structure from Gemini API.");
//            }
//
//            return textNode.asText();
//        }
//    }
//}



//package com.vti.live.demo_backend.ai_service.service;
//
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import okhttp3.*;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.time.Duration;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class GeminiApiClient {
//
//    private static final Logger log = LoggerFactory.getLogger(GeminiApiClient.class);
//
//    @Value("${gemini.api.key}")
//    private String apiKey;
//
//    @Value("${gemini.api.url}")
//    private String apiUrl;
//
//    private final OkHttpClient client = new OkHttpClient.Builder()
//            .connectTimeout(Duration.ofSeconds(20))
//            .readTimeout(Duration.ofSeconds(60))
//            .writeTimeout(Duration.ofSeconds(60))
//            .build();
//
//    private final ObjectMapper mapper = new ObjectMapper();
//
//    /**
//     * Gửi prompt đến Gemini API và lấy toàn bộ text trả về.
//     * @param prompt Câu hỏi hoặc yêu cầu.
//     * @return Văn bản phản hồi từ Gemini.
//     * @throws IOException Nếu lỗi mạng hoặc dữ liệu trả về sai cấu trúc.
//     */
//    public String generateContent(String prompt) throws IOException {
//        // 1. Body request
//        Map<String, Object> requestBody = Map.of(
//                "contents", List.of(
//                        Map.of("parts", List.of(Map.of("text", prompt)))
//                ),
//                "generationConfig", Map.of(
//                        "temperature", 0.2,
//                        "topK", 40,
//                        "topP", 0.95,
//                        "maxOutputTokens", 1024
//                )
//        );
//
//        String requestBodyJson = mapper.writeValueAsString(requestBody);
//
//        // 2. Gửi request
//        Request request = new Request.Builder()
//                .url(apiUrl + "?key=" + apiKey)
//                .post(RequestBody.create(requestBodyJson, MediaType.get("application/json; charset=utf-8")))
//                .build();
//
//        // 3. Xử lý response
//        try (Response response = client.newCall(request).execute()) {
//            String responseBodyString = response.body() != null ? response.body().string() : "{}";
//
//            if (!response.isSuccessful()) {
//                log.error("Gemini API Error Response: {} - {}", response.code(), responseBodyString);
//                throw new IOException("Gemini API request failed with code " + response.code() + ": " + response.message());
//            }
//
//            // 4. Parse JSON linh hoạt
//            JsonNode rootNode = mapper.readTree(responseBodyString);
//
//            StringBuilder sb = new StringBuilder();
//            for (JsonNode candidate : rootNode.path("candidates")) {
//                for (JsonNode part : candidate.path("content").path("parts")) {
//                    if (part.has("text")) {
//                        sb.append(part.get("text").asText()).append("\n");
//                    }
//                }
//            }
//
//            String result = sb.toString().trim();
//
//            if (result.isEmpty()) {
//                log.error("Could not find 'text' in Gemini response: {}", responseBodyString);
//                throw new IOException("Invalid response structure from Gemini API.");
//            }
//
//            return result;
//        }
//    }
//}
//








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
public class GeminiApiClient {

    private static final Logger log = LoggerFactory.getLogger(GeminiApiClient.class);

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(Duration.ofSeconds(20))
            .readTimeout(Duration.ofSeconds(60))
            .writeTimeout(Duration.ofSeconds(60))
            .build();

    private final ObjectMapper mapper = new ObjectMapper();

    /**
     * Gửi prompt đến Gemini API và lấy text trả về.
     */
    public String generateContent(String prompt) throws IOException {
        // 1. Body request
        Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                        Map.of("parts", List.of(Map.of("text", prompt)))
                ),
                "generationConfig", Map.of(
                        "temperature", 0.2,
                        "topK", 40,
                        "topP", 0.95,
                        "maxOutputTokens", 2048 // tăng để trả lời dài hơn
                )
        );

        String requestBodyJson = mapper.writeValueAsString(requestBody);

        // 2. Gửi request
        Request request = new Request.Builder()
                .url(apiUrl + "?key=" + apiKey)
                .post(RequestBody.create(requestBodyJson, MediaType.get("application/json; charset=utf-8")))
                .build();

        // 3. Xử lý response
        try (Response response = client.newCall(request).execute()) {
            String responseBodyString = response.body() != null ? response.body().string() : "{}";

            log.debug("Full Gemini API response: {}", responseBodyString);

            if (!response.isSuccessful()) {
                log.error("Gemini API Error Response: {} - {}", response.code(), responseBodyString);
                throw new IOException("Gemini API request failed with code " + response.code() + ": " + response.message());
            }

            JsonNode rootNode = mapper.readTree(responseBodyString);

            StringBuilder sb = new StringBuilder();

            // Case 1: chuẩn candidates[].content.parts[].text
            if (rootNode.has("candidates")) {
                for (JsonNode candidate : rootNode.path("candidates")) {
                    for (JsonNode part : candidate.path("content").path("parts")) {
                        if (part.has("text")) {
                            sb.append(part.get("text").asText()).append("\n");
                        }
                    }
                    // Case 2: candidates[].output
                    if (candidate.has("output")) {
                        sb.append(candidate.get("output").asText()).append("\n");
                    }
                }
            }

            // Case 3: root-level "output"
            if (rootNode.has("output")) {
                sb.append(rootNode.get("output").asText()).append("\n");
            }

            // Case 4: lỗi
            if (rootNode.has("error")) {
                String errorMsg = rootNode.path("error").path("message").asText("Unknown error");
                log.error("Gemini API returned error: {}", errorMsg);
                throw new IOException("Gemini API error: " + errorMsg);
            }

            String result = sb.toString().trim();

            if (result.isEmpty()) {
                log.error("Could not parse Gemini response: {}", responseBodyString);
                throw new IOException("Invalid response structure from Gemini API.");
            }

            return result;
        }
    }
}

