package com.vti.live.demo_backend.auth_service.service;

import com.vti.live.demo_backend.auth_service.model.User;
import com.vti.live.demo_backend.auth_service.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Service
public class WatchlistService {

    private final UserRepository userRepository;

    public WatchlistService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Set<String> getWatchlist(String userId) {
        return userRepository.findById(userId)
                .map(User::getWatchlist)
                .orElse(Collections.emptySet()); // Trả về set rỗng nếu không tìm thấy user
    }

    @Transactional // Đảm bảo thao tác là an toàn
    public Set<String> followCoin(String userId, String coinSymbol) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng với ID: " + userId));

        Set<String> watchlist = user.getWatchlist();
        if (watchlist == null) {
            watchlist = new HashSet<>();
        }

        watchlist.add(coinSymbol.toUpperCase());
        user.setWatchlist(watchlist);

        userRepository.save(user);
        return watchlist;
    }

    @Transactional
    public Set<String> unfollowCoin(String userId, String coinSymbol) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng với ID: " + userId));

        Set<String> watchlist = user.getWatchlist();
        if (watchlist != null) {
            watchlist.remove(coinSymbol.toUpperCase());
            user.setWatchlist(watchlist);
            userRepository.save(user);
        }

        return user.getWatchlist();
    }
}
