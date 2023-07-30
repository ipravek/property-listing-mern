"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          sx={{
            p: { lg: 0 },
            display: "flex",
            height: {
              lg: "4.3rem",
              sm: "3rem",
              xs: "3rem",
            },
            width: "100%",
            bgcolor: "primary.main",
            transition: "all 1s",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 0 }}>
            Property Finder
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
