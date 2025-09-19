import React from "react";
import { Drawer, Box, Toolbar, IconButton, Button, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NoteIcon from "@mui/icons-material/Note";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const drawerWidth = 240;
const collapsedWidth = 60;

export default function Sidebar({ open, toggleDrawer }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Exception Management", icon: <ErrorOutlineIcon /> },
    { text: "Audit Notes", icon: <NoteIcon /> },
    { text: "Audit Enquiry", icon: <SearchIcon /> },
    { text: "Reports", icon: <AssessmentIcon /> },
    { text: "Admin", icon: <AdminPanelSettingsIcon /> },
    { text: "Help & Training", icon: <HelpOutlineIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: "border-box",
          backgroundColor: "#4051a4",
          color: "white",
          paddingTop: 2,
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 1, mb: 2 }}>
        {open && <img src="/logo192.png" alt="ERP Maestro" style={{ maxWidth: 120, marginRight: 8 }} />}
        <IconButton onClick={toggleDrawer} sx={{ color: "white", marginLeft: "auto" }} size="small">
          <MenuIcon />
        </IconButton>
      </Box>

      <Stack spacing={1} sx={{ px: 1, flexGrow: 1 }}>
        {menuItems.map(({ text, icon }) => (
          <Button
            key={text}
            variant="contained"
            color="primary"
            fullWidth
            startIcon={icon}
            sx={{
              justifyContent: open ? "flex-start" : "center",
              px: open ? 2 : 0,
              textTransform: "none",
            }}
            title={!open ? text : ""}
          >
            {open && text}
          </Button>
        ))}
      </Stack>
    </Drawer>
  );
}
