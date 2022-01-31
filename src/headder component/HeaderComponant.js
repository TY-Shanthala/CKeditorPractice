import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HeaderComponant() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleSettingsClick = () => {};
  const handleNotificationClick = () => {};
  const handleProfileClick = () => {};

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  //   const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
    >
      <MenuItem>
        <IconButton onClick={handleSettingsClick} sx={{ mr: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 25, height: 25 }}
          />
        </IconButton>
        <p className="mb-0">Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton onClick={handleNotificationClick} sx={{ mr: 2 }}>
          <NotificationsNoneOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="mb-0">Notification</p>
      </MenuItem>
      <MenuItem>
        <IconButton onClick={handleProfileClick} sx={{ mr: 2 }}>
          <SettingsOutlinedIcon fontSize="small" />
        </IconButton>
        <p className="mb-0">Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "#f0f3f9",
        }}
      >
        <Container maxWidth="m">
          <Toolbar disableGutters variant="string">
            <img
              className="px-3"
              width="150"
              src="https://flinko.s3.ap-south-1.amazonaws.com/website/home/icons/png/Flinko_Logo.png"
              alt=""
            />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleSettingsClick} sx={{ mr: 2 }}>
                    <SettingsOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleNotificationClick} sx={{ mr: 2 }}>
                    <NotificationsNoneOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleProfileClick} sx={{ mr: 2 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                // color="inherit"
              >
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default HeaderComponant;
