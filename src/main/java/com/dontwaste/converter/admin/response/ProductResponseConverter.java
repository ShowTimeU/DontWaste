package com.dontwaste.converter.admin.response;

import com.dontwaste.model.admin.response.ProductCreationResponse;
import com.dontwaste.model.customer.entity.product.ProductEntity;
import org.springframework.stereotype.Component;

@Component
public class ProductResponseConverter {

    public ProductCreationResponse convertProductToWeb(ProductEntity productEntity){
        return ProductCreationResponse.builder()
                .id(productEntity.getId())
                .createdOn(productEntity.getCreatedOn())
                .updatedOn(productEntity.getUpdatedOn())
                .productName(productEntity.getProductName())
                .description(productEntity.getDescription())
                .image(productEntity.getImage())
                .startingPrice(productEntity.getStartingPrice())
                .price(productEntity.getPrice())
                .area(productEntity.getArea())
                .institution(productEntity.getInstitution())
                .kosher(productEntity.isKosher())
                .vegan(productEntity.isVegan())
                .vegeterian(productEntity.isVegeterian())
                .build();
    }
}
