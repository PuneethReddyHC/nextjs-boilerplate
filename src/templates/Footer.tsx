// Footer.tsx
import React from 'react';
import { Paper, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Paper>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} My App
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
