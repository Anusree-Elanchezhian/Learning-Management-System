import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';
import './Courses.css';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8181/api/courses/get`, {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setCourses(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div className="courses-container" style={{ width: '100%' }}>
          <div className='crs-head'>
            <h3>COURSES</h3>
          </div>
          <div>
            <div className='search'>
              <input
                className='nosubmit'
                type="search"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={handleInputChange}
                style={{ height: '40%', width: '50%' }}
              />
            </div>
            <h2>All Courses</h2>
            <div className='part1'>
              {filteredCourses.map((course) => (
                <div className="course" key={course.id}>
                  <div className="course-preview">
                    <h6>Course</h6>
                    <h2>{course.title}</h2>
                    <a href="#">
                      View details
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                  <div className="course-info">
                    <h6>{course.chapter}</h6>
                    <h2>{course.description}</h2>
                    <Link to={course.link} className='jlink'>
                      <button className="btn">Start</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
