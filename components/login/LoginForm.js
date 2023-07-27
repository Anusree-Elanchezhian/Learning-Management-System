import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { TextField, Button } from '@mui/material';
import './LoginForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../redux/Action';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: user,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', data).then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));
        dispatch(setUsername(user));

        if (role === 'student') {
          navigate('/components/home/Home'); // Replace '/student-page' with the actual path for the student page
        } else if (role === 'admin') {
          navigate('/admin/home/Home'); // Replace '/admin-page' with the actual path for the admin page
        }
      });
    } catch (error) {
      alert('Invalid Password');
    }
  };

  return (
    <div className='form'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1 className='log'>Login</h1>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Username'
            id="user"
            value={user}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Email'
            id="username"
            value={email}
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Role'
            id="role"
            value={role}
            autoComplete='off'
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        {error && <p className='error'>{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <br></br>
        <br></br>
        <div className="links-container">
             <Link to='/components/forgetpassword/forget'> Forgot Password?</Link>
          <p>Don't have an account? <Link to='/components/signup/SignUp' className='slink'>Sign Up</Link></p>
          <hr></hr>
          <p style={{ textAlign: 'center' }}>or</p>
          <div className="social-login">
            <Button style={{ marginRight: '4%' }}><BsGoogle /></Button>
            <Button style={{ marginRight: '4%' }}><BsFacebook /></Button>
            <Button style={{ marginRight: '4%' }}><BsGithub /></Button>
            <Button style={{ marginRight: '4%' }}><BsLinkedin /></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
