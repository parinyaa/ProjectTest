package com.example.demotest3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;


import java.util.Date;
import java.util.stream.Stream;

import com.example.demotest3.entity.Student;
import com.example.demotest3.repository.StudentRepository;

@SpringBootApplication
public class Demotest3Application {

	public static void main(String[] args) {
		SpringApplication.run(Demotest3Application.class, args);
	}
	@Bean
	ApplicationRunner init(StudentRepository studentRepository

	){
		return args -> {			

				Student student = new Student();
				// Date bDate = new Date();
				student.setName("Jack");
				student.setLastname("Smith");
				student.setMajor("ComputerEngneering");
				student.setBDate(student.getbDate());		
				studentRepository.save(student);		

		};
	}

}
