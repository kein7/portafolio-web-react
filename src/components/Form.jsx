import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      sx={{
        overflow: "hidden",
        p: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "column" },
      }}
    >
      <Typography variant="h2" sx={{ mb: 8 }}>
        Contactame :)
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography>
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            {...register("nombre", {
              required: true,
              maxLength: 25,
            })}
          ></input>
        </Typography>
        {errors.nombre?.type === "required" && (
          <Typography> El nombre es requerido</Typography>
        )}
        <Box>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su email"
            {...register("email", {
              required: true,
              maxLength: 25,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            })}
          ></input>
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
        <Box>
          <input
            type="text"
            name="mensaje"
            placeholder="Ingrese su mensaje"
            {...register("mensaje", {
              required: true,
              maxLength: 300,
            })}
          ></input>
        </Box>
        <Button type="submit" sx={{ background: "#1e1e1e", mt: 2 }}>
          Enviar mensaje
        </Button>
      </Box>
    </Container>
  );
}
