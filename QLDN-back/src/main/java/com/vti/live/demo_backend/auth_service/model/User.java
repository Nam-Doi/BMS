package com.vti.live.demo_backend.auth_service.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String username;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    private String phone;

    private Role role;

    private LocalDateTime createdAt;
    private String refCode;        // Mã giới thiệu riêng (ví dụ: abc123)
    private String referrerCode;

    private BigDecimal balance = BigDecimal.ZERO; // ✅ Khởi tạo mặc định

    // ... constructors & builder

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }


    // Thêm thuộc tính tạm không lưu trong DB
    @Transient
    private int referralCount;

    private boolean lock =false  ;

    public boolean isLock() {
        return lock;
    }

    public void setLock(boolean lock) {
        this.lock = lock;
    }

    /**
     * =======================================================================
     * TRƯỜNG MỚI ĐÃ ĐƯỢC BỔ SUNG
     * =======================================================================
     * Danh sách các ký hiệu coin mà người dùng đang theo dõi.
     * Ví dụ: ["BTC", "ETH", "DOGE"]
     */
    @Field("watchlist")
    private Set<String> watchlist = new HashSet<>(); // Khởi tạo để tránh NullPointerException


    public Set<String> getWatchlist() {
        return watchlist;
    }

    public void setWatchlist(Set<String> watchlist) {
        this.watchlist = watchlist;
    }

    public int getReferralCount() {
        return referralCount;
    }

    public void setReferralCount(int referralCount) {
        this.referralCount = referralCount;
    }

    // Mã người giới thiệu
    public User(String id, String username, String email, String password, String phone, Role role, LocalDateTime createdAt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
        this.createdAt = createdAt;
    }

    public User() {
    }

    // ✅ Constructor private để chỉ builder gọi
    // ✅ Update constructor theo Builder
    private User(Builder builder) {
        this.id = builder.id;
        this.refCode = builder.refCode;
        this.referrerCode = builder.referrerCode;
        this.username = builder.username;
        this.email = builder.email;
        this.password = builder.password;
        this.phone = builder.phone;
        this.role = builder.role != null ? builder.role : Role.USER;
        this.createdAt = builder.createdAt != null ? builder.createdAt : LocalDateTime.now();
        this.balance = builder.balance != null ? builder.balance : BigDecimal.ZERO; // <--
    }

    public String getRefCode() {
        return refCode;
    }

    public void setRefCode(String refCode) {
        this.refCode = refCode;
    }

    public String getReferrerCode() {
        return referrerCode;
    }

    public void setReferrerCode(String referrerCode) {
        this.referrerCode = referrerCode;
    }

    // ✅ Getters & Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    // ✅ Builder thủ công
    public static class Builder {
        private String id;
        private String username;
        private String email;
        private String password;
        private String phone;
        private Role role;
        private LocalDateTime createdAt;
        private String refCode;        // Mã giới thiệu riêng (ví dụ: abc123)
        private String referrerCode;   // Mã người giới thiệu
        public Builder id(String id) {
            this.id = id;
            return this;
        }

        private BigDecimal balance;

        public Builder balance(BigDecimal balance) {
            this.balance = balance;
            return this;
        }

        public Builder refCode(String refCode){
            this.refCode = refCode;
            return this;
        }
        public Builder referrerCode(String referrerCode){
            this.referrerCode = referrerCode;
            return this;
        }


        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Builder role(Role role) {
            this.role = role;
            return this;
        }

        public Builder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }

    // ✅ Khởi tạo builder
    public static Builder builder() {
        return new Builder();
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", role=" + role +
                ", createdAt=" + createdAt +
                ", refCode='" + refCode + '\'' +
                ", referrerCode='" + referrerCode + '\'' +
                ", balance=" + balance +
                '}';
    }
}
