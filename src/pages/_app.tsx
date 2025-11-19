// pages/_app.tsx


import "@/styles/globals.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Define the routes where Layout (header/footer) is not needed
  const noLayoutRoutes = [
    "/",
   
  ];

  const shouldUseLayout = !noLayoutRoutes.includes(router.pathname);

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FF70B5", // Primary Pink
        contrastText: "#FFFFFF", // White text for better contrast
      },
      secondary: {
        main: "#7BBDB2", // Muted Teal / Sage Green
      },
      background: {
        default: "#FFFFFF", // Neutral Base
        paper: "#F0F4F7", // Light Cool Grey
      },
      text: {
        primary: "#3B424C", // Charcoal Blue-Grey
        secondary: "#3B424C", // Same for secondary text
      },
      divider: "#F0F4F7", // Light Cool Grey for dividers
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Disable uppercase by default
            borderRadius: 8, // Optional: consistent rounded buttons
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              color: "#FFFFFF", // White text on primary buttons
            },
          },
        ],
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF", // White AppBar
            color: "#3B424C", // Charcoal Blue-Grey text/icons
            boxShadow: "none", // Optional: remove shadow for minimal design
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#F0F4F7", // Light grey background for cards
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // Subtle shadow
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#3B424C", // Default typography color
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {shouldUseLayout ? (
        <Component {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
