import { Box, Container, Typography, Paper, Grid, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Contact() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: 'grey.50',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: { xs: 'flex-start', md: 'center' },
      pt: { xs: '100px', sm: '120px' },
      pb: { xs: 4, md: 0 },
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
      <Container maxWidth="lg" sx={{ 
        py: { xs: 2, sm: 4, md: 8 }, 
        position: 'relative', 
        zIndex: 1 
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          mb: { xs: 3, sm: 4, md: 6 }
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            align="center" 
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              mb: { xs: 1, sm: 2 }
            }}
          >
            Contact Us
          </Typography>
          <Divider sx={{ 
            width: '80px', 
            height: '4px', 
            backgroundColor: 'primary.main',
            mb: { xs: 2, sm: 3, md: 4 }
          }} />
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: 2, md: 4 },
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              background: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                {/* Phone Section */}
                <Grid item xs={12}>
                  <a 
                    href="tel:+16238103539"
                    style={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block'
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'all 0.2s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        '& .phone-icon-box': {
                          bgcolor: 'primary.dark',
                        },
                        '& .phone-number': {
                          color: 'primary.dark',
                        }
                      }
                    }}>
                      <Box 
                        className="phone-icon-box"
                        sx={{
                          bgcolor: 'primary.main',
                          borderRadius: 2,
                          p: { xs: 1, sm: 1.5 },
                          mr: { xs: 1.5, sm: 2 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: { xs: 24, sm: 32 }, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom color="text.secondary" sx={{ 
                          fontWeight: 500,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          mb: 0.5
                        }}>
                          Phone
                        </Typography>
                        <Typography 
                          variant="h4" 
                          className="phone-number"
                          sx={{ 
                            fontWeight: 'bold',
                            color: 'primary.main',
                            transition: 'color 0.2s',
                            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                          }}
                        >
                          (623) 810-3539
                        </Typography>
                      </Box>
                    </Box>
                  </a>
                </Grid>

                {/* Email Section */}
                <Grid item xs={12}>
                  <a 
                    href="mailto:jploomis2002@gmail.com"
                    style={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block'
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'all 0.2s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        '& .email-icon-box': {
                          bgcolor: 'primary.dark',
                        },
                        '& .email-text': {
                          color: 'primary.dark',
                        }
                      }
                    }}>
                      <Box 
                        className="email-icon-box"
                        sx={{
                          bgcolor: 'primary.main',
                          borderRadius: 2,
                          p: { xs: 1, sm: 1.5 },
                          mr: { xs: 1.5, sm: 2 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        <EmailIcon sx={{ fontSize: { xs: 24, sm: 32 }, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom color="text.secondary" sx={{ 
                          fontWeight: 500,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          mb: 0.5
                        }}>
                          Email
                        </Typography>
                        <Typography 
                          variant="h5" 
                          className="email-text"
                          sx={{ 
                            fontWeight: 'bold',
                            color: 'primary.main',
                            transition: 'color 0.2s',
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                            wordBreak: 'break-word'
                          }}
                        >
                          jploomis2002@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                  </a>
                </Grid>

                {/* Hours Section */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start'
                  }}>
                    <Box sx={{
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      p: { xs: 1, sm: 1.5 },
                      mr: { xs: 1.5, sm: 2 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <AccessTimeIcon sx={{ fontSize: { xs: 24, sm: 32 }, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary" sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        mb: 0.5
                      }}>
                        Hours of Operation
                      </Typography>
                      <Typography variant="h5" color="primary" sx={{ 
                        mb: 1, 
                        fontWeight: 'medium',
                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                      }}>
                        Available 24/7, 365 Days a Year
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        mb: 1, 
                        color: 'text.secondary',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}>
                        We understand that medical deliveries can't wait. That's why we're available:
                      </Typography>
                      <Box sx={{ 
                        ml: { xs: 1, sm: 2 },
                        borderLeft: 2,
                        borderColor: 'primary.main',
                        pl: { xs: 1.5, sm: 2 }
                      }}>
                        <Typography variant="body1" sx={{ 
                          mb: 0.5, 
                          color: 'text.primary',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}>
                          • Monday - Sunday: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ 
                          mb: 0.5, 
                          color: 'text.primary',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}>
                          • Holidays: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ 
                          mb: 0.5, 
                          color: 'text.primary',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}>
                          • Emergency Services: Always Available
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Call to Action */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    mt: { xs: 1, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      For urgent medical deliveries, please call us directly for immediate assistance.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 