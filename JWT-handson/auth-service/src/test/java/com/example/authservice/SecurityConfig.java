package com.example.authservice;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)   // stateless API, no CSRF needed
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/authenticate").permitAll()  // allow unauthenticated access
                .anyRequest().authenticated()
            );
        return http.build();
    }
}