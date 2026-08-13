package com.santhanimart.santhani.mart.controller;

import com.santhanimart.santhani.mart.model.User;
import com.santhanimart.santhani.mart.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", "Invalid email or password"));
        }

        User user = userOptional.get();

        if (!user.getPassword().equals(password)) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", "Invalid email or password"));
        }

        return ResponseEntity.ok(
                Map.of(
                        "message", "Login successful",
                        "name", user.getName(),
                        "email", user.getEmail(),
                        "role", user.getRole()
                )
        );
    }
    @PostMapping("/register")
public ResponseEntity<?> register(@RequestBody User user) {

    Optional<User> existingUser =
            userRepository.findByEmail(user.getEmail());

    if (existingUser.isPresent()) {
        return ResponseEntity
                .badRequest()
                .body(Map.of("message", "Email already registered"));
    }

    User savedUser = userRepository.save(user);

    return ResponseEntity.ok(
            Map.of(
                    "message", "Registration successful",
                    "name", savedUser.getName(),
                    "email", savedUser.getEmail(),
                    "role", savedUser.getRole()
            )
    );
}
}