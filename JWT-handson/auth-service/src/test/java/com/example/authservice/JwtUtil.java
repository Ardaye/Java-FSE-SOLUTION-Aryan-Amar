package com.example.authservice;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Generate a secure random key for HS256 (in production, store this key externally)
    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String username) {
        long now = System.currentTimeMillis();
        long expiry = now + 1000 * 60 * 20; // 20 minutes

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(expiry))
                .signWith(secretKey)
                .compact();
    }
}