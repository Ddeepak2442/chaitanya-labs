import React from 'react';
import { Container, Box } from '@mui/material';
import Header from '../components/layouts/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
// import SearchBar from '../components/SearchBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/layouts/Footer';

const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Services />
          {/* <SearchBar /> */}
          <WhyChooseUs />
          <Testimonials />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;