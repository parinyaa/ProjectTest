package com.example.demotest3.controller;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;
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

    @GetMapping("/Editstudent/{sId}")
    public Optional<Student> reservation(@PathVariable Long id) {
        Optional<Student> sr = studentRepository.findById(id);
        return sr;
    }

    @PostMapping(path = "/editStudent")
    private Student editStudent(@RequestBody Student student){        
        List<Student> studentlist = studentRepository.findByNameAndLastname(student.getName(),student.getLastname());
        System.out.println("StudentCheckEdit "+ studentlist.size());
        Student s = studentRepository.findById(student.getsId()).get();
        if(studentlist.size() == 0){
        s.setBDate(student.getbDate());
        s.setName(student.getName());
        s.setLastname(student.getLastname());
        s.setMajor(student.getMajor());      
        System.out.println(s);
        return studentRepository.save(s);
        }else{
            return null;
        }
    }


    @PostMapping(path ="/newStudent")
    public Student newStudent(@RequestBody Student student){
        List<Student> studentlist = studentRepository.findByNameAndLastname(student.getName(),student.getLastname());
        System.out.println("StudentCheck "+ studentlist.size());
        Student s2 = new Student();
            if(studentlist.size() == 0){
            
                s2.setName(student.getName());
                s2.setLastname(student.getLastname());
                s2.setMajor(student.getMajor());
                s2.setBDate(student.getbDate());
    
                return studentRepository.save(s2);            
            }else{
                return null;
            }
        
    }


    @GetMapping(path = "/Student/{sId}")
    private ResponseEntity<Student> student(@PathVariable Long sId){
        Student student = studentRepository.findById(sId).get();
        if(student == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(student);
    }


    @DeleteMapping("/EditStudent/{sId}")
    public Student delete(@PathVariable long sId) {
        Student student = studentRepository.findById(sId).get();
        studentRepository.delete(student); 
        System.out.println("testDelete");      
        return student;
    }
    

}