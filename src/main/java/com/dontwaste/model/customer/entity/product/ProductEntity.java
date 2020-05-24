package com.dontwaste.model.customer.entity.product;

import com.dontwaste.model.customer.base.BaseDate;
import com.dontwaste.model.customer.entity.product.converter.DishTypeConverter;
import com.dontwaste.model.customer.entity.product.converter.KitchenTypeConverter;
import com.dontwaste.model.customer.entity.product.productType.DishType;
import com.dontwaste.model.customer.entity.product.productType.KitchenType;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
@Entity
@Table(name = "PRODUCT")
public class ProductEntity extends BaseDate {
    @Column(name = "PRODUCT_NAME", length = 100, nullable = false)
    private String productName;

    @Column(name = "DESCRIPTION", nullable = false)
    @Length(max = 500)
    private String description;

    @Column(name = "IMAGE", nullable = false)
    @Length(max = 2600)
    private String image;

    @Column(name = "STARTING_PRICE", nullable = false)
    private Double startingPrice;

    @Column(name = "PRICE", nullable = false)
    private Double price;

    @Column(name = "KOSHER")
    private Boolean kosher;

    @Column(name = "VEGETERIAN")
    private Boolean vegeterian;

    //@Column(name = "VEGAN", columnDefinition = "boolean default false")
    @Column(name = "VEGAN")
    private Boolean vegan;

    //@Column(name = "AREA", columnDefinition = "varchar(255) default 'tel-aviv'")
    @Column(name = "AREA")
    private String area;

    @Column(name = "INSTITUTION")
    private String institution;

    @Column(name = "KITCHEN_TYPE")
    @Convert(converter = KitchenTypeConverter.class)
    private KitchenType kitchenType;

    @Column(name = "DISH_TYPE")
    @Convert(converter = DishTypeConverter.class)
    private DishType dishType;
}
