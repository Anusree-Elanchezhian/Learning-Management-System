import React, { useState } from 'react';
import Header from '../header/Header';
import AdminNavBar from '../navbar/Navbar';
import './User.css';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Anusree', email: 'anu@gmail.com.com' },
    { id: 2, name: 'Bhuvanesh', email: 'bhu@gmail.com' },
    { id: 3, name: 'Dhaks', email: 'Dhaks@gmail.com' },
    { id: 4, name: 'Harini', email: 'hm@gmail.com' },
    { id: 5, name: 'Akshy', email: 'Akshy@gmail.com' },
    // Add more initial users if needed
    // { id: 3, name: 'Another User', email: 'another.user@example.com' },
  ]);

  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    if (newUserName.trim() === '' || newUserEmail.trim() === '') {
      alert('Please enter a valid username and email.');
      return;
    }

    const newUser = {
      id: Date.now(), // Generate a unique ID (not reliable in a real backend scenario)
      name: newUserName,
      email: newUserEmail,
    };

    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserEmail('');
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setNewUserName(user.name);
    setNewUserEmail(user.email);
  };

  const handleSaveUser = () => {
    if (newUserName.trim() === '' || newUserEmail.trim() === '') {
      alert('Please enter a valid username and email.');
      return;
    }

    const updatedUsers = users.map((user) =>
      user.id === editingUserId ? { ...user, name: newUserName, email: newUserEmail } : user
    );

    setUsers(updatedUsers);
    setEditingUserId(null);
    setNewUserName('');
    setNewUserEmail('');
  };

  const handleRemoveUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <AdminNavBar />
        <div className='user-container'>
          <div className='user-list'>
            <h2 style={{ textAlign: 'center' }}>Current Users</h2>
            <table className='user-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Edit/Remove</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {editingUserId === user.id ? (
                        <>
                          <input
                            type='text'
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                          />
                          <input
                            type='email'
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                          />
                          <button onClick={handleSaveUser} className='rbtn'>
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleEditUser(user)} className='rbtn'>
                            Edit
                          </button>&nbsp;&nbsp;
                          <button onClick={() => handleRemoveUser(user.id)} className='rbtn'>
                            Remove
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='add-user'>
            <h3 style={{ paddingLeft: '40px' }}>Add New User</h3>
            <input
              type='text'
              placeholder='Name'
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <br></br><br></br>
            <input
              type='email'
              placeholder='Email'
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
            <br></br><br></br>
            <button onClick={handleAddUser} className='ubtn'>
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
