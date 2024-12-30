import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  List,
  ListItem
} from '@mui/material'
import { margin, styled } from '@mui/system'
import { FaCircle } from 'react-icons/fa'
import inicioAvatar from '../Img/inicioAvatar.jpg'
import linkedinLogo from '../Img/linkedin-logo.png'
import githubLogo from '../Img/Github-logo.png'
import youtubeLogo from '../Img/Youtube_logo.png'
import udpLogo from '../Img/udp-logo.png'
import womLogo from '../Img/WOM-logo.png'
import gcpLogo from '../Img/gcp-logo.png'
import facu from '../Img/facu-ing.jpg'
import gcpace from '../Img/gcpace.png'
import wom from '../Img/wom.jpeg'

const timelineMainData = {
  title: '¡Hola! soy Kevin',
  subtitle: 'Estoy encantado de tenerte aqui',
  description:
    'Profesional con habilidades solidas en programación, cloud, bases de datos, análisis de datos y ' +
    'gestión. Estoy buscando la oportunidad de integrarme en un equipo para ayudar a enfrentar desafios' +
    'que me permitan diseñar e implementar soluciones para ideas de negocio transformadoras.'
}

const timelineData = [
  {
    title: 'Ingeniería Informatica y Gestión - Universidad Diego Portales',
    date: 'Marzo 2021 - Diciembre 2024',
    description:
      'Su formación les permite relacionar datos empresariales para apoyar la toma de decisiones con un enfoque de calidad, ' +
      'ética y responsabilidad social empresarial, con el fin de resolver problemas y/o necesidades de la organización, ' +
      'adaptándose a la innovación tecnológica y atendiendo a las oportunidades de negocio. A su vez, lideran equipos de ' +
      'trabajo interdisciplinarios para desarrollar y administrar soluciones informáticas, así como gestionar los recursos ' +
      'con el fin de hacer un uso eficiente de ellos, contribuyendo al cumplimiento de los objetivos organizacionales mediante soluciones tecnológicas.',
    logoImg: udpLogo,
    component: 'InfoCard'
  },
  { image: facu, component: 'ImgCard' },
  { name: 'gcpace', image: gcpace, component: 'ImgCard' },
  {
    title: 'Certificación Cloud GCP Associate',
    date: 'Noviembre 2023',
    description:
      'Avala las competencias fundamentales para desplegar y mantener proyectos en la nubeCandidato recomendado:' +
      'Tiene experiencia en desplegar aplicaciones en la nube y supervisar operaciones\n Tiene experiencia en la gestión de soluciones empresariales en la nube',
    logoImg: gcpLogo,
    component: 'InfoCard'
  },

  {
    title: 'Desarrollador Frontend en WOM - Practica profesional',
    date: 'Enero 2024 - Junio 2024',
    description: [
      '• Mejorar la experiencia de usuario del canal televentas añadiendo validaciones y mensajes dirigidos al usuario en los formularios y componentes.',
      '• Utilización de pipelines de azure devops junto git durante el ciclo de desarrollo del software a través de los diferentes ambientes pre-productivos.',
      '• Participación proactiva en las reuniones SCRUM del equipo haciendo uso correcto de metodologías ágiles y KANBAN.',
      '• Documentación de los endpoints usados por el frontend de la aplicación.'
    ],
    logoImg: womLogo,
    component: 'InfoCard'
  },
  { image: wom, component: 'ImgCard' }
]

const TimelineContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  padding: theme.spacing(4),
  minHeight: '100vh',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    left: 0
  }
}))

const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '2.5px',
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    left: 0,
    marginLeft: 15,
    top: 270,
    height: '90%'
  }
}))

const TimelineItemsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
  maxWidth: 1200,
  marginLeft: 4.8,
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexWrap: 'wrap',
    left: 0,
    marginLeft: 0
  }
}))

const TimelineItem = styled(Box)(({ theme, align }) => ({
  justifyContent: align === 'left' ? 'flex-end' : 'flex-start',
  zIndex: 0,
  marginBottom: theme.spacing(26),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: theme.spacing(7)
  }
}))

const TimelineMarker = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.background,
  margin: -10,
  right: 5,
  [theme.breakpoints.down('sm')]: {
    margin: -26.9
  }
}))

const TimelineContent = styled(Card)(({ theme, index, isSm }) => ({
  margin: theme.spacing(0, 10),
  padding: theme.spacing(2),

  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: isSm
      ? 'translateX(-5px)'
      : index % 2 === 0
      ? 'translateX(5px)'
      : 'translateX(-5px)'
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 1)
  }
}))

const TimelineImgLogo = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: theme.spacing(0, 10),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)'
  }
}))

const TimelineImg = styled(Box)(({ theme }) => ({
  width: 410,
  transition: 'transform 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: 264
  }
}))

const Timeline = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const openTab = (path) => {
    // URL of the PDF file
    const openTabPath = path
    window.open(openTabPath, '_blank') // Open in a new tab
  }

  return (
    <TimelineContainer id="timeline">
      <TimelineLine />
      <TimelineItemsContainer>
        <TimelineItem
          align={isSm ? 'left' : 'right'}
          sx={{
            [theme.breakpoints.down('sm')]: {}
          }}
        >
          {isSm ? (
            <></>
          ) : (
            <TimelineMarker>
              <FaCircle size={20} />
            </TimelineMarker>
          )}

          <TimelineImgLogo
            component="img"
            sx={{
              height: 400,
              width: 400,
              maxHeight: { xs: 200, md: 400, lg: 500 },
              maxWidth: { xs: 200, md: 500, lg: 500 },
              borderRadius: 100,
              [theme.breakpoints.down('sm')]: {
                position: 'relative',
                right: 26
              }
            }}
            src={inicioAvatar}
            alt="inicioAvatar"
          />
        </TimelineItem>
        <TimelineItem
          sx={{
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0
            }
          }}
        >
          <TimelineMarker>
            <FaCircle size={20} />
          </TimelineMarker>
          <TimelineContent align="left">
            <CardContent>
              <Typography variant="h1" component="h1" gutterBottom>
                {timelineMainData.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {timelineMainData.subtitle}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {timelineMainData.description}
              </Typography>
              <Box sx={{ display: 'flex', mt: 4, justifyContent: 'center' }}>
                <Button
                  onClick={() =>
                    openTab(
                      'https://drive.google.com/file/d/16uQt8IQ0KVYSfz_OLqiHfvXEppdHiCqr/view?usp=sharing'
                    )
                  }
                  sx={{
                    color: 'white',
                    background: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#074b8f' // Hover color
                    },
                    width: 130, // Set the desired width
                    height: 40,
                    [theme.breakpoints.down('sm')]: {
                      width: 100, // Set the desired width
                      height: 30
                    }
                  }}
                >
                  Mi CV
                </Button>
                <IconButton
                  onClick={() =>
                    openTab(
                      'https://drive.google.com/file/d/16uQt8IQ0KVYSfz_OLqiHfvXEppdHiCqr/view?usp=sharing'
                    )
                  }
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
                    component="img"
                    src={linkedinLogo}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  ></Box>
                </IconButton>
                <IconButton
                  onClick={() =>
                    openTab('https://github.com/kein7?tab=repositories')
                  }
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
                    component="img"
                    src={githubLogo}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  ></Box>
                </IconButton>
                <IconButton
                  sx={{
                    width: 55, // Set the desired width
                    height: 40, // Set the desired height
                    padding: 0,
                    ml: 2,
                    mr: 2,
                    [theme.breakpoints.down('sm')]: {
                      height: 30,
                      width: 40,
                      ml: 1,
                      mr: 1
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={youtubeLogo}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  ></Box>
                </IconButton>
              </Box>
            </CardContent>
          </TimelineContent>
        </TimelineItem>

        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              left: index % 2 === 0 ? 10 : '',
              right: index % 2 === 0 ? 0 : 10,
              [theme.breakpoints.down('sm')]: {
                marginLeft: 0
              }
            }}
          >
            <TimelineMarker
              align={isSm ? 'left' : index % 2 === 0 ? 'right' : 'left'}
            >
              <FaCircle size={20} />
            </TimelineMarker>
            {item.name === 'gcpace' ? (
              <IconButton
                onClick={() =>
                  openTab(
                    'https://google.accredible.com/9ddf23e3-2b71-44e0-9052-cdf9a9d58d92'
                  )
                }
                sx={{
                  borderRadius: 100,
                  width: 300,
                  ml: 20,
                  [theme.breakpoints.down('sm')]: {
                    position: 'relative',
                    width: 200,
                    ml: 6
                  }
                }}
              >
                <TimelineImg
                  component="img"
                  sx={{
                    borderRadius: 2,
                    width: 300,
                    justifyContent: 'center',
                    [theme.breakpoints.down('sm')]: {
                      position: 'relative',
                      width: 200
                    }
                  }}
                  src={item.image}
                />
              </IconButton>
            ) : (
              <TimelineContent index={index} isSm={isSm}>
                {item.component === 'ImgCard' ? (
                  <TimelineImg
                    component="img"
                    sx={{
                      borderRadius: 2,
                      [theme.breakpoints.down('sm')]: {
                        position: 'relative'
                      }
                    }}
                    src={item.image}
                  />
                ) : (
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex'
                      }}
                    >
                      <IconButton
                        sx={{
                          width: 40, // Set the desired width
                          height: 40, // Set the desired height
                          padding: 0,
                          mt: 1,
                          [theme.breakpoints.down('sm')]: {
                            height: 30,
                            width: 30
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={item.logoImg}
                          sx={{
                            width: '100%',
                            height: '100%'
                          }}
                        ></Box>
                      </IconButton>
                      <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        sx={{
                          ml: 2
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {item.date}
                    </Typography>

                    {Array.isArray(item.description) ? (
                      <List>
                        {item.description.map((item, index) => (
                          <ListItem key={index}>
                            <Typography variant="body1" color="textSecondary">
                              {item}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Typography variant="body1" color="textSecondary">
                        {item.description}
                      </Typography>
                    )}
                  </CardContent>
                )}
              </TimelineContent>
            )}
          </TimelineItem>
        ))}
      </TimelineItemsContainer>
    </TimelineContainer>
  )
}

export default Timeline
