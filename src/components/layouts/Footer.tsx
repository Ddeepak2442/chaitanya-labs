'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Paper,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#F9C5D5',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Side Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Row 1 - Diagnostic Centre Name & Tagline */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'text.secondary' }}
            >
              Chaitanya Diagnostic Centre
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mb: 2, color: 'text.secondary' }}
            >
              Your trusted partner in health diagnostics with accurate results
              and compassionate care.
            </Typography>

            {/* Row 2 - Contact Information + Opening Hours side by side */}
            <Grid container spacing={4}>
              {/* Contact Info */}
           <Grid size={{ xs: 12, sm: 6 }}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{ fontWeight: 'bold', color: 'text.secondary' }}
  >
    Contact Information
  </Typography>

  {/* Address Line 1 */}
<Typography
  variant="body2"
  gutterBottom
  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
>
  <LocationOnIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
  Ground floor, Besides Musalamma Thalli temple, Door no:7-11, Main road,Opp. Dr Venkat Rao Gari Hospital, Indrapalem</Typography>

{/* Address Line 2 */}
<Typography
  variant="body2"
  gutterBottom
  sx={{ mb: 1, ml: '28px' }} 
>
   Kakinada, Andhra Pradesh 533006
</Typography>


  {/* Phone Numbers */}
  <Typography
    variant="body2"
    gutterBottom
    sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}
  >
    <PhoneIcon sx={{ fontSize: 20, color: 'text.secondary' }} />

    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Link
        href="tel:+918499827825"
        sx={{ color: 'text.secondary', textDecoration: 'none' }}
      >
        +91 8499827825
      </Link>

      <Link
        href="tel:+919392872229"
        sx={{ color: 'text.secondary', textDecoration: 'none' }}
      >
        +91 9392872229
      </Link>
    </Box>
  </Typography>

  {/* Email */}
  {/* <Typography
    variant="body2"
    gutterBottom
    sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}
  >
    <MailIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
    <Link
      href="mailto:info@chaitanyadiagnostic.com"
      sx={{ color: 'text.secondary', textDecoration: 'none' }}
    >
      info@chaitanyadiagnostic.com
    </Link>
  </Typography> */}
</Grid>


              {/* Opening Hours */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "text.secondary" }}
                >
                  Opening Hours
                </Typography>

               <Box display="flex" alignItems="flex-start" gap={1}>
  <AccessTimeIcon fontSize="small" sx={{ color: "text.secondary", mt: 0.1 }} />
  <Box>
    <Typography variant="body2" gutterBottom>
      Mon–Sun: 6 AM to 10 PM
    </Typography>
    <Typography variant="body2" gutterBottom>
      All days working
    </Typography>
  </Box>
</Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Side Location */}
        <Grid size={{ xs: 12, md: 4 }}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{ fontWeight: 'bold', color: 'text.secondary' }}
  >
    Our Location
  </Typography>

  <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3810125087763!2d82.2194889!3d16.9615575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3829c78fae4761%3A0xbad9e3bd2631abd0!2sChaitanya%20Diagnostic%20Centre%2C%20Indra%20Palem%2C%20Kakinada%2C%20Andhra%20Pradesh%20533006!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Chaitanya Diagnostic Centre Location"
    />
  </Paper>

  <Typography
    variant="body2"
    sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}
  >
    <Link
      href="https://www.google.com/maps/place/Chaitanya+Diagnostic+Centre/@16.9615575,82.216914,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3829c78fae4761:0xbad9e3bd2631abd0!8m2!3d16.9615575!4d82.2194889!16s%2Fg%2F11sfkcm21h?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: 'text.secondary', textDecoration: 'none' }}
    >
      Get Directions
    </Link>
  </Typography>
</Grid>

        </Grid>

        {/* Bottom Section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
  <Typography variant="body2" color="text.secondary">
    © {currentYear || ''} Made by Sarayu Technocraft
  </Typography>
</Box>
      </Container>
    </Box>
  );
};

export default Footer;