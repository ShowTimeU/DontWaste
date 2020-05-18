package com.dontwaste.service;

import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.create.UserCreateResponse;

public interface UserService {
    UserCreateResponse createUser(UserCreateRequest userCreateRequest);
    void deleteUser(Long id);




}
