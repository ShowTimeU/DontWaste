package com.dontwaste.model.customer.entity.product.productType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum DishType {
    SOUP(1),
    MAIN_DISH(2),
    DESSERT(3),
    SNACK(4);

    private Integer id;

    public static DishType getById(Integer id){
        if(id == null){
            return null;
        }

        for(DishType dishType : DishType.values()){
            if(dishType.getId().equals(id)){
                return dishType;
            }
        }

        return null;
    }
}
