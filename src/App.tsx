import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
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
          boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
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

function NavigationMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path: string) => {
    setAnchorEl(null);
    navigate(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  if (isMobile) {
    return (
      <>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{
            ml: 2,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'primary.main',
              color: 'white',
              minWidth: '200px',
              mt: 5
            }
          }}
        >
          {menuItems.map((item) => (
            <MenuItem 
              key={item.path}
              onClick={() => handleMenuClick(item.path)}
              sx={{
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'grey.300'
                }
              }}
            >
              <Typography variant="body1">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {menuItems.map((item) => (
        <Button 
          key={item.path}
          color="inherit" 
          component={Link} 
          to={item.path}
          sx={{ 
            '&:hover': { 
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateY(-2px)',
              transition: 'transform 0.2s ease-in-out',
              color: 'grey.300'
            }
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  
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
          <AppBar 
            position="fixed" 
            elevation={0}
            sx={{ 
              background: 'linear-gradient(90deg, #0D47A1 0%, #1565C0 50%, #1976d2 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1100,
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '3px',
                width: '100%',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
                animation: 'shimmer 3s infinite linear',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' }
                },
                backgroundSize: '200% 100%'
              }
            }}
          >
            <Toolbar 
              sx={{ 
                minHeight: { xs: '200px', sm: '200px', md: '200px' },
                py: { xs: 2, sm: 2.5 },
                flexDirection: { xs: 'column', sm: isMedium ? 'column' : 'row' }, // Column layout for small and medium screens
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: isMedium ? 'center' : 'space-between' }, // Center on small/medium screens
                position: 'relative',
                transition: 'all 0.3s ease',
                mx: { xs: 1, sm: 2, md: 4 },
              }}
            >
              {/* Mobile Menu Button - Absolute positioned at top right */}
              {isMobile && (
                <Box sx={{
                  position: 'absolute',
                  top: 15,
                  right: 15,
                  zIndex: 5,
                  padding: '4px'
                }}>
                  <NavigationMenu />
                </Box>
              )}
              
              {/* Logo and Title Area */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <IconButton
                  component={Link}
                  to="/"
                  disableRipple={true}
                  sx={{ 
                    mr: { xs: 0, sm: 4 },
                    mb: { xs: 1, sm: 0 },
                    "&:hover": { 
                      backgroundColor: "transparent"
                    },
                    padding: 0
                  }}
                >
                  <Box>
                    <img 
                      src="/sds-logo.png" 
                      alt="SDS Logo" 
                      style={{ 
                        height: '160px',
                        width: 'auto' 
                      }} 
                    />
                  </Box>
                </IconButton>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: '700',
                    fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.5rem' },
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                    letterSpacing: '0.5px',
                    textAlign: { xs: 'center', sm: 'left' },
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Success Delivery Services
                </Typography>
              </Box>
              
              {/* Desktop Navigation - Now positioned below for medium screens and to the right for large screens */}
              {!isMobile && (
                <Box
                  sx={{
                    display: 'inline-flex',
                    borderRadius: '30px',
                    padding: '4px 8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    ml: 2,
                    mt: isMedium ? 2 : 0, // Add top margin for medium screens
                    '& .MuiButton-root': {
                      mx: 0.5,
                      borderRadius: '20px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                        boxShadow: 'none'
                      }
                    }
                  }}
                >
                  <NavigationMenu />
                </Box>
              )}
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
