package com.dontwaste.controller;


import com.dontwaste.model.customer.entity.user.UserEntity;
import com.dontwaste.model.customer.web.user.create.UserCreateRequest;
import com.dontwaste.model.customer.web.user.create.UserCreateResponse;
import com.dontwaste.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/createUser")
    public UserCreateResponse createUser(@RequestBody UserCreateRequest userCreateRequest){
        return userService.createUser(userCreateRequest);
    }

    @DeleteMapping(value = "/deleteUser/{id}")
    public void deleteUser(Long id){
        userService.deleteUser(id);
    }

    @GetMapping(value = "/getUserByEmail")
    public UserEntity getUserByEmail(@RequestParam(name = "email") String email){
        return userService.getUserByEmail(email);
    }

}
