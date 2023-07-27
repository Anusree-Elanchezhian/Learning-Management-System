package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Courses;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.CourseService;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins="*")

public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/get")
    public List<Courses> getAllCourses() {
        return courseService.getAllCourses();
    }
    @PostMapping("/post")
    public ResponseEntity<Courses> saveCourse(@RequestBody Courses course) {
        Courses savedCourse = courseService.saveCourse(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }
}
