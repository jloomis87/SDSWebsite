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

    // Prevent body from scrolling beyond the viewport height
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset body styles when component unmounts
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      height: '100vh', // Constrain to viewport height
      width: '100%',
      overflow: 'hidden', // Prevent scrolling
      position: 'relative',
      pt: { xs: '220px', sm: '220px', md: '220px' } // Increased padding for all screen sizes
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: 'white',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(0,0,0,0.8))', // Gradient overlay
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
            backgroundPosition: 'center center',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            px: { xs: 2, sm: 3, md: 4 },
            mt: 0 // Set margin-top to 0
          }}
        >
          <Grid 
            container 
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ 
              textAlign: 'center',
              width: '100%',
              my: 'auto',
              transform: 'translateY(-40px)' // Pull content up slightly to center better visually
            }}
          >
            <Grid item xs={12} sx={{ 
              overflow: 'hidden', // No scrolling
              px: { xs: 0, sm: 1, md: 2 }, // Reduce padding to fit content
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}> 
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { 
                    xs: '1.75rem',  // Further reduced for mobile
                    sm: '2.75rem',  // Adjusted for tablet
                    md: '4rem'      // Original desktop size
                  },
                  lineHeight: { 
                    xs: 1.2,
                    sm: 1.3 
                  },
                  mb: { xs: 2, sm: 3 },
                  whiteSpace: 'normal', // Allow wrapping on all screen sizes
                  overflowWrap: 'break-word', // Ensure words break properly
                  maxWidth: '100%',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)', // Add text shadow
                  letterSpacing: '0.5px', // Slightly increase letter spacing
                  display: 'block', // Ensure block display
                  wordBreak: 'break-word' // Additional help for breaking words
                }}
              >
                Reliable Pharmaceutical Delivery
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: { xs: 3, sm: 4 },
                  fontSize: { 
                    xs: '1.1rem',
                    sm: '1.3rem',
                    md: '1.5rem'
                  },
                  lineHeight: 1.4,
                  maxWidth: '750px', // Wider container to prevent wrapping
                  mx: 'auto', // Center paragraph horizontally
                  textShadow: '0 1px 5px rgba(0,0,0,0.5)', // Add subtle text shadow
                  fontWeight: '500' // Slightly bolder text
                }}
              >
                Your trusted partner in Arizona for secure and timely pharmaceutical deliveries.
                Same-day service available across the state.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1, sm: 2 },
                flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons on mobile
                justifyContent: 'center', // Center buttons horizontally
                alignItems: 'center' // Center buttons vertically
              }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  onClick={() => navigate('/contact')}
                  fullWidth={false}
                  sx={{
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 3, sm: 4 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    minWidth: { xs: '200px', sm: 'auto' }
                  }}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/about')}
                  fullWidth={false}
                  sx={{ 
                    borderColor: 'white',
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 3, sm: 4 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    minWidth: { xs: '200px', sm: 'auto' },
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