package com.santhanimart.santhani.mart;

import com.santhanimart.santhani.mart.model.User;
import com.santhanimart.santhani.mart.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AdminSeeder {

    @Bean
    public CommandLineRunner createAdmin(UserRepository userRepository) {
        return args -> {
            String email = System.getenv("ADMIN_EMAIL");
            String password = System.getenv("ADMIN_PASSWORD");
            if (email == null || email.isBlank() || password == null || password.isBlank()) {
                return;
            }
            if (userRepository.findByEmail(email).isEmpty()) {
                User admin = new User();
                admin.setName("Admin");
                admin.setEmail(email);
                admin.setPassword(password);
                admin.setRole("ADMIN");
                userRepository.save(admin);
            }
        };
    }
}
