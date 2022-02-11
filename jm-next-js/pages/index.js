import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBarResponsive from '../src/mui_components/AppBarResponsive'

export default function Index() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters={true}>
        <AppBarResponsive />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
