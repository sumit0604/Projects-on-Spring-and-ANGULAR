package com.quiz;

import com.quiz.model.Role;
import com.quiz.model.User;
import com.quiz.model.UserRole;
import com.quiz.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class QuizappApplication{

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(QuizappApplication.class, args);
		System.out.println("It is working Fine...");
	}

//	@Override
//	public void run(String... args) throws Exception {
//		System.out.println("Running...");
//		User user =new User();
//		user.setFirstname("shivam");
//		user.setLastname("bisht");
//		user.setUsername("shivam0000");
//		user.setPassword("shivam0000");
//		user.setEmail("shivam@gmail.com");
//		user.setProfile("default.png");
//
//		Role role = new Role();
//		role.setRoleId(44L);
//		role.setRoleName("admin");
//
//		Set<UserRole> userRoles = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role);
//		userRole.setUser(user);
//		userRoles.add(userRole);
//		User user1= this.userService.createUser(user,userRoles);
//		System.out.println(user1.getUsername());
//	}
}
