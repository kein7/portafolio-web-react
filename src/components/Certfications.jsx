import * as React from 'react'
import { AppBar, Box, Grid, Typography, Button, Link } from '@mui/material'
import gcpace from '../Img/gcpace.png'

export default function Certifications() {
  return (
    <Box
      id="certificaciones"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'column' },
        overflow: 'hidden',
        p: { xs: 4, md: 6 }
      }}
    >
      <Typography
        variant="h2"
        sx={{ pb: { xs: 4, md: 6 }, fontSize: { xs: 40, sm: 50, md: 60 } }}
      >
        Certificaciones
      </Typography>

      <Link
        href={
          'https://google.accredible.com/9ddf23e3-2b71-44e0-9052-cdf9a9d58d92'
        }
      >
        <Box
          component="img"
          sx={{
            height: 200,
            width: 200,
            maxHeight: { xs: 200, md: 400, lg: 500 },
            maxWidth: { xs: 200, md: 400, lg: 500 },
            
          }}
          src={gcpace}
          alt="gcpace"
        />
      </Link>
    </Box>
  )
}
