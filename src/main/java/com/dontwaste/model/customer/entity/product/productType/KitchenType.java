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

    public static KitchenType getById(Integer id){
        if(id == null){
            return null;
        }

        for(KitchenType kitchenType : KitchenType.values()){
            if(kitchenType.getId().equals(id)){
                return kitchenType;
            }
        }
        return null;
    }

}
