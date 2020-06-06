package com.dontwaste.model.customer.entity.user;

import com.dontwaste.model.customer.base.BaseDate;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Random;

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

    public static void main(String[] args) {
        System.out.println(getSecToken());
    }
    public static String getSecToken() {
        StringBuilder token = new StringBuilder();
        Random rn = new Random();
        for (int i=1; i < 50; i++) {
            int num = Math.abs(rn.nextInt()) % 93;
            char t = (char) (num + 33);
            token.append(t);
        }

        return token.toString();
    }
}
