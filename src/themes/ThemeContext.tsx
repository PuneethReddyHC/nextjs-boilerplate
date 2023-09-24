import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { CustomTheme as Theme, lightTheme, darkTheme, createMuiTheme } from '.'; // Import your Theme type
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'; // Import MUI's ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import MUI's CssBaseline

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
  }
`;

// Create the ThemeContext with initial values
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: lightTheme, // Default to light theme
  toggleTheme: () => {},
});

// Define a custom hook to access the theme and toggleTheme function
export const useTheme = () => useContext(ThemeContext);

// Provide a higher-order component to wrap your components with the ThemeContext
export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    // Load the theme from localStorage or use the default theme
    
    const storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
    if (storedTheme) {
      setTheme(storedTheme === 'dark' ? darkTheme : lightTheme);
    }
  }, []);

  // Function to toggle the theme
  const handleToggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme; // Toggle between light and dark themes
      const themeSelected = currentTheme === lightTheme ? 'dark' : 'light';
      localStorage.setItem('theme', themeSelected);
      return newTheme;
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyle theme={theme} />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};