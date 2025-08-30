package com.vti.live.demo_backend.auth_service.controller;

import com.vti.live.demo_backend.auth_service.dto.AuthResponse;
import com.vti.live.demo_backend.auth_service.dto.LoginRequest;
import com.vti.live.demo_backend.auth_service.dto.RegisterRequest;
import com.vti.live.demo_backend.auth_service.model.Role;
import com.vti.live.demo_backend.auth_service.model.User;
import com.vti.live.demo_backend.auth_service.repository.UserRepository;
import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.auth_service.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;



    @Autowired
    public AuthController(UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          AuthenticationManager authenticationManager,
                          JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body(ApiResponse.fail("Email đã tồn tại"));
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        user.setRefCode(UUID.randomUUID().toString().substring(0, 6));

        if (request.getReferrerCode() != null && !request.getReferrerCode().isBlank()) {
            Optional<User> referrerOpt = userRepository.findByRefCode(request.getReferrerCode());
            if (referrerOpt.isPresent()) {
                user.setReferrerCode(referrerOpt.get().getRefCode());
            } else {
                return ResponseEntity.badRequest().body(ApiResponse.fail("Mã giới thiệu không hợp lệ"));
            }
        }

        User newUser = userRepository.save(user);

        // 5. Lưu người dùng lần đầu để có ID

        // 6. TẠO WATCHLIST MẶC ĐỊNH
        List<String> defaultCoins = List.of("BTC", "ETH", "DOGE", "ADA", "SOL");
        newUser.setWatchlist(new HashSet<>(defaultCoins));

        // 7. Cập nhật lại người dùng với watchlist mới
        User updateUser = userRepository.save(newUser);

        // 8. Tạo ví mặc định


        return ResponseEntity.ok(ApiResponse.success("Đăng ký thành công", updateUser));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {
        try {
            String identifier = request.getIdentifier();
            String password = request.getPassword();

            Optional<User> userOpt = userRepository.findByEmail(identifier);
            if (userOpt.isEmpty()) {
                userOpt = userRepository.findByUsername(identifier);
            }

            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(ApiResponse.fail("Tài khoản không tồn tại"));
            }

            User user = userOpt.get();

            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), password)
            );

            UserDetails userDetails = (UserDetails) auth.getPrincipal();
            String token = jwtService.generateToken(userDetails);

            AuthResponse authResponse = new AuthResponse(token, user);
            return ResponseEntity.ok(ApiResponse.success("Đăng nhập thành công", authResponse));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(ApiResponse.fail("Sai tài khoản hoặc mật khẩu"));
        }
    }
}
