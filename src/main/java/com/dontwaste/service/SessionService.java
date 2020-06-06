package com.dontwaste.service;

import com.dontwaste.model.customer.entity.user.UserEntity;

public interface SessionService {

    Boolean addSession(String token, UserEntity userEntity);

}
