import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Contact from './pages/Contact';

// Move all the home page content to Home component
function Home() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
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
                sx={{ 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Reliable Pharmaceutical Delivery
              </Typography>
              <Typography 
                variant="h5" 
                paragraph
                sx={{ 
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Your trusted partner in Arizona for secure and timely pharmaceutical deliveries.
                Same-day service available across the state.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ 
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <SecurityIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Secure Transport
              </Typography>
              <Typography>
                State-of-the-art security measures ensuring safe delivery of sensitive medical supplies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <SpeedIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Fast Delivery
              </Typography>
              <Typography>
                Rapid response times and efficient delivery routes across Arizona.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <LocalShippingIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
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
            <Grid item xs={12}>
              <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                All deliveries are handled with strict adherence to security protocols, temperature control requirements,
                and compliance with Arizona state regulations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Success Delivery Services LLC
              </Typography>
              <Typography variant="body2">
                Your trusted pharmaceutical delivery partner in Arizona
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Email: jploomis2022@gmail.com<br />
                Phone: (623) 810-3539
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

function App() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          padding: 0
        }}>
          <AppBar 
            position="fixed" 
            color="primary" 
            elevation={trigger ? 4 : 0}
            sx={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1100,
            }}
          >
            <Toolbar sx={{ minHeight: '64px' }}>
              <LocalShippingIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                Success Delivery Services LLC
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
          </AppBar>

          <Box sx={{ 
            width: '100%',
            margin: 0,
            padding: 0,
            flexGrow: 1,
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
