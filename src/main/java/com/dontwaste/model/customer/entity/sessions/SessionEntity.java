package com.dontwaste.model.customer.entity.sessions;

import com.dontwaste.model.customer.entity.user.UserEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "SESSION")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class SessionEntity {
    @Id
    String sessionId;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    UserEntity user;

}
