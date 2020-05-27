package com.dontwaste.model.customer.entity.product;

import com.dontwaste.model.customer.base.BaseDate;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
@Entity
@Table(name = "PRODUCT")
public class ProductEntity extends BaseDate {
    @Column(name = "PRODUCT_NAME", length = 100, nullable = false, unique = true)
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

//    @Column(name = "KOSHER")
//    private boolean kosher;
//
//    @Column(name = "VEGETERIAN")
//    private boolean vegeterian;
//
//    @Column(name = "VEGAN")
//    private boolean vegan;

    @Column(name = "AREA")
    private String area;

    @Column(name = "INSTITUTION")
    private String institution;

    @Column(name = "QUANTITY")
    private Integer quantity;


}
