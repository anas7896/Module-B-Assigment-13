import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
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
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" align="center">
          Don't have an account? <Link to="/signup" style={{ color: '#1976d2' }}>Sign up</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
