package com.dontwaste.converter.user.request;

import com.dontwaste.model.customer.entity.UserEntity;
import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import org.springframework.stereotype.Component;

@Component
public class UserRequestConverter {

    public UserEntity convertToEntity(UserCreateRequest userCreateRequest){
        return UserEntity.builder()
                .name(userCreateRequest.getName())
                .email(userCreateRequest.getEmail())
                .password(userCreateRequest.getPassword())
                .phone(userCreateRequest.getPhone())
                .area(userCreateRequest.getArea())
                .build();
    }

}
