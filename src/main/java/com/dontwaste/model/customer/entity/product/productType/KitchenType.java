package com.dontwaste.model.customer.entity.product.productType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum KitchenType {

    EUROPEAN(1),
    EASTERN(2),
    ASIAN(3),
    FASTFOOD(4);

    private Integer id;

}
