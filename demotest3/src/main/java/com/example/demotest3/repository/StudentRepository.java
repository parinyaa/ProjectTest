package com.example.demotest3.repository;

import java.util.List;

import com.example.demotest3.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long>{
    @Query("SELECT n FROM Student n WHERE n.name = ?1 and n.lastname = ?2")
    List<Student> findByNameAndLastname(String name,String lastname);
}