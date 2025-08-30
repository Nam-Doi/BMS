package com.vti.live.demo_backend.auth_service.database;

import com.vti.live.demo_backend.auth_service.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

@Configuration
public class Database {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository,
                                   PasswordEncoder passwordEncoder) {
        return args -> {
            // Kiểm tra nếu chưa có user nào thì tạo tài khoản admin
           // userRepository.deleteAll();
//            for(Position position: positionRepository.findAll()){
//                if(position.getStatus()== PositionStatus.PENDING)
//                {
//
//                }
//
            };
//
//            if (userRepository.findAll().isEmpty()) {
//
//
//                String uniqueRefCode = RefCodeGenerator.generateUniqueRefCode(userRepository);
//
//                User admin = User.builder()
//                        .username("admin")
//                        .email("admin@gmail.com")
//                        .phone("84965741051")
//                        .password(passwordEncoder.encode("A123456a@"))  // Mã hóa mật khẩu
//                        .role(Role.ADMIN).refCode(uniqueRefCode)
//                        .createdAt(LocalDateTime.now())
//                        .balance(java.math.BigDecimal.ZERO)
//                        .build();
//                walletService.createWallet(admin.getEmail());
//
//                userRepository.insert(admin);
//
//                System.out.println("✅ Tài khoản admin mặc định đã được khởi tạo.");
//            } else {
//                Optional<User> userOptional = userRepository.findByEmail("admin@gmail.com");
//                if(userOptional.isPresent()){
//                    String uniqueRefCode = RefCodeGenerator.generateUniqueRefCode(userRepository);
//                    User found = userOptional.get();
//                    found.setRole(Role.ADMIN);
//                    if(found.getRefCode().isEmpty()){
//                        found.setRefCode(uniqueRefCode);
//                    }
//                    userRepository.save(found);
//
//                }
//                System.out.println("ℹ️ Đã có tài khoản trong hệ thống. Bỏ qua khởi tạo.");
//            }
        };
    }

