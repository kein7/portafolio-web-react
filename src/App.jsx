import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Theme'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <Box sx={{ mt: { xs: 6, md: 30 } }}></Box>
      <Timeline />
      <Projects />
      <Footer></Footer>
    </ThemeProvider>
  )
}
