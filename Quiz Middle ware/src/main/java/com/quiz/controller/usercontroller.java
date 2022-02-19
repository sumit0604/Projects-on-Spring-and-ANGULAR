package com.quiz.controller;

import com.quiz.model.Role;
import com.quiz.model.User;
import com.quiz.model.UserRole;
import com.quiz.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class usercontroller {

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        user.setProfile("default.jpg");

        Set<UserRole> roles = new HashSet<>();

        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("Normal");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);

        return this.userService.createUser(user,roles);
    }

    ///get Data By username

    @GetMapping("/{username}")
    public User getUser(@PathVariable ("username") String username)
    {
        return  this.userService.getUser(username);
    }


    //delete by username
    @DeleteMapping("/{userid}")
    public  void deleteUser(@PathVariable("userid") Long userid)
    {
        this.userService.deleteUser(userid);
    }

}
