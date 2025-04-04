import React, { useState } from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';
import CardViewer from './CardViewer';

// Import product images
const productImages = {
  product1: new URL('../Assets/product-46.jpg', import.meta.url).href,
  product2: new URL('../Assets/product-33.jpg', import.meta.url).href,
  product3: new URL('../Assets/product-69.webp', import.meta.url).href,
  product4: new URL('../Assets/product-51.jpg', import.meta.url).href,
  product5: new URL('../Assets/product-58.jpg', import.meta.url).href,
  product6: new URL('../Assets/product-62.jpg', import.meta.url).href,
};

// Sample product data (replace with actual data from your backend)
const sampleProducts = [
  {
    id: 1,
    name: 'Modern PVC Panel Design',
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.5,
    image: productImages.product1,
    description: 'Modern PVC panel with sleek design and durable finish.'
  },
  {
    id: 2,
    name: 'Classic Wood Pattern Panel',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.8,
    image: productImages.product2,
    description: 'Classic wood pattern panel with authentic texture.'
  },
  {
    id: 3,
    name: 'Premium Marble Panel',
    price: 149.99,
    rating: 4.2,
    image: productImages.product3,
    description: 'Premium marble panel with elegant finish.'
  },
  {
    id: 4,
    name: 'Contemporary Panel Design',
    price: 129.99,
    rating: 4.0,
    image: productImages.product4,
    description: 'Contemporary panel design with modern aesthetics.'
  },
  {
    id: 5,
    name: 'Luxury Pattern Panel',
    price: 139.99,
    originalPrice: 159.99,
    discount: 20,
    rating: 4.6,
    image: productImages.product5,
    description: 'Luxury pattern panel with premium finish.'
  },
  {
    id: 6,
    name: 'Modern Striped Panel',
    price: 119.99,
    rating: 4.3,
    image: productImages.product6,
    description: 'Modern striped panel with contemporary design.'
  },
];

const GridContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  background: 'linear-gradient(135deg, #A9F1DF 0%, #FFBBBB 100%)',
  minHeight: '100vh',
}));

const ProductGrid = () => {
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
              <ProductCard product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </GridContainer>

      <CardViewer
        open={viewerOpen}
        onClose={handleCloseViewer}
        card={selectedCard}
        allCards={sampleProducts}
        category="products"
      />
    </>
  );
};

export default ProductGrid; 