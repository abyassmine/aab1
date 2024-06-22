import React, { useState } from 'react';

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { styled } from '@mui/system';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'; // New notification icon
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { Link } from 'react-router-dom';
import Notifications from '../../component/Notifications';

const NotificationIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '& .MuiBadge-badge': {
    top: '50%',
    right: '-10%',
    transform: 'translate(50%, -50%)',
    height: '18px',
    minWidth: '18px',
    padding: '0 3px',
    fontSize: '12px', // Adjust the size as per your requirements
    fontWeight: 'bold',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px', // Adjust the size as per your requirements
  },
}));

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const newMessageCount = 3; // Example new message count
  const [notificationCount, setNotificationCount] = useState(0);


  const [darkMode, setDarkMode] = useState(false);
const [buttonColor, setButtonColor] = useState('');
const [inputColor, setInputColor] = useState('');
const [labelColor, setLabelColor] = useState('');
const [borderColor, setBorderColor] = useState('');

  const handleLogout = () => {
    // Perform any logout actions here
    // For example, clearing local storage or calling a logout API

    // Show the logout success message
    Alert.success('You have successfully logged out!', {
      position: 'top-right',
      effect: 'slide',
      timeout: 3000
    });

    // Redirect to the login page
    navigate('/login');
  };

  const handleNotificationsClick = () => {
    // Update the notification count
    setNotificationCount(notificationCount + 1);
  
    // Handle opening the notification panel or dropdown
    // Add your code here...
  };
  
  const handleDarkModeToggle = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center"> {/* Adjusted the alignment to center */}
        <IconButton  onClick={handleDarkModeToggle} >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
          <Badge  onClick={handleNotificationsClick} badgeContent={newMessageCount} color="error"  sx={{ top: '10%', right: '1%' }}> {/* Adjusted the position */}
            <Notifications color="inherit"/> {/* New notification icon */}
          </Badge>
      
          <Link to="/home">
  <IconButton>
    <SettingsOutlinedIcon />
  </IconButton>
</Link>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon color="inherit" />
        </IconButton>
       
      </Box>
    </Box>
  );
};

export default Topbar;
