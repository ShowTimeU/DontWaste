package com.dontwaste.converter.user.response;

import com.dontwaste.model.customer.entity.user.UserEntity;
import com.dontwaste.model.customer.web.user.response.UserResponse;
import org.springframework.stereotype.Component;

@Component
public class UserResponseConverter {

    public UserResponse convertUserToWeb(UserEntity userEntity){
        return UserResponse.builder()
                .id(userEntity.getId())
                .createdOn(userEntity.getCreatedOn())
                .updatedOn(userEntity.getUpdatedOn())
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .phone(userEntity.getPhone())
                .area(userEntity.getArea())
                .build();
    }

}
