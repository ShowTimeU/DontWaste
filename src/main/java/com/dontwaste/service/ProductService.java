package com.dontwaste.service;

import com.dontwaste.model.admin.request.ProductCreationRequest;
import com.dontwaste.model.admin.response.ProductCreationResponse;
import com.dontwaste.model.customer.entity.product.ProductEntity;

import java.util.List;

public interface ProductService {
    ProductCreationResponse createProduct(ProductCreationRequest productCreationRequest);
    void deleteProduct(Long id);
    List<ProductEntity> getAllProducts();
    List<ProductEntity> getProductsByArea(String area);




}
