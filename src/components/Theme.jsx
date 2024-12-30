import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      background: '#e5f4ff' // Define the primary main color here
    }
  }
})

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: 30,
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: 60
  }
}

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: 25,
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: 50
  }
}

theme.typography.h3 = {
  ...theme.typography.h2,
  fontSize: 20,
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: 30
  }
}

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontSize: 15,
  [theme.breakpoints.up('sm')]: {
    fontSize: 22
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: 'bold'
  }
}

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: 13,
  [theme.breakpoints.up('sm')]: {
    fontSize: 16
  }
}

theme.typography.body2 = {
  ...theme.typography.body2,
  fontSize: 11,
  [theme.breakpoints.up('sm')]: {
    fontSize: 14
  }
}

export default theme
