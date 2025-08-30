package com.vti.live.demo_backend.auth_service.controller;


import com.vti.live.demo_backend.auth_service.dto.WatchlistRequestDTO;
import com.vti.live.demo_backend.auth_service.response.ApiResponse;
import com.vti.live.demo_backend.auth_service.service.WatchlistService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/v1/watchlist")
public class WatchlistController {

    private final WatchlistService watchlistService;

    public WatchlistController(WatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse> getWatchlist(@PathVariable String userId) {
        Set<String> watchlist = watchlistService.getWatchlist(userId);
        return ResponseEntity.ok(ApiResponse.success("Lấy watchlist thành công", watchlist));
    }

    @PostMapping("/follow")
    public ResponseEntity<ApiResponse> followCoin(@Valid @RequestBody WatchlistRequestDTO request) {
        try {
            Set<String> updatedWatchlist = watchlistService.followCoin(request.getUserId(), request.getCoinSymbol());
            return ResponseEntity.ok(ApiResponse.success("Theo dõi coin thành công", updatedWatchlist));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(ApiResponse.fail(e.getMessage()));
        }
    }

    @PostMapping("/unfollow")
    public ResponseEntity<ApiResponse> unfollowCoin(@Valid @RequestBody WatchlistRequestDTO request) {
        try {
            Set<String> updatedWatchlist = watchlistService.unfollowCoin(request.getUserId(), request.getCoinSymbol());
            return ResponseEntity.ok(ApiResponse.success("Bỏ theo dõi coin thành công", updatedWatchlist));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(ApiResponse.fail(e.getMessage()));
        }
    }
}
