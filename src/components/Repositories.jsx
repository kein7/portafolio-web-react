import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Repository, mapDto } from "./Repository";
import { WrapText } from "@mui/icons-material";

export default function Repositories() {
  const [repos, setRepos] = useState();

  async function getRepos() {
    const { data } = await axios.get(
      "https://api.github.com/users/kein7/repos?per_page=100"
    );
    setRepos(data.map((item) => mapDto(item)));
  }

  useEffect(() => {
    getRepos();
  }, []);

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
      <Typography variant="h2" sx={{ pb: 8}}>
        Repositorios
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap", 
        }}
      >
        {repos?.map((repo, key) => (
          <Repository key={`repository-${key}`} repo={repo}></Repository>
        ))}
      </Container>
    </Container>
  );
}
