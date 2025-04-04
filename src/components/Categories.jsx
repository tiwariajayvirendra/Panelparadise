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
import CardViewer from './CardViewer';

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
};

// Create arrays of images for each category
const residentialImages = Object.values(productImages);
const commercialImages = Object.values(productImages);

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
  const [selectedCard, setSelectedCard] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedCard(null);
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
            <ProductCard product={product} onClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <>
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

      <CardViewer
        open={viewerOpen}
        onClose={handleCloseViewer}
        card={selectedCard}
        allCards={currentTab === 0 ? commercialProducts : residentialProducts}
        category={currentTab === 0 ? "commercial" : "residential"}
      />
    </>
  );
};

export default Categories; 