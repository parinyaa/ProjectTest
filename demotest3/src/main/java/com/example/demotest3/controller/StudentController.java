package com.example.demotest3.controller;

import java.util.Collection;
import java.util.stream.Collectors;
import com.example.demotest3.entity.Student;
import com.example.demotest3.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class StudentController{
    @Autowired
    public StudentRepository studentRepository;

    @GetMapping("/Student")
    public Collection<Student> Student() {
        
        return studentRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/EditStudent")
    public Collection<Student> EditStudent() {
        
        return studentRepository.findAll().stream().collect(Collectors.toList());
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


    @GetMapping(path = "/Student/{sId}")
    private ResponseEntity<Student> student(@PathVariable Long sId){
        Student student = studentRepository.findById(sId).get();
        if(student == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(student);
    }

    // @PutMapping("/{sId}")
    // public ResponseEntity<?> putStudent(@PathVariable Long id, @Valid @RequestBody Student body) {
    //     Optional<Student> student = studentRepository.updateStudent(id, body);
    //     if(!student.isPresent()) {
    //         return ResponseEntity.notFound().build();
    //     }
    //     return ResponseEntity.ok().build();
    // }

    @DeleteMapping("/EditStudent/{sId}")
    public Student delete(@PathVariable long sId) {
        Student student = studentRepository.findById(sId).get();
        studentRepository.delete(student); 
        // System.out.println("testttt");      
        return student;
    }

}