import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

export default function About() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      pt: '64px', // Account for AppBar
    }}>
      {/* About Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            About Us
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Success Delivery Services LLC is Arizona's premier pharmaceutical delivery service.
            We specialize in secure, reliable, and temperature-controlled delivery of medical supplies
            and pharmaceuticals across the state, with same-day delivery capabilities.
          </Typography>
          <Typography variant="h5" align="center" color="primary" sx={{ mt: 3, fontWeight: 'bold' }}>
            Available 24/7, 365 Days a Year
          </Typography>
          <Typography variant="h6" align="center" sx={{ mt: 1, mb: 4 }}>
            Because healthcare never stops, neither do we.
          </Typography>

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
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Core Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <SecurityIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Secure Transport
                </Typography>
                <Typography>
                  State-of-the-art security measures ensuring safe delivery of sensitive medical supplies.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <SpeedIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Fast Delivery
                </Typography>
                <Typography>
                  Rapid response times and efficient delivery routes across Arizona.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <LocalShippingIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
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
    </Box>
  );
} 