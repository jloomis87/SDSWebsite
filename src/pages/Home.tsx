import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: 0,
            right: 0,
            bottom: -100,
            backgroundImage: 'url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600")',
            backgroundSize: 'cover',
            backgroundPosition: `center ${scrollPosition * 0.5}px`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            zIndex: 0,
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            pt: '64px', // AppBar height
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Reliable Pharmaceutical Delivery
              </Typography>
              <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                Your trusted partner in Arizona for secure and timely pharmaceutical deliveries.
                Same-day service available across the state.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/about')}
                  sx={{ 
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 