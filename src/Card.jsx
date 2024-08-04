import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({ id, title, desc, image }) {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <Card
        sx={{
          maxWidth: 345,
          transition: 'transform 0.5s, box-shadow 0.5s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 140,
            width: '100%',
            objectFit: 'cover',
            borderRadius: '4px', // Adjust the border-radius if needed
          }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.slice(0, 300)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate(`/products/${id}`)} size="small">View</Button>
        </CardActions>
      </Card>
    </div>
  );
}
