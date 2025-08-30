package com.vti.live.demo_backend.auth_service.model;

import com.vti.live.demo_backend.auth_service.repository.UserRepository;

import java.security.SecureRandom;

public class RefCodeGenerator {
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final SecureRandom random = new SecureRandom();

    public static String generateRefCode(int length) {
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }
        return sb.toString();
    }

    // Sinh refCode không trùng
    public static String generateUniqueRefCode(UserRepository userRepository) {
        String code;
        do {
            code = generateRefCode(6);
        } while (userRepository.existsByRefCode(code));
        return code;
    }
}

