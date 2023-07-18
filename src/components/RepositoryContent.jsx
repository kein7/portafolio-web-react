import { Box, Container, Grid, Grow, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export function mapDto(dto) {
  return {
    name: dto.name,
    link: dto.html_url,
    description: dto.description,
    size: dto.size,
    language: dto.language,
    stars: dto.stargazers_count,
    forks: dto.forks_count,
  };
}

export function RepositoryContent({ repo }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: {xs: 220, sm: 300 , md: 300},
        height: {xs: 130, sm: 130 , md: 130},
        borderRadius: 3,
        m: { xs: 2, md: 1, lg: 2},
        p: { xs: 2.5, md: 3, lg:3},
        backgroundColor: "#2B2B2B",
        color: "#C1C1C1",
      }}
    >
      <Box name="Top" sx={{height:{xs:240}}}>
        <Box name="Title">
          <Typography
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <a
              href={repo.link}
              target="_blank"
              rel="nooponer noreferrer"
              aria-label={repo.name}
              style={{
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
                color: "#8E8E8E",
              }}
            >
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />
              {repo.name}
            </a>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Typography sx={{ fontSize: 14, mb: 4, mt: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            {repo.description}
          </Typography>
        </Box>
      </Box>
      <Box
        name="Bottom"
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          
        }}
      >
        <Typography sx={{ mr: {xs: 0,md:2} }}>{repo.language}</Typography>
        <Box
          sx={{
            mr: { md: 2 },
          }}
        >
          <Typography>
            <FontAwesomeIcon style={{ marginRight: 4 }} icon={faStar} />
            {repo.stars}
          </Typography>
        </Box>
        <Box
          sx={{
            mr: { md: 2 },
          }}
        >
          <Typography>
            <FontAwesomeIcon style={{ marginRight: 4 }} icon={faCodeBranch} />
            {repo.forks}
          </Typography>
        </Box>
        <Typography>{repo.size} KB</Typography>
      </Box>
    </Box>
  );
}
