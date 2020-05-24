package com.dontwaste.model.admin.response;

import com.dontwaste.model.customer.entity.product.converter.DishTypeConverter;
import com.dontwaste.model.customer.entity.product.converter.KitchenTypeConverter;
import com.dontwaste.model.customer.entity.product.productType.DishType;
import com.dontwaste.model.customer.entity.product.productType.KitchenType;
import lombok.*;

import javax.persistence.Convert;
import java.time.LocalDateTime;
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder
public class ProductCreationResponse {

    private Long id;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private String productName;
    private String description;
    private String image;
    private Double startingPrice;
    private Double price;
    private Boolean kosher;
    private Boolean vegeterian;
    private Boolean vegan;
    private String area;
    private String institution;

    @Convert(converter = KitchenTypeConverter.class)
    private KitchenType kitchenType;
    @Convert(converter = DishTypeConverter.class)
    private DishType dishType;


}
