package com.example.demotest3.repository;

import com.example.demotest3.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long>{
    
}