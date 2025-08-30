package com.vti.live.demo_backend.auth_service.repository;

import com.vti.live.demo_backend.auth_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByRefCode(String refCode);
    List<User> findByReferrerCode(String referrerCode); // ✅ dùng để tìm F1
    boolean existsByRefCode(String refCode);
    long countByReferrerCode(String refCode);
    Optional<User> findByUsername(String username);
}

