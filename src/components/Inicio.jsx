import * as React from "react";
import { AppBar, Box, Grid, Typography, Button, Link } from "@mui/material";
import inicioAvatar from "../Img/inicioAvatar.jpg";
import background from "../Img/portafolioBackground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { name: "Github", icon: faGithub, url: "https://github.com/kein7" },
  { name: "Instagram", icon: faInstagram, url: "" },
  {
    name: "Linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kevin-orellana-moraga-2884b1216/",
  },
];

const iconStyles = {
  height: "20%",
  width: "16%",
  color: "white",
};

export default function Inicio() {
  return (
    <Box
      sx={{
        mt: 5,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs: "10% 40%" },
      }}
    >
      <Box
        id="inicio"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "column" },
          p: 5,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 500,
            width: 500,
            maxHeight: { xs: 200, md: 400, lg: 500 },
            maxWidth: { xs: 200, md: 400, lg: 500 },
            borderRadius: 100,
            mt: 2,
          }}
          src={inicioAvatar}
          alt="inicioAvatar"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "center" },
            mt: 4,
            mb: 3,
            minWidth: { xs: 250, md: 350 },
            color: "#EAEAEA",
            background: "rgb(0, 0, 0, 0.7)",
            borderRadius: 2,
            boxShadow: 7,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ opacity: 1, fontSize: { xs: 35, md: 50, lg: 60 } }}
          >
            Kevin Nicolás Orellana Moraga
          </Typography>
        </Box>
        <Box
          align="center"
          sx={{
            display: "flex",
            pt: { xs: 0, md: 1, lg: 3 },
            alignItems: "center",
          }}
        >
          {socialIcons.map((item, index) => (
            <Box sx={{}} key={index}>
              <Link
                href={item.url}
                target="_blank"
                rel="nooponer noreferrer"
                aria-label={item.name}
                key={index}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  key={index}
                  style={iconStyles}
                />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
