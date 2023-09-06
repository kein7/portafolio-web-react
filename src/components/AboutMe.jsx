import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      id="sobre-mi"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "column" },
        overflow: "hidden",
        p: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h2"
        sx={{ pb: { xs: 4, md: 6 }, fontSize: { xs: 45, sm: 50, md: 60 } }}
      >
        Sobre mi
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        sx={{
          pl: { xs: 2, md: 30 },
          pr: { xs: 2, md: 30 },
          pb: { xs: 4, md: 5 },
          alignItems: "center",
          fontSize: { xs: 25, md: 34 },
        }}
      >
        Estudiante de Ingenieria en Informatica de la Universidad Diego Portales y 
        apasionado del mundo digital y la tecnologia
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
        sx={{
          pl: { xs: 2, md: 15 },
          pr: { xs: 2, md: 15 },
          fontSize: { xs: 18, md: 22 },
        }}
      >
        Experiencia en desarrollo web y desktop con el uso de tecnologias como 
        ReactJS, NodeJS y C# .Net framework.
        Automatización de tareas con python y manejo de SQL 
      </Typography>
    </Box>
  );
}

/*
export default function AboutMe() {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Box
            component="img"
            sx={{
              height: 700,
              width: 550,
              maxHeight: { xs: 350, md: 700 },
              maxWidth: { xs: 250, md: 600 },
              mt: { xs: 4, md: 8 },
              ml: { xs: 4, md: 20 },
            }}
            src={sobreMi}
            alt="sobreMiImagen"
          />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs>
            <Typography variant="h5">Sobre mi</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget erat commodo, viverra elit vel, blandit lacus. 
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
*/
