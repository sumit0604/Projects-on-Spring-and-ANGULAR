package com.quiz.services.Impl;

import com.quiz.model.User;
import com.quiz.model.UserRole;
import com.quiz.repo.RoleRepository;
import com.quiz.repo.UserRepository;
import com.quiz.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    //Creating User....
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User usernames = this.userRepository.findByUsername(user.getUsername());
        if (usernames!=null)
        {
            System.out.println("Username already Exist..");
            throw new Exception("USER EXIST");
        }
        else {
            for (UserRole ur:userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            usernames = this.userRepository.save(user);
        }
        return usernames;
    }


    //getting data by username..........
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    //Deleting By UserId
    @Override
    public void deleteUser(Long userId) {
         this.userRepository.deleteById(userId);
    }
}
