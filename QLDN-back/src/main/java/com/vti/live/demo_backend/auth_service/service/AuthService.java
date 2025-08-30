//package com.xosotv.live.xosotv_backend.ai_service.service;
//
//import com.xosotv.live.xosotv_backend.ai_service.dto.AuthResponse;
//import com.xosotv.live.xosotv_backend.ai_service.dto.LoginRequest;
//import com.xosotv.live.xosotv_backend.ai_service.dto.RegisterRequest;
//import com.xosotv.live.xosotv_backend.ai_service.model.User;
//import com.xosotv.live.xosotv_backend.ai_service.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtService jwtService;
//
//    @Autowired
//    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//        this.jwtService = jwtService;
//    }
//
//
//    public AuthResponse register(RegisterRequest req) {
//        if (userRepository.existsByEmail(req.getEmail())) {
//            throw new RuntimeException("Email đã được sử dụng.");
//        }
//
//        var user = new User();
//        user.setUsername(req.getUsername());
//        user.setEmail(req.getEmail());
//        user.setPhone(req.getPhone());
//        user.setPassword(passwordEncoder.encode(req.getPassword()));
//
//        userRepository.save(user);
//        return new AuthResponse(jwtService.generateToken(user));
//    }
//
//    public AuthResponse login(LoginRequest req) {
//        var user = userRepository.findByEmail(req.getEmail())
//                .orElseThrow(() -> new RuntimeException("Tài khoản không tồn tại"));
//
//        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
//            throw new RuntimeException("Mật khẩu không đúng");
//        }
//
//        return new AuthResponse(jwtService.generateToken(user));
//    }
//}
//
