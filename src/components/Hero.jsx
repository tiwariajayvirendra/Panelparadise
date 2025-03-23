import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  styled
} from '@mui/material';
import { ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #BFF098 0%, #6FD6FF 100%)',
  overflow: 'hidden',
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

const HeroContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FeatureIcon = styled(ShoppingBagIcon)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Panel Paradise
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Discover Amazing PVC Panels at Great Prices
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Shop Now
          </Button>
        </HeroContent>
      </HeroContainer>

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <FeatureIcon />
              <Typography variant="h6" gutterBottom>
                Wide Selection
              </Typography>
              <Typography>
                Browse through our extensive collection of panels
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <FeatureIcon />
              <Typography variant="h6" gutterBottom>
                
              </Typography>
              <Typography>
                 
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <FeatureIcon />
              <Typography variant="h6" gutterBottom>
                Secure Payment
              </Typography>
              <Typography>
                Shop with confidence with our secure payment options
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero; 