package com.dontwaste.model.customer.web.user.create;

import lombok.*;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class UserCreateResponse {

    private Long id;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String area;

}
