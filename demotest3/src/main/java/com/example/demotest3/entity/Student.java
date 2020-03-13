package com.example.demotest3.entity;

import java.util.Date;
import javax.persistence.*;

import lombok.NonNull;

@Entity
@Table(name="sutudent")
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @SequenceGenerator(name="sId_seq",sequenceName ="sId_seq")

    private long sId;
    @Column(name = "name")
    @NonNull
    private String name;

    @Column(name = "lastname")
    @NonNull
    private String lastname;
    
    @Column(name = "major")
    @NonNull
    private String major;

    @NonNull
    @Temporal(TemporalType.DATE)
    private @io.micrometer.core.lang.NonNull Date bDate;    

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

    public void setsId(long sId) {
        this.sId = sId;
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

    @Override
    public String toString() {
        return "Student [bDate=" + bDate + ", lastname=" + lastname + ", major=" + major + ", name=" + name + ", sId="
                + sId + "]";
    }
    


}



    