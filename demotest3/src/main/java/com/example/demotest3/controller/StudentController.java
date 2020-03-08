package com.example.demotest3.controller;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.demotest3.entity.Student;
import com.example.demotest3.repository.StudentRepository;
import com.jayway.jsonpath.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;


@RestController
@CrossOrigin(origins = "*")
public class StudentController{
    @Autowired
    public StudentRepository studentRepository;

    @GetMapping(path = "Student", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Student> Student() {
        return studentRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/Student/{sId}")
    public Optional<Student> student(@PathVariable Long sId){
        Optional<Student> s = studentRepository.findById(sId);
        return s;
    }

    @PostMapping(path = "/newStudent")
    private Student newStudent(@RequestBody Student student){
        Student s = new Student();

        s.setBDate(student.getbDate());
        s.setName(student.getName());
        s.setLastname(student.getLastname());
        s.setMajor(student.getMajor());      

        return studentRepository.save(s);
    }
}