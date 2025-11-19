import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Avatar,
} from '@mui/material';
import AccuracyIcon from '@mui/icons-material/Verified';
import TrustIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CareIcon from '@mui/icons-material/Favorite';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <AccuracyIcon sx={{ fontSize: 40 }} />,
      title: 'Accurate Results',
      description: 'State-of-the-art equipment and certified technicians ensure precise diagnostic results you can trust.',
    },
    {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Home Sample Collection',
    description:
      'We provide convenient home sample collection by trained professionals—saving your time and ensuring a comfortable experience.',
  },
    {
      icon: <CareIcon sx={{ fontSize: 40 }} />,
      title: 'Patient Care',
      description: 'Compassionate service with comfortable facilities and personalized attention to every patient.',
    },
  ];

  return (
    <Box sx={{ my: 6, py: 4, backgroundColor: '#FEE3EC', borderRadius: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          Why Choose Chaitanya Diagnostic Lab?
        </Typography>
        <Typography variant="h6" component="p" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          With over 5 years of excellence in diagnostic services, we have been the trusted choice for thousands of families.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      margin: '0 auto 16px',
                      backgroundColor: '#F9C5D5',
                      color: 'primary.dark',
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;