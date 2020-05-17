package com.dontwaste.service;

import com.dontwaste.model.admin.request.ProductCreationRequest;
import com.dontwaste.model.admin.response.ProductCreationResponse;
import com.dontwaste.model.customer.entity.ProductEntity;

public interface ProductService {
    ProductCreationResponse createProduct(ProductCreationRequest productCreationRequest);
    void deleteProduct(Long id);




}
