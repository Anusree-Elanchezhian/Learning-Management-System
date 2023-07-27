package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Courses;
import com.example.demo.repository.CourseRepository;

import java.util.List;
@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Courses> getAllCourses() {
        return courseRepository.findAll();
    }

    public Courses saveCourse(Courses course) {
        return courseRepository.save(course);
    }

    // Add other methods if needed
}

