package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.app.pojo.User;

public interface UserRepository extends JpaRepositoryImplementation<User, Integer> {

	User findByEmailAndPassword(String email, String password);

	User findByEmail(String email);
	

}
