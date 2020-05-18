package com.dontwaste.service;

import com.dontwaste.converter.user.request.UserRequestConverter;
import com.dontwaste.converter.user.response.UserResponseConverter;
import com.dontwaste.model.customer.entity.UserEntity;
import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.create.UserCreateResponse;
import com.dontwaste.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRequestConverter userRequestConverter;

    @Autowired
    UserResponseConverter userResponseConverter;

    @Override
    public UserCreateResponse createUser(UserCreateRequest userCreateRequest) {
        UserEntity user = userRequestConverter.convertToEntity(userCreateRequest);
        userRepository.save(user);

        return userResponseConverter.convertUserToWeb(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
