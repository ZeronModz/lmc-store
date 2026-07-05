'use client';
import { Typography, Box, Grid, Card, CardMedia, CardContent, Chip, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// ডামি ডেটা (পরে আমরা এটি ডেটাবেস বা JSON থেকে নিব)
const configs = [
  { id: 1, title: "Ultra HDR Pro", author: "PixelMaster", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800", category: "HDR" },
  { id: 2, title: "Night Sight Beast", author: "AstroGraphy", img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800", category: "Night" },
  { id: 3, title: "Cinematic V3", author: "FilmLook", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800", category: "Cinematic" },
  { id: 4, title: "Portrait Master", author: "BokehKing", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800", category: "Portrait" },
];

export default function Home() {
  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Enhance Your Photography
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Discover premium XML configs for LMC 8.4 Camera. Built for next-level mobile photography.
        </Typography>
        <Button variant="contained" size="large">Explore Configs</Button>
      </Box>

      {/* Filter Chips (M3 Style) */}
      <Box sx={{ display: 'flex', gap: 1, mb: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
        {['All', 'HDR', 'Night', 'Portrait', 'Cinematic'].map((filter, i) => (
          <Chip 
            key={i} 
            label={filter} 
            clickable 
            color={i === 0 ? 'primary' : 'default'}
            variant={i === 0 ? 'filled' : 'outlined'}
            sx={{ borderRadius: '8px', padding: '8px 4px' }} 
          />
        ))}
      </Box>

      {/* Config Cards Grid */}
      <Grid container spacing={3}>
        {configs.map((config) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={config.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
              <CardMedia
                component="img"
                height="180"
                image={config.img}
                alt={config.title}
                sx={{ filter: 'brightness(0.9)' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {config.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    by {config.author}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip label={config.category} size="small" sx={{ borderRadius: '8px', backgroundColor: '#2B2930', color: '#CAC4D0' }} />
                  <Button size="small" startIcon={<DownloadIcon />} variant="contained" sx={{ boxShadow: 'none' }}>
                    Download
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
