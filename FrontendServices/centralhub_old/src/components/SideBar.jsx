import React from "react";
import {
  Drawer,
  Box,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import {
  Home as HomeIcon,
  BugReport as ExceptionIcon,
  NoteAlt as NotesIcon,
  Search as SearchIcon,
  BarChart as ReportIcon,
  AdminPanelSettings as AdminIcon,
  HelpOutline as HelpIcon,
  PowerSettingsNew as PowerIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

export default function Sidebar({ open, toggleDrawer }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Exception Management", icon: <ExceptionIcon /> },
    { text: "Audit Notes", icon: <NotesIcon /> },
    { text: "Audit Enquiry", icon: <SearchIcon /> },
    { text: "Reports", icon: <ReportIcon /> },
    { text: "Admin", icon: <AdminIcon /> },
    { text: "Help & Training", icon: <HelpIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#093b88",
          color: "#fff",
          width: open ? drawerWidth : 70,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.3s",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ px: 1, pt: 2 }}>
        <IconButton onClick={toggleDrawer} sx={{ color: "#fff", mb: 2 }}>
          <Typography variant="body1">❮❮</Typography>
        </IconButton>
      </Box>

      <List>
        {menuItems.map(({ text, icon }) => (
          <ListItem button key={text} sx={{ mb: 1, borderRadius: 1 }}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            {open && <ListItemText primary={text} />}
          </ListItem>
        ))}
      </List>

      {/* Bottom */}
      <Box sx={{ position: "absolute", bottom: 20, width: "100%" }}>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
        <List>
          <ListItem button sx={{ color: "#fff" }}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
          </ListItem>
          <ListItem button sx={{ color: "#fff" }}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <PowerIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
