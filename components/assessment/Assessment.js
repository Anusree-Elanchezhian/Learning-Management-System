import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import './Assessment.css';
import Header from '../header/Header';

const Assessment = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const assessments = [
    {
      id: 1,
      title: 'Weekend Assessment',
      time: 'Sunday 6:00-8:00 PM',
      duration: '1 Hour',
      mcq: '30 Mcq',
      link: '/components/assessment/quiz/weekend',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Daily Assessment',
      time: 'Daily 6:00-8:00 PM',
      duration: '30 Minutes',
      mcq: '15 Mcq',
      link: '#',
      status: 'Active',
    },
    // Add more assessments here...
  ];

  const filteredAssessments =
    selectedCategory === 'All'
      ? assessments
      : assessments.filter((assessment) => assessment.status === selectedCategory);

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div className="assess-container" style={{width:'100%'}}>
          <div className="ass-head">
            <h3>ASSESSMENTS</h3>
          </div>
          <div className="session">
            <div>
              <button
                className={`btn1 ${selectedCategory === 'Active' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('Active')}
              >
                Active
              </button>
            </div>
            <div>
              <button
                className={`btn1 ${selectedCategory === 'Upcoming' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('Upcoming')}
              >
                Upcoming
              </button>
            </div>
            <div>
              <button
                className={`btn1 ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('All')}
              >
                All
              </button>
            </div>
          </div>
          <br />
          <hr />
          <div className="ass-part">
            {filteredAssessments.map((assessment) => (
              <div className="assess" key={assessment.id}>
                <div className="assess-preview">
                  <h2>{assessment.title}</h2>
                  <h6>{assessment.time}</h6>
                  <a href="#">
                    View details
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
                <div className='det'>
                  <h3>Duration: {assessment.duration}</h3>
                  <h4>{assessment.mcq}</h4>
                  <button className="abtn">
                    <Link to='/components/assessment/quiz/weekend' className='lin'>Take Test</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
          <hr />
          <div className="res">
            <h3>Results:-</h3>
            <h4 style={{ textAlign: 'center' }}>
              Results for the Weekend Assessments will be here : <a href="/">Click Here!</a>
            </h4>
            <h4 style={{ textAlign: 'center' }}>
              Results for the Daily Assessment will be here : <a href="/">Click Here!</a>
            </h4>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;