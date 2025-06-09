import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  { text: "Home", path: "/" },
  { text: "Tournaments", path: "/tournaments" },
  { text: "Contact", path: "/contact" },
  { text: "About", path: "/about" },
  { text: "Login", path: "http://localhost:5000/auth/google" },

];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HocxGaming
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

    </Box>
  );
  // -------
const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null)); // If not logged in
  }, []);

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          px: { xs: 2, sm: 6, md: 12 },
          backgroundColor: "#133E87", // mobile: 16px, tablet: 48px, desktop: 96px
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, sm: 80, md: 50 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              letterSpacing: "4px",
              fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
              cursor: "pointer",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            HocxGaming
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
                  fontWeight: "600",
                  px: { xs: 1, sm: 2, md: 3 },
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <IconButton
            color="#fff"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              color: "#FFF",
            }}
          >
            {" "}
            <i class="fa-solid fa-bars"></i>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
