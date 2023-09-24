import { createTheme, ThemeOptions } from '@mui/material/styles';
import { FontFamily } from '@mui/material/styles';

export interface CustomTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  fontColor: string;
  palette: {
    type: 'light' | 'dark';
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fontFamily:  FontFamily | undefined;
    fontWeightBold: number;
    h1: {
      fontSize: number;
      fontWeight: number;
    };
    h2: {
      fontSize: number;
      fontWeight: number;
    };
    h3: {
      fontSize: number;
      fontWeight: number;
    };
    h4: {
      fontSize: number;
      fontWeight: number;
    };
    h5: {
      fontSize: number;
      fontWeight: number;
    };
    h6: {
      fontSize: number;
      fontWeight: number;
    };
    body1: {
      fontSize: number;
      fontWeight: number;
    };
    body2: {
      fontSize: number;
      fontWeight: number;
    };
    caption: {
      fontSize: number;
      fontWeight: number;
    };
  };
}

export const createMuiTheme = (customTheme: CustomTheme): ThemeOptions => {
  return createTheme({
    palette: {
      primary: {
        main: customTheme.palette.primary.main,
      },
      secondary: {
        main: customTheme.palette.secondary.main,
      },
      background: {
        default: customTheme.palette.background.default,
        paper: customTheme.palette.background.paper,
      },
      text: {
        primary: customTheme.palette.text.primary,
        secondary: customTheme.palette.text.secondary,
      },
    },
    typography: {
      fontFamily: customTheme.typography.fontFamily,
      fontWeightBold: customTheme.typography.fontWeightBold,
      h1: {
        fontSize: customTheme.typography.h1.fontSize,
        fontWeight: customTheme.typography.h1.fontWeight,
      },
      h2: {
        fontSize: customTheme.typography.h2.fontSize,
        fontWeight: customTheme.typography.h2.fontWeight,
      },
      h3: {
        fontSize: customTheme.typography.h3.fontSize,
        fontWeight: customTheme.typography.h3.fontWeight,
      },
      h4: {
        fontSize: customTheme.typography.h4.fontSize,
        fontWeight: customTheme.typography.h4.fontWeight,
      },
      h5: {
        fontSize: customTheme.typography.h5.fontSize,
        fontWeight: customTheme.typography.h5.fontWeight,
      },
      h6: {
        fontSize: customTheme.typography.h6.fontSize,
        fontWeight: customTheme.typography.h6.fontWeight,
      },
      body1: {
        fontSize: customTheme.typography.body1.fontSize,
        fontWeight: customTheme.typography.body1.fontWeight,
      },
      body2: {
        fontSize: customTheme.typography.body2.fontSize,
        fontWeight: customTheme.typography.body2.fontWeight,
      },
      caption: {
        fontSize: customTheme.typography.caption.fontSize,
        fontWeight: customTheme.typography.caption.fontWeight,
      },
    },
  });
};

export const lightTheme: CustomTheme = {
  primaryColor: '#ADD8E6',
  secondaryColor: '#90EE90',
  backgroundColor: '#FFFFFF',
  fontColor: '#000000',
  palette: {
    type: 'light',
    primary: {
      main: '#ADD8E6',
    },
    secondary: {
      main: '#90EE90',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F2F2F2',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    fontWeightBold: 700,
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 18,
      fontWeight: 700,
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
};

export const darkTheme: CustomTheme = {
  primaryColor: '#00008B',
  secondaryColor: '#006400',
  backgroundColor: '#000000',
  fontColor: '#FFFFFF',
  palette: {
    type: 'dark',
    primary: {
      main: '#00008B',
    },
    secondary: {
      main: '#006400',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAA',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    fontWeightBold: 700,
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 18,
      fontWeight: 700,
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
};

// Create an instance of the MUI theme using your custom theme
export const theme = createMuiTheme(lightTheme);
