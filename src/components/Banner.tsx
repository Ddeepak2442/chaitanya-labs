import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const Banner: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // ⏩ faster change (3s instead of 5s)

    return () => clearInterval(timer);
  }, []);

  const bannerContent = [
    {
      title: "Your Health, Our Priority",
      description: "Comprehensive health checkups with personalized care.",
      image: "/banner1.jpg",
    },
    {
      title: "Trusted Diagnostics, Accurate Results",
      description: "Advanced technology for precise health assessments.",
      image: "/banner2.jpg",
    },
    {
      title: "Caring for Your Wellbeing",
      description: "Expert staff dedicated to your health journey.",
      image: "/banner3.jpg",
    },
  ];

  return (
    <Paper
      square
      elevation={0}
      sx={{
        position: "relative",
        height: "500px",
        overflow: "hidden",
        borderRadius: 3,
        background: "transparent", // 🟢 remove bg color
      }}
    >
      {/* Animated background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // ⏩ faster fade (was 1s)
          style={{
            backgroundImage: `url(${bannerContent[activeStep].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </AnimatePresence>

      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="left"
          height="100%"
          color="common.white"
          
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            sx={{ lineHeight: 1.2 }}
          >
            {bannerContent[activeStep].title}
          </Typography>
          <Typography
            
            variant="h6"
            component="p"
            gutterBottom
            sx={{ mb: 4, maxWidth: "600px" }}
          >
            {bannerContent[activeStep].description}
          </Typography>
          {/* Pink button from theme */}
          {/* <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              boxShadow: 4,
            }}
          >
            Book an Appointment
          </Button> */}
        </Box>
      </Container>

      {/* Indicator dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
        }}
      >
        {bannerContent.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveStep(index)}
            style={{
              width: index === activeStep ? 14 : 10,
              height: index === activeStep ? 14 : 10,
              borderRadius: "50%",
              backgroundColor:
                index === activeStep ? "#FF70B5" : "rgba(255,255,255,0.5)", // 🟢 active dot = theme pink
              cursor: "pointer",
            }}
            animate={{
              scale: index === activeStep ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Banner;
