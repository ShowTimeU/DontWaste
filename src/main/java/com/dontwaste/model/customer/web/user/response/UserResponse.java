package com.dontwaste.model.customer.web.user.response;

import lombok.*;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class UserResponse {

    private Long id;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private String name;
    private String email;
    private String phone;
    private String area;
    private String secToken;

}
