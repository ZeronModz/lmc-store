'use client';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid #2B2930' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CameraAltIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
            LMC 8.4 Store
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button color="inherit" sx={{ color: 'text.secondary' }}>Home</Button>
          <Button color="inherit" sx={{ color: 'text.secondary' }}>Categories</Button>
          <IconButton color="inherit" sx={{ color: 'text.primary' }}>
            <SearchIcon />
          </IconButton>
          <Button variant="contained" color="primary" sx={{ boxShadow: 'none' }}>
            Upload Config
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
