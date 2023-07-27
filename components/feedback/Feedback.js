import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8082/api/v1/feed/addFeedback', { email, feedback })
      .then((response) => {
        console.log(response.data); 
        setFeedback('');
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Feedback Form
      </Typography>
      {isSubmitted ? (
        <Typography variant="h6" align="center" gutterBottom>
          Feedback submitted successfully!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Feedback
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Feedback;
