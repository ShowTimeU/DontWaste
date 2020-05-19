package com.dontwaste.service;

import com.dontwaste.model.customer.entity.ProductEntity;
import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.create.UserCreateResponse;

import java.util.List;

public interface UserService {
    UserCreateResponse createUser(UserCreateRequest userCreateRequest);
    void deleteUser(Long id);





}
