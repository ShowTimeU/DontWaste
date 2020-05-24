package com.dontwaste.repository;

import com.dontwaste.model.customer.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findAllByArea(String area);

}
