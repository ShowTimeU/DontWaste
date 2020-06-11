package com.dontwaste.service;

import com.dontwaste.converter.user.request.UserRequestConverter;
import com.dontwaste.converter.user.response.UserResponseConverter;
import com.dontwaste.model.customer.entity.user.UserEntity;
import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.login.UserLoginRequest;
import com.dontwaste.model.customer.web.user.response.UserResponse;
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

    @Autowired
    SessionService sessionService;

    @Override
    public UserResponse createUser(UserCreateRequest userCreateRequest) {
        UserEntity user = userRequestConverter.convertToEntity(userCreateRequest);
        userRepository.save(user);

        return userResponseConverter.convertUserToWeb(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserResponse getUserForLogin(UserLoginRequest userLoginRequest) {
        UserEntity user = userRepository.findByEmail(userLoginRequest.getEmail());
        if(user==null){
            return new UserResponse();
        }
        UserResponse usrConver = userResponseConverter.convertUserToWeb(user);
        String sessionID = usrConver.getSecToken();
//        TODO: FIX IT ALL
        while (true) {
            Boolean saveSuccess = sessionService.addSession(sessionID, user);
            if (saveSuccess) {
                return usrConver;
            } else {
                usrConver.setSecToken(usrConver.getSecToken() + "1");
            }
        }
    }


}
