"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#0e0e0e",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={roboto.className}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
            theme="light"
          />
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
