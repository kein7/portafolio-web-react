import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ContactMeCard() {
  return (
    <Box
      sx={{
        m: { xs: 1, md: 2, lg: 2, xl: 2},
        mr: { xs: 1 },
        height: { xs: 100 },
        alignSelf: "center",
      }}
    >
      <Typography sx={{ mb: { xs: 0.5, md: 1 }, fontSize: { xs: 15 } }}>
        +569 82865568
      </Typography>
      <Typography sx={{ mb: { xs: 0.5, md: 1 }, fontSize: { xs: 15 } }}>
        Lunes a Viernes 8am a 6pm{" "}
      </Typography>
      <Typography sx={{ mb: { xs: 0.5, md: 1 }, fontSize: { xs: 15 } }}>
        k.orellana.moraga@gmail.cl
      </Typography>
    </Box>
  );
}
