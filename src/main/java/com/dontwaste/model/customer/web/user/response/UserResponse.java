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
    private String password;
    private String phone;
    private String area;

    public String toString() {
        String outputString = String.format("{\"username\": \"%s\", \"email\": \"%s\"}",
                                    this.getName(),
                                    this.getEmail());
        return outputString;
    }

}
