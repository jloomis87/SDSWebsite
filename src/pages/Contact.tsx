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
      alignItems: 'center',
      pt: '64px', // AppBar height
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
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          mb: 6
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
            Contact Us
          </Typography>
          <Divider sx={{ 
            width: '80px', 
            height: '4px', 
            backgroundColor: 'primary.main',
            mb: 4
          }} />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ 
              p: 6,
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              background: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <Box sx={{
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      p: 2,
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <PhoneIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary" sx={{ fontWeight: 500 }}>
                        Phone
                      </Typography>
                      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                        <a 
                          href="tel:+16238103539" 
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit'
                          }}
                        >
                          (623) 810-3539
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <Box sx={{
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      p: 2,
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <EmailIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary" sx={{ fontWeight: 500 }}>
                        Email
                      </Typography>
                      <Typography variant="h5" color="primary">
                        <a 
                          href="mailto:jploomis2002@gmail.com"
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit'
                          }}
                        >
                          jploomis2002@gmail.com
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <Box sx={{
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      p: 2,
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <AccessTimeIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary" sx={{ fontWeight: 500 }}>
                        Hours of Operation
                      </Typography>
                      <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 'medium' }}>
                        Available 24/7, 365 Days a Year
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                        We understand that medical deliveries can't wait. That's why we're available:
                      </Typography>
                      <Box sx={{ 
                        ml: 2,
                        borderLeft: 3,
                        borderColor: 'primary.main',
                        pl: 3
                      }}>
                        <Typography variant="body1" sx={{ mb: 1.5, color: 'text.primary' }}>
                          • Monday - Sunday: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1.5, color: 'text.primary' }}>
                          • Holidays: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1.5, color: 'text.primary' }}>
                          • Emergency Services: Always Available
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ 
                    mt: 4,
                    p: 3,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontWeight: 500
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