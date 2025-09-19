import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Select,
  Avatar,
  Stack,
  IconButton,
  Tooltip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// Sidebar icons imports
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NoteIcon from "@mui/icons-material/Note";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const drawerWidth = 240;
const collapsedWidth = 60;

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen((prev) => !prev);

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, ariaLabel: "Home" },
    { text: "Exception Management", icon: <ErrorOutlineIcon />, ariaLabel: "Exception Management" },
    { text: "Audit Notes", icon: <NoteIcon />, ariaLabel: "Audit Notes" },
    { text: "Audit Enquiry", icon: <SearchIcon />, ariaLabel: "Audit Enquiry" },
    { text: "Reports", icon: <AssessmentIcon />, ariaLabel: "Reports" },
    { text: "Admin", icon: <AdminPanelSettingsIcon />, ariaLabel: "Admin" },
    { text: "Help & Training", icon: <HelpOutlineIcon />, ariaLabel: "Help and Training" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
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
            boxShadow: "2px 0 6px rgba(0,0,0,0.2)",
          },
        }}
      >
        {/* Top toolbar with logo and toggle */}
        <Box sx={{ display: "flex", alignItems: "center", px: 1, mb: 2 }}>
          {open ? (
            <img
              src="/logo192.png"
              alt="ERP Maestro"
              style={{ maxWidth: 120, marginRight: 8 }}
              draggable={false}
            />
          ) : (
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                userSelect: "none",
                fontSize: "1.25rem",
              }}
              aria-label="ERP Maestro"
            >
              EM
            </Typography>
          )}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: "white",
              marginLeft: "auto",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              transition: "background-color 0.3s",
            }}
            size="small"
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Navigation List */}
        <List sx={{ flexGrow: 1, px: open ? 1 : 0 }}>
          {menuItems.map(({ text, icon, ariaLabel }) => (
            <Tooltip
              key={text}
              title={!open ? text : ""}
              placement="right"
              arrow
              enterDelay={400}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "flex-start" : "center",
                  px: open ? 2 : 0,
                  mb: 1,
                  borderRadius: 1,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                  },
                }}
                aria-label={ariaLabel}
              >
                <ListItemIcon
                  sx={{
                    color: "white",
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </Tooltip>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

        {/* Logout button */}
        <Box sx={{ p: 2 }}>
          <Tooltip title={!open ? "Logout" : ""} placement="right" arrow enterDelay={400}>
            <ListItemButton
              sx={{
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2 : 0,
                bgcolor: "rgba(255, 69, 58, 0.85)",
                color: "white",
                borderRadius: 1,
                "&:hover": {
                  bgcolor: "rgba(255, 69, 58, 1)",
                },
              }}
              aria-label="Logout"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Logout" />}
            </ListItemButton>
          </Tooltip>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f0f0f0",
          minHeight: "100vh",
          ml: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
          transition: "margin-left 0.3s",
        }}
      >
        {/* Top AppBar */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#4051a4",
            ml: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
            width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
            transition: "margin-left 0.3s, width 0.3s",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          elevation={4}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* System Selector */}
            <Select
              size="small"
              defaultValue=""
              sx={{
                color: "white",
                minWidth: 200,
                fontWeight: 600,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255,255,255,0.6)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
              displayEmpty
              inputProps={{ "aria-label": "Choose a System Selector" }}
            >
              <MenuItem value="">
                <em>Choose a System Selector</em>
              </MenuItem>
              <MenuItem value={1}>System 1</MenuItem>
              <MenuItem value={2}>System 2</MenuItem>
            </Select>

            {/* User info + Icons */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography sx={{ fontWeight: 600 }}>Welcome User</Typography>
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

        {/* Spacer below AppBar */}
        <Toolbar />

        {/* Page content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
