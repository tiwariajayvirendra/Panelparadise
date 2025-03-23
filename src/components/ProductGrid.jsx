import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';

// Import product images
import product1 from '../Assets/product-46.jpg';
import product2 from '../Assets/product-33.jpg';
import product3 from '../Assets/product-69.webp';
import product4 from '../Assets/product-51.jpg';
import product5 from '../Assets/product-58.jpg';
import product6 from '../Assets/product-62.jpg';

// Sample product data (replace with actual data from your backend)
const sampleProducts = [
  {
    id: 1,
    name: 'Modern PVC Panel Design',
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.5,
    image: product1,
  },
  {
    id: 2,
    name: 'Classic Wood Pattern Panel',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.8,
    image: product2,
  },
  {
    id: 3,
    name: 'Premium Marble Panel',
    price: 149.99,
    rating: 4.2,
    image: product3,
  },
  {
    id: 4,
    name: 'Contemporary Panel Design',
    price: 129.99,
    rating: 4.0,
    image: product4,
  },
  {
    id: 5,
    name: 'Luxury Pattern Panel',
    price: 139.99,
    originalPrice: 159.99,
    discount: 20,
    rating: 4.6,
    image: product5,
  },
  {
    id: 6,
    name: 'Modern Striped Panel',
    price: 119.99,
    rating: 4.3,
    image: product6,
  },
];

const GridContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  background: 'linear-gradient(135deg, #A9F1DF 0%, #FFBBBB 100%)',
  minHeight: '100vh',
}));

const ProductGrid = () => {
  return (
    <GridContainer>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured PVC Panels
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Discover our collection of amazing Panels
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sampleProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default ProductGrid; 