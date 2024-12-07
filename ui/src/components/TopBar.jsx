import { Theaters } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";

export default function TopBar({ appBarHeight }) {
  
  // const [user, setUser] = useState(null);
  const user = {
    firstName: "Johnny",
    lastName: "McCinema",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "primary.dark",
          // height: appBarHeight,
        }}
      >
        <Toolbar>
          <Theaters fontSize="large" />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 1 }}
          >
            TurboDCP
          </Typography>
          <Avatar
            alt={user.firstName + " " + user.lastName}
            sx={{ bgcolor: "secondary.dark" }}
          >
            {user.lastName[0]}
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
