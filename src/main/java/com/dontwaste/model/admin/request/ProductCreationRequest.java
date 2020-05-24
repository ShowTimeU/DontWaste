package com.dontwaste.model.admin.request;

import com.dontwaste.model.customer.entity.product.converter.DishTypeConverter;
import com.dontwaste.model.customer.entity.product.converter.KitchenTypeConverter;
import com.dontwaste.model.customer.entity.product.productType.DishType;
import com.dontwaste.model.customer.entity.product.productType.KitchenType;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Convert;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class ProductCreationRequest {
    @NotBlank
    private String productName;
    @NotBlank
    @Length(min = 6, max = 500)
    private String description;
    @NotBlank
    private String image;
    @Min(value = 1)
    @NotNull
    private Double startingPrice;
    @Min(value = 1)
    @NotNull
    private Double price;
    @NotBlank
    @Length(max = 100)
    private String area;
    @NotBlank
    @Length(max = 50)
    private String institution;

    private Boolean kosher;
    private Boolean vegeterian;
    private Boolean vegan;

    @Convert(converter = KitchenTypeConverter.class)
    private KitchenType kitchenType;
    @Convert(converter = DishTypeConverter.class)
    private DishType dishType;


}
