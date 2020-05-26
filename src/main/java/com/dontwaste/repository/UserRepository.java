package com.dontwaste.repository;

import com.dontwaste.model.customer.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByEmail(String email);

}
