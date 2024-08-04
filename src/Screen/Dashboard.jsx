import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { productData } from '../Data';
import MediaCard from '../Card';

const Dashboard = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      sx={{ backgroundColor: '#f0f0f0' }}
    >
      <Paper elevation={10} sx={{ padding: '2rem', maxWidth: '1200px', width: '100%' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
          Welcome to your dashboard!
        </Typography>
        <Grid container spacing={3}>
          {productData.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <MediaCard id={e.id} title={e.title} desc={e.description} image={e.image} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
