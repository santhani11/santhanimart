package com.santhanimart.santhani.mart.controller;

import com.santhanimart.santhani.mart.model.Product;
import com.santhanimart.santhani.mart.repository.ProductRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Add new product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // Delete product
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {

        if (!productRepository.existsById(id)) {
            return "Product not found";
        }

        productRepository.deleteById(id);
        return "Product deleted successfully";
    }

    // Decrease product stock
@PutMapping("/{id}/decrease-stock")
public String decreaseStock(@PathVariable Long id) {

    Product product = productRepository.findById(id).orElse(null);

    if (product == null) {
        return "Product not found";
    }

    if (product.getStock() <= 0) {
        return "Out of stock";
    }

    product.setStock(product.getStock() - 1);
    productRepository.save(product);

    return "Stock updated successfully";
}

// Increase product stock
@PutMapping("/{id}/increase-stock")
public String increaseStock(@PathVariable Long id) {

    Product product = productRepository.findById(id).orElse(null);

    if (product == null) {
        return "Product not found";
    }

    product.setStock(product.getStock() + 1);
    productRepository.save(product);

    return "Stock increased successfully";
}
}
