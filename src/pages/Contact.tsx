import { Box, Container, Typography, Paper, Grid } from '@mui/material';
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
    }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ 
              p: 4,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon color="primary" sx={{ fontSize: 40, mr: 3 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary">
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon color="primary" sx={{ fontSize: 40, mr: 3 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary">
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
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTimeIcon color="primary" sx={{ fontSize: 40, mr: 3, mt: 1 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom color="text.secondary">
                        Hours of Operation
                      </Typography>
                      <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 'medium' }}>
                        Available 24/7, 365 Days a Year
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        We understand that medical deliveries can't wait. That's why we're available:
                      </Typography>
                      <Box sx={{ 
                        ml: 2,
                        borderLeft: 2,
                        borderColor: 'primary.main',
                        pl: 2
                      }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                          • Monday - Sunday: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                          • Holidays: 24 Hours
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                          • Emergency Services: Always Available
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography 
                    variant="body1" 
                    align="center" 
                    sx={{ 
                      mt: 4,
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      bgcolor: 'grey.50',
                      py: 2,
                      borderRadius: 1
                    }}
                  >
                    For urgent medical deliveries, please call us directly for immediate assistance.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 