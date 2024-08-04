import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../Data";
import { Container, Typography, Box, Button, Card, CardMedia, CardContent } from "@mui/material";

const Products = () => {
  let { id } = useParams();
  let filterData = productData.filter((e) => {
    return e.id == id;
  });

  return (
    <Container sx={{ mt: 4, maxWidth: { xs: '90%', sm: '500px', md: '500px' } }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
        Product Details
      </Typography>
      {filterData.map((item) => (
        <Card 
          key={item.id} 
          sx={{ 
            mb: 4, 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </Box>
    </Container>
  );
};

export default Products;
