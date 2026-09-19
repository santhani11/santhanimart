package com.santhanimart.santhani.mart.controller;

import com.santhanimart.santhani.mart.model.Order;
import com.santhanimart.santhani.mart.repository.OrderRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // Create order
    @PostMapping
    public Order createOrder(@RequestBody Order order) {

        order.setStatus("PLACED");

        return orderRepository.save(order);
    }

    // Get orders of a customer
    @GetMapping("/{email}")
    public List<Order> getOrders(@PathVariable String email) {

        return orderRepository.findByCustomerEmail(email);
    }
}