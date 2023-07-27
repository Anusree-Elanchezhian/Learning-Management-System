import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';
import './Certification.css';

const Certification = () => {
  const [selectedSection, setSelectedSection] = useState('achievements');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div className='certifi' style={{width:'100%'}}>
        <div className='cer-head'>
          <h1 style={{ padding: '5%' }}>
            Achievements/Rewards/Badges
          </h1>
        </div>
        <div className='rewards'>
          <div>
            <button className='bt' onClick={() => handleSectionChange('achievements')}>Achievements</button>
          </div>
          <div>
            <button className='bt' onClick={() => handleSectionChange('rewards')}>Rewards</button>
          </div>
          <div>
            <button className='bt' onClick={() => handleSectionChange('badges')}>Badges</button>
          </div>
        </div>
        <br></br>
        {selectedSection === 'achievements' && (
          <div>
            <h2>Achievements :</h2>
            {/* Your code to display achievements */}
          </div>
        )}
        {selectedSection === 'rewards' && (
          <div>
            <h2>Rewards :</h2>
            {/* Your code to display rewards */}
          </div>
        )}
        {selectedSection === 'badges' && (
          <div>
            <h2>Badges :</h2>
            {/* Your code to display badges */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Certification;
