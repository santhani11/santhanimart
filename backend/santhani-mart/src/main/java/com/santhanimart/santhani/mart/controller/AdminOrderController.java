package com.santhanimart.santhani.mart.controller;

import com.santhanimart.santhani.mart.model.User;
import com.santhanimart.santhani.mart.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminOrderController {

    private final UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public AdminOrderController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/orders")
    public ResponseEntity<?> listOrders(@RequestBody Map<String, String> creds) {
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

        List<?> orders = new ArrayList<>();
        for (EntityType<?> type : entityManager.getMetamodel().getEntities()) {
            String name = type.getName().toLowerCase();
            if (name.contains("order") && !name.contains("item")) {
                orders = entityManager
                        .createQuery("select o from " + type.getName() + " o")
                        .getResultList();
                break;
            }
        }
        return ResponseEntity.ok(orders);
    }
}
