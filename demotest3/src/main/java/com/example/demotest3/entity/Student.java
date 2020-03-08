package com.example.demotest3.entity;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="sutudent")
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @SequenceGenerator(name="sId_seq",sequenceName ="sId_seq")
    
    private long sId;
    @Column(name = "name")
    private String name;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "major")
    private String major;
    @JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date bDate;

    public Student(){}
 

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public long getsId() {
        return sId;
    }

    public void setsId(Long id) {
        this.sId = id;
    }

    public Date getbDate() {
        return bDate;
    }

    public void setBDate(Date bDate) {
        this.bDate = bDate;
    }

    public Student(String name, String lastname, String major, Date bDate) {
        this.name = name;
        this.lastname = lastname;
        this.major = major;
        this.bDate = bDate;
    }
    
}