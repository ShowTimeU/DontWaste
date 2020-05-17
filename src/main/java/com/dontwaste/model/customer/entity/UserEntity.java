package com.dontwaste.model.customer.entity;

import com.dontwaste.model.customer.base.BaseDate;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
@Entity
@Table(name = "USER")
public class UserEntity extends BaseDate {
    @Column(name = "NAME", length = 80, nullable = false)
    private String name;
    @Column(name = "EMAIL", length = 50, nullable = false, unique = true)
    private String email;
    @Column(name = "PASSWORD", length = 30, nullable = false)
    private String password;
    @Column(name = "PHONE", length = 20, nullable = false)
    private String phone;
    @Column(name = "AREA", length = 100)
    private String area;


}
