package com.dontwaste.model.admin.request;

import lombok.*;
import org.hibernate.validator.constraints.Length;
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

}
