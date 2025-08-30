package com.vti.live.demo_backend.auth_service.dto;


import jakarta.validation.constraints.NotBlank;

public class WatchlistRequestDTO {
    @NotBlank
    private String userId;

    @NotBlank
    private String coinSymbol; // Ví dụ: "BTC", "DOGE"

    public @NotBlank String getUserId() {
        return userId;
    }

    public void setUserId(@NotBlank String userId) {
        this.userId = userId;
    }

    public @NotBlank String getCoinSymbol() {
        return coinSymbol;
    }

    public void setCoinSymbol(@NotBlank String coinSymbol) {
        this.coinSymbol = coinSymbol;
    }
}
