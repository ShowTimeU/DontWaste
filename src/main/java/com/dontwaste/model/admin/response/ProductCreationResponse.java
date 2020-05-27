package com.dontwaste.model.admin.response;

import lombok.*;

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
//    private boolean kosher;
//    private boolean vegeterian;
//    private boolean vegan;
    private String area;
    private String institution;
    private Integer quantity;


}
