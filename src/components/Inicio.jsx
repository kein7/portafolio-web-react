import * as React from "react";
import { AppBar, Box, Grid, Typography, Button } from "@mui/material";
import inicioAvatar from "../assets/Img/inicioAvatar.jpg";
import background from "../assets/Img/portafolioBackground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const iconStyles = {
  color: "white",
  height: 50,
  width: 100,
};

const socialIcons = [
  { name: "Github", icon: faGithub, url: "https://github.com/kein7" },
  { name: "Instagram", icon: faInstagram, url: "" },
  {
    name: "Linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kevin-orellana-moraga-2884b1216/",
  },
];

export default function Inicio() {
  return (
    <div style={styles}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "column" },
          overflow: "hidden",
          p: 5,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 400,
            maxHeight: { xs: 400, md: 500 },
            maxWidth: { xs: 400, md: 500 },
            borderRadius: 100,
            mt: 3,
          }}
          src={inicioAvatar}
          alt="inicioAvatar"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "center" },
            mt: 5,
            mb: 3,
            minWidth: { xs: 200, md: 350 },
            color: "#EAEAEA",
            background: "rgb(0, 0, 0, 0.7)",
            borderRadius: 2,
            boxShadow: 7,
          }}
        >
          <Typography variant="h3" sx={{ opacity: 1 }}>
            Kevin Nicolás Orellana Moraga
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          {socialIcons.map((item, index) => (
            <a
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
            </a>
          ))}
        </Box>
      </Box>
    </div>
  );
}
