import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';

// Import all product images
import product1 from '../Assets/product-46.jpg';
import product2 from '../Assets/product-33.jpg';
import product3 from '../Assets/product-69.webp';
import product4 from '../Assets/product-51.jpg';
import product5 from '../Assets/product-58.jpg';
import product6 from '../Assets/product-62.jpg';
import product7 from '../Assets/product-35.jpg';
import product8 from '../Assets/product-24.jpg';
import product9 from '../Assets/product-18.jpg';
import product10 from '../Assets/product-28.jpg';
import product11 from '../Assets/product-19.jpg';
import product12 from '../Assets/product-55.jpg';
import product13 from '../Assets/product-25.jpg';
import product14 from '../Assets/product-44.jpg';
import product15 from '../Assets/product-59.jpg';
import product16 from '../Assets/product-38.jpg';
import product17 from '../Assets/product-31.jpg';
import product18 from '../Assets/product-49.jpg';
import product19 from '../Assets/product-17.jpg';
import product20 from '../Assets/product-34.jpg';
import product21 from '../Assets/product-61.jpg';
import product22 from '../Assets/product-39.jpg';
import product23 from '../Assets/product-66.jpg';
import product24 from '../Assets/product-29.jpg';
import product25 from '../Assets/product-45.jpg';
import product26 from '../Assets/product-57.jpg';
import product27 from '../Assets/product-42.webp';
import product28 from '../Assets/product-41.jpg';
import product29 from '../Assets/product-60.jpg';
import product30 from '../Assets/product-48.jpg';
import product31 from '../Assets/product-22.jpg';
import product32 from '../Assets/product-47.jpg';
import product33 from '../Assets/product-36.jpg';
import product34 from '../Assets/product-23.jpg';
import product35 from '../Assets/product-27.jpg';
import product36 from '../Assets/product-37.jpg';
import product37 from '../Assets/product-16.jpg';
import product38 from '../Assets/product-32.jpg';
import product39 from '../Assets/product-54.jpg';
import product40 from '../Assets/product-15.jpg';
import product41 from '../Assets/product-43.jpg';
import product42 from '../Assets/product-52.jpg';
import product43 from '../Assets/product-67.jpg';
import product44 from '../Assets/product-53.jpg';
import product45 from '../Assets/product-40.jpg';
import product46 from '../Assets/product-50.jpg';
import product47 from '../Assets/product-56.jpg';
import product48 from '../Assets/product-26.jpg';
import product49 from '../Assets/product-65.jpg';
import product50 from '../Assets/product-64.jpg';
import product51 from '../Assets/product-30.jpg';
import product52 from '../Assets/product-21.jpg';
import product53 from '../Assets/product-20.jpg';
import product54 from '../Assets/product-70.jpg';
import product55 from '../Assets/product-68.webp';
import product56 from '../Assets/product-63.jpg';

// Create array of all product images
const allProductImages = [
  product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15, product16, product17, product18, product19, product20,
  product21, product22, product23, product24, product25, product26, product27, product28, product29, product30,
  product31, product32, product33, product34, product35, product36, product37, product38, product39, product40,
  product41, product42, product43, product44, product45, product46, product47, product48, product49, product50,
  product51, product52, product53, product54, product55, product56
];

// Generate products with the images
const products = allProductImages.map((image, index) => {
  const hasDiscount = Math.random() > 0.5;
  const originalPrice = Math.floor(Math.random() * 900) + 100;
  const discount = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0;
  const price = hasDiscount 
    ? Math.floor(originalPrice * (1 - discount / 100)) 
    : originalPrice;

  return {
    id: `product-${index + 1}`,
    name: `PVC Panel Design ${index + 1}`,
    price,
    originalPrice: hasDiscount ? originalPrice : null,
    discount: hasDiscount ? discount : null,
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: image,
  };
});

const GridContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #A9F1DF 0%, #FFBBBB 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
    backgroundSize: '100px 100px',
    opacity: 0.1,
    animation: 'moveBackground 20s linear infinite',
  },
  '@keyframes moveBackground': {
    '0%': {
      backgroundPosition: '0 0',
    },
    '100%': {
      backgroundPosition: '100px 100px',
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  animation: 'fadeIn 1s ease-in',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(0, 2),
  '&::after': {
    content: '""',
    display: 'block',
    width: '60px',
    height: '4px',
    background: '#6FD6FF',
    margin: '20px auto',
    borderRadius: '2px',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const ProductsGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 1),
  },
  '& .MuiGrid-item': {
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      transform: 'translateY(-15px) scale(1.02)',
      '& .MuiCard-root': {
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      },
    },
  },
}));

const Products = () => {
  return (
    <GridContainer>
      <TitleBox>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom
          sx={{
            fontWeight: 800,
            color: '#2c3e50',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem'
            },
            lineHeight: {
              xs: 1.2,
              sm: 1.3,
              md: 1.4
            }
          }}
        >
          Our PVC Panels Collection
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            color: '#34495e',
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: {
              xs: '1rem',
              sm: '1.25rem',
              md: '1.5rem'
            },
            padding: {
              xs: '0 1rem',
              sm: '0 2rem'
            }
          }}
        >
          Discover our wide range of beautiful and durable PVC panels. 
          Transform your space with our premium collection of stylish and functional designs.
        </Typography>
      </TitleBox>

      <ProductsGrid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {products.map((product) => (
          <Grid 
            item 
            key={product.id} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </ProductsGrid>
    </GridContainer>
  );
};

export default Products; 