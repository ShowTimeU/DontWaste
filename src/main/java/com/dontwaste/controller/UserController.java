package com.dontwaste.controller;


import com.dontwaste.model.customer.web.user.create.request.UserCreateRequest;
import com.dontwaste.model.customer.web.user.login.UserLoginRequest;
import com.dontwaste.model.customer.web.user.response.UserResponse;
import com.dontwaste.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/createUser")
    public UserResponse createUser(@RequestBody UserCreateRequest userCreateRequest){
        return userService.createUser(userCreateRequest);
    }

    @DeleteMapping(value = "/deleteUser/{id}")
    public void deleteUser(Long id){
        userService.deleteUser(id);
    }

    @PostMapping(value = "/login")
    public UserResponse getUserForLogin(@RequestBody UserLoginRequest userLoginRequest){
        return userService.getUserForLogin(userLoginRequest);
    }

    @CrossOrigin
    @PostMapping(value = "/login1")
    public String getTokenTest(@RequestBody UserLoginRequest userLoginRequest){
        UserResponse usr = userService.getUserForLogin(userLoginRequest);
        String respString = String.format("{\"%s\": \"%s\", \"name\": \"%s\", \"email\": \"%s\"}",
                                            "token",
                                            "1232138912498745sakadhwqejhq897213912874",
                                            "pisss", "off@shit.on.you");
        return respString;
    }

}
