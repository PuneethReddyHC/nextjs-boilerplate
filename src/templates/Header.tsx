// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import the icon
import { useTheme } from '../themes/ThemeContext'; // Import the useTheme hook

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon /> {/* Add the toggle theme button */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
