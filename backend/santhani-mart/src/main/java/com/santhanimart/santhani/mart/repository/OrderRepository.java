package com.santhanimart.santhani.mart.repository;

import com.santhanimart.santhani.mart.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByCustomerEmail(String customerEmail);
}
