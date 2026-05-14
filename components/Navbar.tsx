'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(COMPANY_INFO.whatsapp, '_blank');
  };

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          sx={{
            color: 'text.primary',
            fontSize: '0.9rem',
            fontWeight: 700,
            textDecoration: 'none',
            px: 1,
            py: 0.75,
            borderRadius: 1.5,
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(102,126,234,0.08)',
            },
          }}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 12,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        color: 'text.primary',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        pointerEvents: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 70 },
            px: { xs: 2, md: 3 },
            borderRadius: 3,
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.56)',
            boxShadow: '0 18px 50px rgba(16,24,40,0.14)',
            pointerEvents: 'auto',
          }}
        >
          <Link
            href="#hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              color: 'text.primary',
              textDecoration: 'none',
              mr: 'auto',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                color: 'white',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 10px 24px rgba(102,126,234,0.35)',
              }}
            >
              P
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, lineHeight: 1, fontSize: '1rem' }}>
                ProSoft
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.72rem', fontWeight: 600 }}>
                Training Institute
              </Typography>
            </Box>
          </Link>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 1.5 }}
          >
            {navLinks}
          </Stack>

          <Button
            onClick={handleWhatsAppClick}
            variant="contained"
            startIcon={<FaWhatsapp />}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              backgroundColor: '#25d366',
              color: 'white',
              fontWeight: 800,
              px: 2,
              '&:hover': { backgroundColor: '#1da853' },
            }}
          >
            Enquire
          </Button>

          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 1, color: 'text.primary' }}
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 290,
              p: 3,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            },
          },
        }}
      >
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 900, fontSize: '1.1rem' }}>ProSoft</Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close navigation menu">
              <FaTimes />
            </IconButton>
          </Stack>
          <Stack spacing={1}>{navLinks}</Stack>
          <Button
            onClick={handleWhatsAppClick}
            variant="contained"
            startIcon={<FaWhatsapp />}
            sx={{
              backgroundColor: '#25d366',
              color: 'white',
              fontWeight: 800,
              '&:hover': { backgroundColor: '#1da853' },
            }}
          >
            Chat on WhatsApp
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
