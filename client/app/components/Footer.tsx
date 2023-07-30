"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "18rem",
        bgcolor: "primary.main",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Container>
        <Typography sx={{ color: "white" }}>
          Made with ❤️ by{" "}
          <Link
            href={"https://github.com/ipravek"}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Pk
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  );
}
