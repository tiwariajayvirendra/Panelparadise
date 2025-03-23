import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Alert,
  IconButton,
  Link,
  styled
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  marginTop: theme.spacing(2),
}));

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }

    // Get existing messages from localStorage
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    // Add new message with timestamp
    const newMessage = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    
    // Save to localStorage
    localStorage.setItem('contactMessages', JSON.stringify([...existingMessages, newMessage]));
    
    // Show success message
    setStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = {
    address: 'B-111, Vishwakarma Colony, Nr. Sab Ki Rasoi, Pul Prahladpur, Delhi - 110044',
    phone: '7048308107 , 011-45510542',
    email: 'nikhil.singh@panelparadise.com',
    whatsapp: '7048308107',
    social: {
      facebook: 'https://facebook.com/panelparadise',
      twitter: 'https://twitter.com/panelparadise',
      instagram: 'https://instagram.com/panelparadise',
    },
    map: {
      lat: 28.4993, // Delhi latitude
      lng: 77.2866, // Delhi longitude
      zoom: 15,
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        About Us
      </Typography>

      <Grid container spacing={4}>
        {/* Company Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Welcome to Panel Paradise
            </Typography>
            <Typography paragraph>
              We are your premier destination for high-quality furniture solutions. With years of experience
              in the industry, we pride ourselves on offering the finest selection of furniture for both
              commercial and residential spaces.
            </Typography>
            <Typography paragraph>
              Our commitment to quality, customer satisfaction, and innovative design has made us a
              trusted name in the furniture industry. We believe in creating spaces that inspire and
              transform lives.
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon color="primary" />
                <Typography>{contactInfo.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Link href={`tel:${contactInfo.phone}`} underline="hover">
                  {contactInfo.phone}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Link href={`mailto:${contactInfo.email}`} underline="hover">
                  {contactInfo.email}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsAppIcon color="primary" />
                <Link href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" underline="hover">
                  WhatsApp: {contactInfo.whatsapp}
                </Link>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                component="a"
                href={contactInfo.social.facebook}
                target="_blank"
                color="primary"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={contactInfo.social.twitter}
                target="_blank"
                color="primary"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href={contactInfo.social.instagram}
                target="_blank"
                color="primary"
              >
                <InstagramIcon />
              </IconButton>
            </Box>

            {/* Map */}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Our Location
            </Typography>
            <MapContainer>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.8473423619807!2d77.28663787408831!3d28.499317890120167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce726dda24373%3A0x65006e50c3de628!2sPanel%20Paradise!5e1!3m2!1sen!2sin!4v1742626701460!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12}>
          <ContactForm elevation={3}>
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            
            {status.message && (
              <Alert severity={status.type} sx={{ mb: 2 }}>
                {status.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone (optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </ContactForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 