import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-scroll'
import background from '../Img/nubes-background.png'
import logo from '../Img/kein7-logo.png'

export default function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#64B1EB',
        backgroundImage: `url(${background})`,
        backgroundRepeat: {
          xs: 'repeat-x',
          sm: 'repeat-x',
          md: 'repeat-x',
          lg: 'repeat-x'
        },
        backgroundPosition: {
          md: 'center',
          sm: '10% -15%',
          lg: '10% 25%',
          xs: '50% -120%'
        },
        backgroundSize: { xs: 300, sm: 500, md: 1300 }
      }}
    >
      <Toolbar sx={{ height: 20, ml: { sm: 0, md: 50 } }}>
        <Link to="/" spy={true} offset={-50} smooth={true} duration={500}>
          <Box
            component="img"
            sx={{
              height: { xs: 40, sm: 50, md: 60, lg: 70 },
              width: { xs: 70, sm: 90, md: 130, lg: 140 },
              ml: { xs: -2, sm: -1, md: 1, lg: 3 }
            }}
            src={logo}
          ></Box>
        </Link>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Box sx={{ mr: { xs: 5, md: 50 } }}>
          <Link
            to="timeline"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
          >
            <Button
              color="inherit"
              sx={{ fontSize: { xs: 11, sm: 13, md: 15 }, ml: { xs: -7 } }}
            >
              Inicio
            </Button>
          </Link>

          <Link
            to="proyectos"
            spy={true}
            offset={-60}
            smooth={true}
            duration={500}
          >
            <Button
              color="inherit"
              sx={{
                fontSize: { xs: 11, sm: 13, md: 15 },
                ml: { xs: -1.0, sm: 0.2, md: 0, lg: 0 }
              }}
            >
              Proyectos
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
