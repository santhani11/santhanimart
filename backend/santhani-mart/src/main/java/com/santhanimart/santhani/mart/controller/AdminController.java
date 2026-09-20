package com.santhanimart.santhani.mart.controller;

import com.santhanimart.santhani.mart.model.User;
import com.santhanimart.santhani.mart.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    private final UserRepository userRepository;

    public AdminController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/users")
    public ResponseEntity<?> listUsers(@RequestBody Map<String, String> creds) {
        String email = creds.get("email");
        String password = creds.get("password");

        Optional<User> adminOpt =
                email == null ? Optional.empty() : userRepository.findByEmail(email);

        if (adminOpt.isEmpty()
                || password == null
                || !password.equals(adminOpt.get().getPassword())
                || !"ADMIN".equals(adminOpt.get().getRole())) {
            return ResponseEntity.status(403)
                    .body(Map.of("message", "Admin access only"));
        }

        List<Map<String, String>> result = new ArrayList<>();
        for (User u : userRepository.findAll()) {
            Map<String, String> row = new LinkedHashMap<>();
            row.put("name", String.valueOf(u.getName()));
            row.put("email", String.valueOf(u.getEmail()));
            row.put("role", String.valueOf(u.getRole()));
            result.add(row);
        }
        return ResponseEntity.ok(result);
    }
}
