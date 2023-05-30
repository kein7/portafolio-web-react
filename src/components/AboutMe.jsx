import { Box, Typography } from "@mui/material";


export default function AboutMe() {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: { xs: "column", md: "column" },
      overflow: "hidden",
      p:8,
    }}>
      <Typography variant="h2" sx={{pb: 4}}>Sobre mi</Typography>
      <Typography variant="h4" sx={{pl: 15, pr: 15, pb: 5}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        erat commodo, viverra elit vel, blandit lacus.
      </Typography>
      <Typography variant="h5" sx={{pl: 8, pr: 8}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        erat commodo, viverra elit vel, blandit lacus. Loremamet, consectetur adipiscing elit. Mauris eget
        ert vel, blandit lacusLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        erat , viverra elit vel, bland dolor sit amet, consectetur adipiscing elit. Mauris eget
        erat commod elit vacus.Lorem ipsum dolor sitetur adipiscing elit. Mauris eget
        eratit vel, blandit lacus.
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
