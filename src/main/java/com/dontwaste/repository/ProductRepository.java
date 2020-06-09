package com.dontwaste.repository;

import com.dontwaste.model.customer.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findAllByArea(String area);

    @Query("select p from ProductEntity p where p.productName like %:productName%")
    List<ProductEntity> getAllProductsByNameLike(@Param("productName") String productName);

    @Query("select p from ProductEntity p where p.price between :minPrice and :maxPrice")
    List<ProductEntity> getAllProductsWithPriceBetween(@Param("minPrice") Double min,
                                                       @Param("maxPrice") Double max);

}
