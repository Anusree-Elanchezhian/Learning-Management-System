import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavBar from '../navbar/Navbar';
import Header from '../header/Header';
import { BsPlusCircleFill } from "react-icons/bs";
import './Courses.css';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newCourse, setNewCourse] = useState({
    title: '',
    chapter: '',
    desc: '',
    link: '',
  });
  const [lang, setLang] = useState([
    {
      id: 1,
      title: 'Java Fundamentals',
      chapter: 'Chapter 1',
      desc: 'Basic of Java Programming.',
      link: '/Java',
    },
    {
      id: 2,
      title: 'Python',
      chapter: 'Chapter 2',
      desc: 'Basics of Python Programming.',
      link: '#',
    },
  ]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddCourse = (event) => {
    event.preventDefault();
    setLang([...lang, { ...newCourse, id: lang.length + 1 }]);
    setNewCourse({
      title: '',
      chapter: '',
      desc: '',
      link: '',
    });
  };

  const handleDeleteCourse = (id) => {
    setLang(lang.filter((course) => course.id !== id));
  };

  const filteredCourses3 = lang.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <AdminNavBar />
        <div className="courses-container" style={{ width: '100%' }}>
          <div className='crs-head'>
            <h3>COURSES</h3>
          </div>
          <div>
            <div className='search'>
              <input className='nosubmit'
                type="search"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={handleInputChange}
                style={{ height: '40%', width: '50%' }}
              />
            </div>
            <div className='part'>
              {filteredCourses3.map((course) => (
                <div className="acourse" key={course.id}>
                  <div className="acourse-preview">
                    <h6>Course</h6>
                    <h2>{course.title}</h2>
                    <a href="#">
                      View details
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                  <div className="acourse-info">
                    <h6>{course.chapter}</h6>
                    <h2>{course.desc}</h2>
                    <Link to={course.link} className='jlink'>
                      <button className="btn">Start</button>
                    </Link>
                    <button onClick={() => handleDeleteCourse(course.id)} className='dbtn'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 style={{textAlign:'left'}}>Add New Course <BsPlusCircleFill/></h2> 
              <form onSubmit={handleAddCourse} className='addform'>
                <input
                  type="text"
                  placeholder="Course Title / eg:Python"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                /><br></br>
                <input
                  type="text"
                  placeholder="Chapter / eg:chapter3"
                  value={newCourse.chapter}
                  onChange={(e) => setNewCourse({ ...newCourse, chapter: e.target.value })}
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Description / eg:complete python"
                  value={newCourse.desc}
                  onChange={(e) => setNewCourse({ ...newCourse, desc: e.target.value })}
                /><br></br>
                <input
                  type="text"
                  placeholder="Link / eg:url"
                  value={newCourse.link}
                  onChange={(e) => setNewCourse({ ...newCourse, link: e.target.value })}
                /><br></br>
                <button type="submit" className='abtn'>Add Course</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
