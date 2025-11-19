import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image
          src="/Asset 1@4x.png"
          alt="Chaitanya Diagnostic Centre"
          width={150}
          height={50}
          style={{ marginRight: '16px' }}
        />
      </Box>
     <Button
  color="inherit"
  href="tel:+918499827825"
  sx={{
    color: '#000',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  }}
>
  <PhoneIcon sx={{ fontSize: 28 }} />

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: '#000',
      fontSize: {
        xs: '0.9rem',
        sm: '1rem',
        md: '1.1rem',
      },
      lineHeight: 1.2,
    }}
  >
    <Typography component="span" sx={{ fontWeight: 'bold' }}>
      +91 8499827825
    </Typography>
    <Typography component="span" sx={{ fontWeight: 'bold' }}>
      +91 9392872229
    </Typography>
  </Box>
</Button>



    </Toolbar>
  </Container>
</AppBar>

  );
};

export default Header;