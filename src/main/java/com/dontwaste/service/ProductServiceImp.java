package com.dontwaste.service;

import com.dontwaste.converter.admin.request.ProductRequestConverter;
import com.dontwaste.converter.admin.response.ProductResponseConverter;
import com.dontwaste.model.admin.request.ProductCreationRequest;
import com.dontwaste.model.admin.response.ProductCreationResponse;
import com.dontwaste.model.customer.entity.product.ProductEntity;
import com.dontwaste.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImp implements ProductService  {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductRequestConverter productRequestConverter;

    @Autowired
    ProductResponseConverter productResponseConverter;

    @Override
    public ProductCreationResponse createProduct(ProductCreationRequest productCreationRequest) {
        ProductEntity product = productRequestConverter.converterToEntity(productCreationRequest);

        productRepository.save(product);

        return productResponseConverter.convertProductToWeb(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<ProductEntity> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<ProductEntity> getProductsByArea(String area) {
        return productRepository.findAllByArea(area);
    }
}
