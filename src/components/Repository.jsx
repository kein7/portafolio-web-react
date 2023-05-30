import { Box, Grid, Grow, Typography } from "@mui/material";
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

export function Repository({ repo }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        background: "#1e1e1e",
        width: "calc(33.33% - 16px) !important",
        borderRadius: 3,
        m: 1,
        p: 4,
        color: "#ccc",
        boxSizing: "border-box",
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              mb: 2,
            }}
          >
            <a
              href={repo.link}
              target="_blank"
              rel="nooponer noreferrer"
              aria-label={repo.name}
              style={{
                color: "#ccc",
                fontWeight: 700,
                textOverflow: "ellipsis",
                textDecoration: "none",
                whiteSpace: "nowrap",
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
          <Typography sx={{ fontSize: 14, mb: 4 }}>
            {repo.description}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Typography sx={{ mr: 2 }}>{repo.language}</Typography>
          <Box
            sx={{
              mr: 2,
            }}
          >
            <Typography>
              <FontAwesomeIcon style={{ marginRight: 4 }} icon={faStar} />
              {repo.stars}
            </Typography>
          </Box>
          <Box
            sx={{
              mr: 2,
            }}
          >
            <Typography>
              <FontAwesomeIcon style={{ marginRight: 4 }} icon={faCodeBranch} />
              {repo.forks}
            </Typography>
          </Box>
        </Box>
        <Typography>{repo.size} KB</Typography>
      </Box>
    </Box>
  );
}
