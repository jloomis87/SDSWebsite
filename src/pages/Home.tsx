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
            pt: { xs: '80px', sm: '64px' }, // Adjusted for mobile
            px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { 
                    xs: '2.5rem',  // Smaller font on mobile
                    sm: '3.5rem',  // Medium size on tablet
                    md: '4rem'     // Full size on desktop
                  },
                  lineHeight: { 
                    xs: 1.2,      // Tighter line height on mobile
                    sm: 1.3 
                  },
                  wordBreak: 'break-word', // Prevents overflow
                  mb: { xs: 2, sm: 3 }     // Adjusted spacing
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
                  maxWidth: '600px' // Prevents lines from getting too long
                }}
              >
                Your trusted partner in Arizona for secure and timely pharmaceutical deliveries.
                Same-day service available across the state.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1, sm: 2 },
                flexDirection: { xs: 'column', sm: 'row' } // Stack buttons on mobile
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