import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
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

export default function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#f5f5f5",
          color: "#000",
        }}
        elevation={1}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="https://via.placeholder.com/40"
              alt="ERP Logo"
              sx={{ height: 40, mr: 2 }}
            />
            <Typography variant="h6" component="div">
              HOME
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="outlined" size="small">
              Choose a System Selector
            </Button>
            <Typography variant="body1">Michael Marks</Typography>
            <Avatar alt="Michael Marks" src="/user.png" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
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

        {/* Bottom Settings */}
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

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#e0e0e0",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Toolbar />
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" fontWeight="bold" color="primary">
            Dashboard based on the logged in User
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
