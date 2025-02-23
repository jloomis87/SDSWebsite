import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton
} from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '8px 16px',
        },
      },
    },
  },
});

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="slide"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh',
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <AppBar position="fixed">
            <Toolbar sx={{ minHeight: { xs: '70px', sm: '80px' }, py: 1 }}>
              <IconButton
                component={Link}
                to="/"
                sx={{ 
                  mr: 2,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out'
                  }
                }}
              >
                <MedicalServicesIcon sx={{ 
                  fontSize: { xs: 35, sm: 40 },
                  color: 'white',
                }} />
              </IconButton>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.5px'
                }}
              >
                Success Delivery Services
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/"
                  sx={{ 
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}
                >
                  Home
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/about"
                  sx={{ 
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}
                >
                  About
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/contact"
                  sx={{ 
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Box component="main">
            <AnimatedRoutes />
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
