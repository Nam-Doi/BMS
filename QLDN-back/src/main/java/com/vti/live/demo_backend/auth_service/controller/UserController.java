package com.vti.live.demo_backend.auth_service.controller;

import com.vti.live.demo_backend.auth_service.dto.ChangePasswordRequest;
import com.vti.live.demo_backend.auth_service.model.Role;
import com.vti.live.demo_backend.auth_service.model.User;
import com.vti.live.demo_backend.auth_service.repository.UserRepository;
import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse> getProfile(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body(ApiResponse.fail("Unauthorized"));
        }

        Optional<User> userOpt = userRepository.findByEmail(userDetails.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body(ApiResponse.fail("User not found"));
        }

        User user = userOpt.get();

        // Tính số người được giới thiệu
        if (user.getRefCode() != null) {
            int referralCount = (int) userRepository.countByReferrerCode(user.getRefCode());
            user.setReferralCount(referralCount);
        }

        return ResponseEntity.ok(ApiResponse.success("Lấy thông tin người dùng thành công", user));
    }

    @PostMapping("/change-password")
    public ResponseEntity<ApiResponse> changePassword(@RequestBody @Valid ChangePasswordRequest request,
                                                      @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body(ApiResponse.fail("Unauthorized"));
        }

        Optional<User> userOpt = userRepository.findByEmail(userDetails.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body(ApiResponse.fail("User not found"));
        }

        User user = userOpt.get();

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body(ApiResponse.fail("Mật khẩu hiện tại không chính xác"));
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(ApiResponse.success("Đổi mật khẩu thành công", null));
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllUsers(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body(ApiResponse.fail("Unauthorized"));
        }

        Optional<User> userOpt = userRepository.findByEmail(userDetails.getUsername());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body(ApiResponse.fail("User not found"));
        }

        User user = userOpt.get();

        if (user.getRole() != Role.ADMIN) {
            return ResponseEntity.status(403).body(ApiResponse.fail("Forbidden: Admin only"));
        }

        return ResponseEntity.ok(ApiResponse.success("Lấy danh sách người dùng thành công", userRepository.findAll()));
    }
}
