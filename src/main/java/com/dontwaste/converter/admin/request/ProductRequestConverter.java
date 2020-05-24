package com.dontwaste.converter.admin.request;

import com.dontwaste.model.admin.request.ProductCreationRequest;
import com.dontwaste.model.customer.entity.product.ProductEntity;
import org.springframework.stereotype.Component;

@Component
public class ProductRequestConverter {

    public ProductEntity converterToEntity(ProductCreationRequest productCreationRequest){
        return ProductEntity.builder()
            .productName(productCreationRequest.getProductName())
            .description(productCreationRequest.getDescription())
            .image(productCreationRequest.getImage())
            .startingPrice(productCreationRequest.getStartingPrice())
            .price(productCreationRequest.getPrice())
            .area(productCreationRequest.getArea())
            .institution(productCreationRequest.getInstitution())
            .kosher(productCreationRequest.getKosher())
            .vegan(productCreationRequest.getVegan())
            .vegeterian(productCreationRequest.getVegeterian())
            .dishType(productCreationRequest.getDishType())
            .kitchenType(productCreationRequest.getKitchenType())
            .build();
    }

}
