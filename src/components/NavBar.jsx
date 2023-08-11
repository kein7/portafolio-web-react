import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
import background from "../Img/nubes-background.png";
import logo from "../Img/kein7-logo.png";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "#64B1EB",
          backgroundImage: `url(${background})`,
          backgroundRepeat: {
            md: "no-repeat",
            sm: "repeat-x",
            lg: "no-repeat",
            xs: "repeat-x",
          },
          backgroundPosition: {
            md: "center",
            sm: "10% -15%",
            lg: "center",
            xs: "50% -120%",
          },
          backgroundSize: { xs: 300, sm: 500, md: 1300 },
        }}
      >
        <Toolbar sx={{ height: 20 }}>
          <Box
            component="img"
            sx={{
              height: { xs: 70, sm: 100, md: 130, lg: 200 },
              width: { xs: 80, sm: 100, md: 130, lg: 200 },
              ml: { xs: -3, sm: -1, md: 1, lg: 3 },
            }}
            src={logo}
          ></Box>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Link to="inicio" spy={true} offset={-50} smooth={true} duration={500}>
            <Button
              color="inherit"
              sx={{ fontSize: { xs: 11, sm: 13,md:15 }, ml: { xs: -2.8 } }}
            >
              Inicio
            </Button>
          </Link>
          <Link to="sobre-mi" spy={true} offset={-50} smooth={true} duration={600}>
            <Button
              color="inherit"
              sx={{
                fontSize: { xs: 11, sm: 13,md:15 },
                ml: { xs: -2.5, sm: 0, md: 0, lg: 0 },
              }}
            >
              Acerca de mi
            </Button>
          </Link>
          <Link to="repositorios" spy={true} offset={-60} smooth={true} duration={500}>
            <Button
              color="inherit"
              sx={{
                fontSize: { xs: 11, sm: 13, md:15 },
                ml: { xs: -1.5, sm: 0.2 , md: 0, lg: 0 },
              }}
            >
              Repositorios
            </Button>
          </Link>

          <Link
            to="contactame"
            spy={true}
            smooth={true}
            duration={550}
            offset={-80} 
          >
            <Button
              color="inherit"
              sx={{
                fontSize: { xs: 11, sm: 13,md:15 },
                ml: { xs: -1.5, sm: 0.2 ,md: 0 },
                mr: { md: -1, lg: -1 },
              }}
            >
              Contacto
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
