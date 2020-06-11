package com.dontwaste.service;

import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.login.UserLoginRequest;
import com.dontwaste.model.customer.web.user.response.UserResponse;

public interface UserService {
    UserResponse createUser(UserCreateRequest userCreateRequest);
    void deleteUser(Long id);
    UserResponse getUserForLogin(UserLoginRequest userLoginRequest);





}
