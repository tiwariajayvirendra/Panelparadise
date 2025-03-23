import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Paper,
  styled
} from '@mui/material';
import ProductCard from './ProductCard';

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

// Create arrays of images for each category
const residentialImages = [
  product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15, product16, product17, product18, product19, product20
];

const commercialImages = [
  product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15, product16, product17, product18, product19, product20
];

// Generate sample products for each category
const generateCategoryProducts = (category, images) => {
  return images.map((image, index) => {
    const hasDiscount = Math.random() > 0.5;
    const originalPrice = Math.floor(Math.random() * 900) + 100;
    const discount = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0;
    const price = hasDiscount 
      ? Math.floor(originalPrice * (1 - discount / 100)) 
      : originalPrice;

    return {
      id: `${category}-${index + 1}`,
      name: `${category} Panel Design ${index + 1}`,
      price,
      originalPrice: hasDiscount ? originalPrice : null,
      discount: hasDiscount ? discount : null,
      rating: (Math.random() * 2 + 3).toFixed(1),
      image: image,
    };
  });
};

const CategoryHero = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Categories = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [commercialProducts] = useState(generateCategoryProducts('commercial', commercialImages));
  const [residentialProducts] = useState(generateCategoryProducts('residential', residentialImages));

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderCategoryContent = (products, title, description) => (
    <>
      <CategoryHero
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/random/1600x900?${title.toLowerCase()},interior)`
        }}
      >
        <Box sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" paragraph>
            {description}
          </Typography>
        </Box>
      </CategoryHero>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      pt: 8 // Add padding top to account for navbar
    }}>
      <Container maxWidth="xl">
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          mb: 4,
          backgroundColor: 'white',
          position: 'sticky',
          top: 64,
          zIndex: 1,
          py: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 500,
                minWidth: 120,
                textTransform: 'none'
              }
            }}
          >
            <Tab label="Commercial" />
            <Tab label="Residential" />
          </Tabs>
        </Box>

        <Box sx={{ mt: 4, pb: 6 }}>
          {currentTab === 0 && renderCategoryContent(
            commercialProducts,
            "Commercial Solutions",
            "Professional grade products for your business needs"
          )}
          
          {currentTab === 1 && renderCategoryContent(
            residentialProducts,
            "Residential Collection",
            "Transform your home with our curated selection"
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories; 