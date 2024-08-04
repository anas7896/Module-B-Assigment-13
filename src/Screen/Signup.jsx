import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      sx={{ backgroundColor: '#f0f0f0' }}
    >
      <Paper elevation={10} sx={{ padding: '2rem', maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>Sign Up</Typography>
        <TextField 
          label="First Name" 
          fullWidth 
          margin="normal" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <TextField 
          label="Last Name" 
          fullWidth 
          margin="normal" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <TextField 
          label="Email" 
          fullWidth 
          margin="normal" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2, mb: 2, transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#D2093C' } }} 
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Typography variant="body2" align="center">
          Already have an account? <Link to="/login" style={{ color: '#1976d2' }}>Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signup;
