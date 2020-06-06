package com.dontwaste.converter.session;

import com.dontwaste.model.customer.entity.sessions.SessionEntity;
import com.dontwaste.model.customer.entity.user.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class SessionConverter {

    public SessionEntity convertToEntitty(String sessionId, UserEntity userEntity){
        return SessionEntity.builder()
                .sessionId(sessionId)
                .user(userEntity)
                .build();
    }

}
