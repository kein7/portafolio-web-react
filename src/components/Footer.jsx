import * as React from "react";
import { Container, Box, Typography } from "@mui/material";

import background from "../assets/Img/nubes-background.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#64B1EB",
        height: {xs: 50, md:70},
        backgroundImage: `url(${background})`,
        backgroundPositionY: 1000
      }}
    >
      <Typography align="center" sx={{fontSize: {xs:12,sm: 15 , md: 15}, m:{xs:1, sm:1.5, md: 3},}}>
        Derechos de autor ©{year}. Todos los derechos reservados
      </Typography>
    </Box>
  );
}
