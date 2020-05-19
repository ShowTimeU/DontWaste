package com.dontwaste.controller;


import com.dontwaste.model.admin.request.ProductCreationRequest;
import com.dontwaste.model.admin.response.ProductCreationResponse;
import com.dontwaste.model.customer.entity.ProductEntity;
import com.dontwaste.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/createProduct")
    public ProductCreationResponse createProduct(@RequestBody ProductCreationRequest productCreationRequest){
        return productService.createProduct(productCreationRequest);
    }

    @DeleteMapping(value = "deleteProduct/{id}")
    public void deleteProduct(@PathVariable("id") Long id){
        productService.deleteProduct(id);
    }

    @GetMapping(value = "getAllProducts")
    public List<ProductEntity> getAllProducts(){
        return productService.getAllProducts();
    }

}
