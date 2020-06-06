package com.dontwaste.service;

import com.dontwaste.converter.session.SessionConverter;
import com.dontwaste.model.customer.entity.sessions.SessionEntity;
import com.dontwaste.model.customer.entity.user.UserEntity;
import com.dontwaste.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionServiceImp implements SessionService {

    @Autowired
    SessionRepository sessionRepository;

    @Autowired
    SessionConverter sessionConverter;

    @Override
    public Boolean addSession(String token, UserEntity userEntity) {
        SessionEntity savedSession = sessionRepository.save(sessionConverter.convertToEntitty(token, userEntity));
        if(savedSession!=null){
            return true;
        }
        else{
            return false;
        }
    }
}
