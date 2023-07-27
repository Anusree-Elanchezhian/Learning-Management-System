import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Forget.css'

const Forget= () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email to the server (you would handle this with your backend)
    // For this example, we'll just show a success message
    setMessage(`An email with a link to reset your password has been sent to ${email}.`);
  };

  return (
    <div className='f-form'>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div>
          <h2 style={{paddingLeft:'10%'}}>Forgot Password</h2>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="email"
            label='Email'
            id="email"
            value={email}
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br></br>

        <Button  type="submit" className='fbtn'>
          Reset Password
        </Button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Forget;
