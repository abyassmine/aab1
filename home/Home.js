import React, { useState } from 'react';
import './Home.css';
import AppHeader from '../common/AppHeader';
import { ACCESS_TOKEN } from '../constants';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const Home = ({ authenticated, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    onLogout();
  };

  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  const themeConfig = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={themeConfig}>
      <div
        className={`home-container ${
          darkMode ? 'dark-mode' : 'light-mode'
        }`}
      >
        <div className="color-mode-toggle">
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === 'light' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </div>
        <AppHeader authenticated={authenticated} onLogout={handleLogout} />
        <div className="container">
          <div className="graf-bg-container">
            <div className="graf-layout">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="graf-circle"></div>
              ))}
            </div>
          </div>
          <h1 className="home-title">
            Created by aabir hakkani
          </h1>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
