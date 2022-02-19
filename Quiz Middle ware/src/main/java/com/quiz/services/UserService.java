package com.quiz.services;

import com.quiz.model.User;
import com.quiz.model.UserRole;

import java.util.Set;

public interface UserService {

    //creating User
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
    //getting by username
    public User getUser(String username);
    //deleting by ID
    public  void deleteUser(Long userId);
}
