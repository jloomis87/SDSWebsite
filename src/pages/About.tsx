import { Box, Container, Grid, Paper, Typography, Button, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      pt: { xs: '100px', sm: '120px' }, // Adjusted for AppBar + spacing
    }}>
      {/* About Section */}
      <Box sx={{ 
        bgcolor: 'grey.100', 
        py: { xs: 6, sm: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, #1976d2 0%, #1976d2 50%, transparent 50%)',
          opacity: 0.1,
          zIndex: 0,
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 8
          }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                mb: 2
              }}
            >
              About Us
            </Typography>
            <Divider sx={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: 'primary.main',
              mb: 4
            }} />
            <Typography 
              variant="h5" 
              align="center" 
              paragraph 
              sx={{ 
                maxWidth: '800px',
                lineHeight: 1.8,
                color: 'text.primary',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                mb: 4
              }}
            >
              Success Delivery Services LLC is Arizona's premier pharmaceutical delivery service.
              We specialize in secure, reliable, and temperature-controlled delivery of medical supplies
              and pharmaceuticals across the state, with same-day delivery capabilities.
            </Typography>
            <Box sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              py: 3,
              px: 4,
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              mb: 4
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}
              >
                Available 24/7, 365 Days a Year
              </Typography>
            </Box>
            <Typography 
              variant="h6" 
              align="center" 
              sx={{ 
                fontStyle: 'italic',
                color: 'text.secondary'
              }}
            >
              Because healthcare never stops, neither do we.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
                Comprehensive Healthcare Delivery Solutions
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ 
                p: 4, 
                bgcolor: 'primary.main',
                color: 'white',
                height: '100%',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                  Medical Supplies
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  width: '100%'
                }}>
                  <Box component="li" sx={{ mb: 1.5 }}>• Pharmaceuticals and medications</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Medical tools and equipment</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Medical marijuana with proper documentation</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Temperature-sensitive medicines</Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ 
                p: 4, 
                bgcolor: 'primary.main',
                color: 'white',
                height: '100%',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                  Documentation & Supplies
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  width: '100%'
                }}>
                  <Box component="li" sx={{ mb: 1.5 }}>• Medical documentation and paperwork</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Healthcare facility supplies</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Laboratory materials</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Administrative supplies</Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ 
                p: 4, 
                bgcolor: 'primary.main',
                color: 'white',
                height: '100%',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                  Service Options
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  width: '100%'
                }}>
                  <Box component="li" sx={{ mb: 1.5 }}>• Same-day delivery service</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Scheduled deliveries</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Emergency rush delivery</Box>
                  <Box component="li" sx={{ mb: 1.5 }}>• Custom delivery solutions</Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'white', py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: { xs: 4, sm: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem' }
            }}
          >
            Our Core Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ 
                p: { xs: 3, sm: 4 }, 
                height: '100%', 
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <SecurityIcon color="primary" sx={{ fontSize: { xs: 40, sm: 48 }, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Secure Transport
                </Typography>
                <Typography>
                  State-of-the-art security measures ensuring safe delivery of sensitive medical supplies.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ 
                p: { xs: 3, sm: 4 }, 
                height: '100%', 
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <SpeedIcon color="primary" sx={{ fontSize: { xs: 40, sm: 48 }, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Fast Delivery
                </Typography>
                <Typography>
                  Rapid response times and efficient delivery routes across Arizona.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ 
                p: { xs: 3, sm: 4 }, 
                height: '100%', 
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <LocalShippingIcon color="primary" sx={{ fontSize: { xs: 40, sm: 48 }, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Temperature Control
                </Typography>
                <Typography>
                  Climate-controlled vehicles maintaining proper conditions for pharmaceuticals.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Contact us today to learn more about our services or to schedule a delivery.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              minWidth: { xs: '200px', sm: '250px' }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
} 