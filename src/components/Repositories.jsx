import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { RepositoryContent, mapDto } from "./RepositoryContent";
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
    <Box
      id="repositorios"
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        ml: { sm: 5, md: 9, lg: 20 },
        mr: { sm: 5, md: 9, lg: 20 },
        
      }}
    >
      <Typography
        align="center"
        variant="h2"
        sx={{ pb: { xs: 5, md: 8 }, fontSize: { xs: 45, sm: 50, md: 60 }, mt: {xs: 2}}}
      >
        Repositorios
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { md: "wrap" },
          justifyContent: "center",
          ml: { xs: 1 },
          mr: { xs: 1 },
        }}
      >
        {repos?.map((repo, key) => (
          <RepositoryContent
            key={`repository-${key}`}
            repo={repo}
          ></RepositoryContent>
        ))}
      </Box>
    </Box>
  );
}
