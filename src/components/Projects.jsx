import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  CardMedia,
  Card
} from '@mui/material'
import { styled } from '@mui/system'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import gcpLogo from '../Img/gcp-logo.png'
import githubLogo from '../Img/Github-logo.png'
import alloydbLogo from '../Img/alloydb_logo.png'
import gkeLogo from '../Img/gke_logo.png'
import goLogo from '../Img/go-logo.png'
import kubernetesLogo from '../Img/Kubernetes_logo.png'
import memorystore from '../Img/Memorystore_logo.png'
import postgresqlLogo from '../Img/Postgresql_logo.png'
import skaffoldLogo from '../Img/skaffold-logo.png'

const carouselItems = [
  {
    id: 1,
    title: 'Plataforma e-commerce microservicios en Cloud',
    description:
      'En este proyecto quise diseñar e implementar un prototipo de plataforma e-commerce escalable y ' +
      'con alta disponibilidad considerando el rol protagonico que poseen en la economía global, ' +
      'ofreciendo la oportunidad a las empresas de todos los tamaños y sin importar en donde se encuentren, ' +
      'la posibilidad de llegar a todo el mundo si así lo desean.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    tecnologias: [
      gcpLogo,
      alloydbLogo,
      gkeLogo,
      goLogo,
      kubernetesLogo,
      memorystore,
      postgresqlLogo,
      skaffoldLogo
    ],
    video: '3b7PwT3fZOI?si=s0BTU2KOVb6Hwu8Y'
  },
  {
    id: 2,
    title: 'Beach Paradise',
    description: 'Relax on pristine sandy beaches',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    tecnologias: []
  },
  {
    id: 3,
    title: 'Urban Experience',
    description: 'Discover vibrant city life and culture',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    tecnologias: []
  }
]

const YouTubeVideo = ({ videoId }) => {
  return (
    <Card sx={{ height: { xs: 220, lg: 280 }, width: { xs: 'auto', lg: 460 } }}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{ height: { xs: 220, lg: 280 }, width: { xs: 'auto', lg: 460 } }}
      />
    </Card>
  )
}

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '80%',
  maxWidth: '1000px',
  margin: '0 auto',
  justifyContent: 'center', // Center items horizontally
  alignItems: 'center', // Center items vertically
  height: '500px', // Ensure the container has enough height
  background: '#4887B7',
  borderRadius: 20,
  [theme.breakpoints.down('sm')]: { width: '90%', height: '580px' }
}))

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  zIndex: 1
}))

const CarouselItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '78%',
  height: '80%',
  position: 'relative',
  transition: 'transform 0.5s ease-in-out',
  background: 'white',
  borderRadius: 16,
  padding: 20,
  [theme.breakpoints.down('sm')]: { width: '85%', height: '90%', padding: 15 }
}))

const CarouselTechImgContainer = styled(Box)(({ theme }) => ({
  marginTop: 15,
  [theme.breakpoints.up('sm')]: {}
}))

export default function Projects() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <Box id="proyectos" sx={{ mt: { xs: 2, md: 10 } }}>
      <Typography align="center" variant="h2" sx={{ mb: { xs: 3, md: 10 } }}>
        Proyectos
      </Typography>
      <CarouselContainer align="center">
        <NavigationButton
          onClick={handlePrevious}
          sx={{ left: 16 }}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={24} />
        </NavigationButton>

        <NavigationButton
          onClick={handleNext}
          sx={{ right: 16 }}
          aria-label="Next slide"
        >
          <FiChevronRight size={24} />
        </NavigationButton>
        {isSm ? (
          <CarouselItem>
            <Typography variant="h3" sx={{ mb: 2 }}>
              {carouselItems[currentIndex].title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {carouselItems[currentIndex].description}
            </Typography>

            <YouTubeVideo videoId={carouselItems[currentIndex].video} />

            <CarouselTechImgContainer>
              {carouselItems[currentIndex].tecnologias.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 30, // Set the desired width
                    height: 30, // Set the desired height
                    padding: 0,
                    m: 1,
                    [theme.breakpoints.up('sm')]: {
                      width: 40, // Set the desired width
                      height: 40,
                      m: 2
                    }
                  }}
                >
                  <Box
                    key={index}
                    component="img"
                    src={item}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  ></Box>
                </IconButton>
              ))}
            </CarouselTechImgContainer>
          </CarouselItem>
        ) : (
          <CarouselItem>
            <Typography variant="h3" sx={{ mb: 3 }}>
              {carouselItems[currentIndex].title}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <YouTubeVideo videoId={carouselItems[currentIndex].video} />
              <Typography
                align="left"
                variant="body1"
                sx={{ width: 300, p: 2 }}
              >
                {carouselItems[currentIndex].description}
              </Typography>
            </Box>
            <CarouselTechImgContainer>
              {carouselItems[currentIndex].tecnologias.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40, // Set the desired width
                    height: 40, // Set the desired height
                    padding: 0,
                    ml: 2,
                    [theme.breakpoints.down('sm')]: {
                      height: 30,
                      width: 30,
                      ml: 1
                    }
                  }}
                >
                  <Box
                    key={index}
                    component="img"
                    src={item}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  ></Box>
                </IconButton>
              ))}
            </CarouselTechImgContainer>
          </CarouselItem>
        )}
      </CarouselContainer>
    </Box>
  )
}
