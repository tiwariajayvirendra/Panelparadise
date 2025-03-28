import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  styled
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.2s ease-in-out',
  width: '100%',
  maxWidth: '100%',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(169, 241, 223, 0.1) 0%, rgba(255, 187, 187, 0.1) 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        sx={{
          height: {
            xs: '200px',
            sm: '250px',
            md: '300px'
          },
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        p: {
          xs: 1.5,
          sm: 2
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2" 
          sx={{ 
            fontWeight: 600,
            color: '#2c3e50',
            mb: 1,
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.2rem'
            },
            lineHeight: {
              xs: 1.3,
              sm: 1.4
            },
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.name}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mt: 'auto',
          pt: 1
        }}>
          <Rating 
            value={parseFloat(product.rating)} 
            precision={0.1} 
            readOnly 
            size="small"
            sx={{
              '& .MuiRating-icon': {
                fontSize: {
                  xs: '1rem',
                  sm: '1.25rem'
                }
              }
            }}
          />
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              ml: 1,
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem'
              }
            }}
          >
            ({product.rating})
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard; 