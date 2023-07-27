import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import { BsFacebook, BsGithub, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        gender: gender,
        phone_no: phone,
        institution: institution,
        password: password,
      });
      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setGender('');
        setPhone('');
        setInstitution('');
        setRole('');
        setPassword('');
        setCheckPassword('');
        setIsSubmit(false);
        navigate("/components/home/Home"); // Corrected the path for navigation
      }
    } catch (error) {
      setIsSubmit(false);
      setErrors('An error occurred during registration.'); // You can handle more specific error messages here
    }
  };

  return (
    <div className='sigmain'>
      <form className="sign-form" onSubmit={handleSubmit}>
        <div>
          <h1 className='sig'>SignUp</h1>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Username'
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="email"
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Phone.no'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Institution'
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        <div >
          <FormControl variant='outlined' style={{width:'90%'}}>
            <InputLabel>Select the Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <MenuItem value=''>Select the Role</MenuItem>
              <MenuItem value='Student'>Student</MenuItem>
              <MenuItem value='Instructor'>Instructor</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Check Password'
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <Button style={{marginLeft:'10%'}}
          type='submit'
          variant='contained'
          color='primary'
          disabled={isSubmit}
        >
          {isSubmit ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <div className="links-container">
          <p>Already have an account? <Link to="/">Login</Link></p>
          <hr></hr>
          <p style={{ textAlign: 'center' }}>or</p>
          <div className="social-login">
            <Button style={{ marginRight: '3%' }}><BsGoogle /></Button>
            <Button style={{ marginRight: '3%' }}><BsFacebook /></Button>
            <Button style={{ marginRight: '3%' }}><BsGithub /></Button>
            <Button style={{ marginRight: '3%' }}><BsLinkedin /></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
