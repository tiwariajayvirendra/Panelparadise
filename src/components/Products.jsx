import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';
import CardViewer from './CardViewer';
import styled from '@emotion/styled';

// Import all product images
const productImages = {
  product1: new URL('../Assets/product-46.jpg', import.meta.url).href,
  product2: new URL('../Assets/product-33.jpg', import.meta.url).href,
  product3: new URL('../Assets/product-69.webp', import.meta.url).href,
  product4: new URL('../Assets/product-51.jpg', import.meta.url).href,
  product5: new URL('../Assets/product-58.jpg', import.meta.url).href,
  product6: new URL('../Assets/product-62.jpg', import.meta.url).href,
  product7: new URL('../Assets/product-35.jpg', import.meta.url).href,
  product8: new URL('../Assets/product-24.jpg', import.meta.url).href,
  product9: new URL('../Assets/product-18.jpg', import.meta.url).href,
  product10: new URL('../Assets/product-28.jpg', import.meta.url).href,
  product11: new URL('../Assets/product-19.jpg', import.meta.url).href,
  product12: new URL('../Assets/product-55.jpg', import.meta.url).href,
  product13: new URL('../Assets/product-25.jpg', import.meta.url).href,
  product14: new URL('../Assets/product-44.jpg', import.meta.url).href,
  product15: new URL('../Assets/product-59.jpg', import.meta.url).href,
  product16: new URL('../Assets/product-38.jpg', import.meta.url).href,
  product17: new URL('../Assets/product-31.jpg', import.meta.url).href,
  product18: new URL('../Assets/product-49.jpg', import.meta.url).href,
  product19: new URL('../Assets/product-17.jpg', import.meta.url).href,
  product20: new URL('../Assets/product-34.jpg', import.meta.url).href,
  product21: new URL('../Assets/product-61.jpg', import.meta.url).href,
  product22: new URL('../Assets/product-39.jpg', import.meta.url).href,
  product23: new URL('../Assets/product-66.jpg', import.meta.url).href,
  product24: new URL('../Assets/product-29.jpg', import.meta.url).href,
  product25: new URL('../Assets/product-45.jpg', import.meta.url).href,
  product26: new URL('../Assets/product-57.jpg', import.meta.url).href,
  product27: new URL('../Assets/product-42.webp', import.meta.url).href,
  product28: new URL('../Assets/product-41.jpg', import.meta.url).href,
  product29: new URL('../Assets/product-60.jpg', import.meta.url).href,
  product30: new URL('../Assets/product-48.jpg', import.meta.url).href,
  product31: new URL('../Assets/product-22.jpg', import.meta.url).href,
  product32: new URL('../Assets/product-47.jpg', import.meta.url).href,
  product33: new URL('../Assets/product-36.jpg', import.meta.url).href,
  product34: new URL('../Assets/product-23.jpg', import.meta.url).href,
  product35: new URL('../Assets/product-27.jpg', import.meta.url).href,
  product36: new URL('../Assets/product-37.jpg', import.meta.url).href,
  product37: new URL('../Assets/product-16.jpg', import.meta.url).href,
  product38: new URL('../Assets/product-32.jpg', import.meta.url).href,
  product39: new URL('../Assets/product-54.jpg', import.meta.url).href,
  product40: new URL('../Assets/product-15.jpg', import.meta.url).href,
  product41: new URL('../Assets/product-43.jpg', import.meta.url).href,
  product42: new URL('../Assets/product-52.jpg', import.meta.url).href,
  product43: new URL('../Assets/product-67.jpg', import.meta.url).href,
  product44: new URL('../Assets/product-53.jpg', import.meta.url).href,
  product45: new URL('../Assets/product-40.jpg', import.meta.url).href,
  product46: new URL('../Assets/product-50.jpg', import.meta.url).href,
  product47: new URL('../Assets/product-56.jpg', import.meta.url).href,
  product48: new URL('../Assets/product-26.jpg', import.meta.url).href,
  product49: new URL('../Assets/product-65.jpg', import.meta.url).href,
  product50: new URL('../Assets/product-64.jpg', import.meta.url).href,
  product51: new URL('../Assets/product-30.jpg', import.meta.url).href,
  product52: new URL('../Assets/product-21.jpg', import.meta.url).href,
  product53: new URL('../Assets/product-20.jpg', import.meta.url).href,
  product54: new URL('../Assets/product-70.jpg', import.meta.url).href,
  product55: new URL('../Assets/product-68.webp', import.meta.url).href,
  product56: new URL('../Assets/product-63.jpg', import.meta.url).href,
};

// Create array of all product images
const allProductImages = Object.values(productImages);

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
  const [selectedCard, setSelectedCard] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
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
              <ProductCard product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </ProductsGrid>
      </GridContainer>

      <CardViewer
        open={viewerOpen}
        onClose={handleCloseViewer}
        card={selectedCard}
        allCards={products}
        category="products"
      />
    </>
  );
};

export default Products; 