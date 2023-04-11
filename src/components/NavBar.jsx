import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography sx={{ flexGrow: 1 }} ></Typography>
        <Button color="inherit">Inicio</Button>  
        <Button color="inherit">Acerca de mi</Button>
        <Button color="inherit">Proyectos</Button>
        <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}