package com.dontwaste.model.customer.web.user.create;


import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class UserCreateRequest {
    @NotBlank
    @Length(min = 2, max = 20)
    private String name;
    @NotBlank
    @Length(min = 6, max = 40)
    private String email;
    @NotBlank
    @Length(min = 8, max = 20)
    private String password;
    @NotBlank
    @Length(max = 20)
    private String phone;
    @NotBlank
    @Length(max = 100)
    private String area;

}
