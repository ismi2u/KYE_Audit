import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Select, MenuItem, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar({ onMenuClick, drawerOpen, drawerWidth }) {
  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        bgcolor: "#4051a4",
        color: "#fff",
        width: `calc(100% - ${drawerOpen ? drawerWidth : 60}px)`,
        ml: drawerOpen ? `${drawerWidth}px` : "60px",
        transition: (theme) =>
          theme.transitions.create(["width", "margin-left"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Select
          size="small"
          defaultValue=""
          sx={{ color: "#fff", minWidth: 220, fontWeight: 600 }}
          displayEmpty
          inputProps={{ "aria-label": "Choose a System Selector" }}
        >
          <MenuItem value="">
            <em>Choose a System Selector</em>
          </MenuItem>
          <MenuItem value={1}>System 1</MenuItem>
          <MenuItem value={2}>System 2</MenuItem>
        </Select>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Welcome User
          </Typography>
          <Avatar alt="Welcome User" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
          <IconButton color="inherit" aria-label="Notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
