import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import './Profile.css';
import Header from '../header/Header';

const Profile = () => {
  const initialProfile = {
    name: 'Anu',
    email: 'Anu@gmail.com',
    gender: 'Female',
    phone: '9791578253',
    institution: 'Sri Krishna College of Engineering and Technology',
    role: 'Student',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // You can perform API calls or update the data in the backend here.
    setIsEditing(false);
  };

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header/>
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div className='profile' style={{width:'100%'}}>
        <div className='pro'>
          <div className="inner">
            <div className="profile-container">
              <div className="profile-header"></div>
              <div className='pr'>
                <img className="profile-picture" src="https://res.cloudinary.com/ddlw9iej1/image/upload/v1689051663/icons8-male-user-30_v6wg5n.png" alt="Profile" />
                <h2>Profile</h2>
              </div>
              <div className="profile-content">
                {isEditing ? (
                  <div className="profile-details" style={{marginLeft:'33%'}}>
                    <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
                    <input type="text" name="email" value={profile.email} onChange={handleInputChange} />
                    <input type="text" name="gender" value={profile.gender} onChange={handleInputChange} />
                    <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
                    <input type="text" name="institution" value={profile.institution} onChange={handleInputChange} />
                    <input type="text" name="role" value={profile.role} onChange={handleInputChange} /><br></br><br></br>
                    <button onClick={handleSave}>Save</button>
                  </div>
                ) : (
                  <div className="profile-details">
                    <p><b>Name:</b> {profile.name}</p><br></br>
                    <p><b>Email:</b> {profile.email}</p><br></br>
                    <p><b>Gender:</b>{profile.gender}</p><br></br>
                    <p><b>Phone no:</b> {profile.phone}</p><br></br>
                    <p><b>Institution:</b>{profile.institution}</p><br></br>
                    <p><b>Role:</b> {profile.role}</p><br></br>
                    <button onClick={handleEdit}>Edit</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    </div>
  );
};
export default Profile;