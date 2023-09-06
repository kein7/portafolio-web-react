import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React, { useRef } from "react";
import ContactMeCard from "./ContactMeCard";

export default function ContactMe() {
  const form = useRef();

  const enviarEmail = (e) => {
    emailjs
      .sendForm(
        "service_v7xtjuw",
        "template_kjfgucg",
        form.current,
        "AAZSsTbeUaGmO1w8f"
      )
      .then(
        (res) => {
          alert("Se ha enviado correctamente");
          console.log(res);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <Box
      sx={{
        overflow: "hidden",
        m: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
      }}
    >
      <Typography
        id="contactame"
        align="center"
        variant="h2"
        sx={{ mb: 5, fontSize: { xs: 35, sm: 45, md: 60 } }}
      >
        Contactame :)
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: { xs: 2, sm: 3, md: 4 },
          ml: { md: 10, lg: 40, xl: 60 },
          mr: { md: 10, lg: 40, xl: 60 },
          border: 2,
          borderRadius: 2,
          borderColor: "#05ACD5",
          justifyContent: "center",
        }}
      >
        <ContactMeCard></ContactMeCard>
        <Box
          component="form"
          ref={form}
          onSubmit={handleSubmit(enviarEmail)}
          sx={{ p: { xs: 0, md: 2 }, mr: { xs: 3 }, ml: { xs: 3 } }}
        >
          <Box align="center" name="txbNombre">
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              {...register("nombre", {
                required: true,
                maxLength: 25,
              })}
              sx={{
                width: { xs: 200, md: 400 },
                "& .MuiInputBase-root": {
                  height: 40,
                  ml: 0,
                  mb: 1,
                },
              }}
            ></TextField>

            {errors.nombre?.type === "required" && (
              <Typography> El nombre es requerido</Typography>
            )}
          </Box>

          <Box align="center" name="txbEmail">
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="email"
              placeholder="Ingrese su email"
              {...register("email", {
                required: true,
                maxLength: 50,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              sx={{
                width: { xs: 200, md: 400 },
                "& .MuiInputBase-root": {
                  height: 40,
                  ml: 0,
                  mb: 1,
                },
              }}
            ></TextField>

            {errors.email?.type === "required" && (
              <Typography> El email es requerido</Typography>
            )}
            {errors.email?.type === "maxLength" && (
              <Typography>Formato incorrecto</Typography>
            )}
            {errors.email?.type === "pattern" && (
              <Typography>Formato incorrecto</Typography>
            )}
          </Box>
          <Box align="center" name="txbMensaje">
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="mensaje"
              placeholder="Ingrese su mensaje"
              multiline
              maxRows={8}
              {...register("mensaje", {
                required: true,
                maxLength: 300,
              })}
              sx={{
                width: { xs: 200, md: 400 },
                "& .MuiInputBase-root": {
                  height: 200,
                  mb: 2,
                },
              }}
            ></TextField>
          </Box>

          <Button type="submit" variant="contained">
            Enviar mensaje
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
