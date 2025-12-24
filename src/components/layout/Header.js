import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ToggleColorMode from "../util/ToggleColorMode";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";

export default function Header({ mode, toggleColorMode }) {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row" },
          width: "100%",
          alignItems: "center",
          padding: 1,
          gap: 2,
        }}
      >
        <Typography flexGrow="1" variant="h6" fontWeight={600}>
            Slime Rancher 2 Planner
        </Typography>

        <Typography color="text.secondary" variant="body1">
          Version: 0.5
        </Typography>
        <IconButton
          color="inherit"
          href="https://github.com/AbbyNode/SR2Planner"
          aria-label="GitHub"
          sx={{ alignSelf: "center" }}
        >
          <GitHub />
        </IconButton>
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
      </Box>
    </Container>
  );
}
