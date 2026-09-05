package com.santhanimart.santhani.mart.repository;

import com.santhanimart.santhani.mart.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}