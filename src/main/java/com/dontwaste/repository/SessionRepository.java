package com.dontwaste.repository;

import com.dontwaste.model.customer.entity.sessions.SessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<SessionEntity, String> {
}
