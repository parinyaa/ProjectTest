package com.example.demotest3.repository;

import java.util.Optional;

import javax.validation.Valid;

import com.example.demotest3.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long>{
    Student findById(long sId);

}
