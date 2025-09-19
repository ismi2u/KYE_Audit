import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Button,
} from "@mui/material";

export default function TopBar() {
  return (
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
          <Avatar alt="Michael Marks">MM</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
