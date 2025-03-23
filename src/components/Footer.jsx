import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[200],
        p: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are dedicated to providing the finest PVC Panels for both commercial and residential spaces.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              B-111, Vishwakarma Colony, Nr. Sab Ki Rasoi,
              <br />
              Pul Prahladpur, Delhi - 110044
              <br />
              Email: nikhil.singh@panelparadise.com
              <br />
              Phone: +91 7048308107 , 011-45510542
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              Twitter
            </Link>
            <Link href="#" color="inherit">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.panelparadise.com">
              www.panelparadise.com
            </Link>{' '} 
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  ); 
};

export default Footer; 