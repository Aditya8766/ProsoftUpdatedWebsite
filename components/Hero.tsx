'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { COMPANY_INFO, STATS, VISUAL_ASSETS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(COMPANY_INFO.whatsapp, '_blank');
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: { xs: 14, md: 16 },
        pb: { xs: 7, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ position: 'absolute', top: '5%', right: '10%', fontSize: '4rem', opacity: 0.1 }}
      >
        💻
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        style={{ position: 'absolute', bottom: '10%', left: '5%', fontSize: '4rem', opacity: 0.1 }}
      >
        🚀
      </motion.div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.1rem',
                    opacity: 0.9,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                  }}
                >
                  Welcome to ProSoft Institute
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Industry-Ready Software Training & Placement Programs
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    opacity: 0.95,
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Live mentor-led coding, real projects, internship guidance & placement preparation for computer and IT students in Pune.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="contained"
                    size="large"
                    endIcon={<FaWhatsapp />}
                    sx={{
                      backgroundColor: '#25d366',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 3,
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#1da853',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    href="#courses"
                    variant="outlined"
                    size="large"
                    endIcon={<FaArrowRight />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 3,
                      textTransform: 'none',
                      borderRadius: '8px',
                      border: '2px solid',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Explore Courses
                  </Button>
                </Stack>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={itemVariants}>
                <Stack spacing={1.5}>
                  {['✓ 500+ Students Trained', '✓ 95%+ Placement Success', '✓ Average Package 4-6 LPA'].map(
                    (item, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Stats */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Box
                sx={{
                  position: 'relative',
                  minHeight: { xs: 390, md: 540 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  '& img': {
                    transition: 'transform 1.2s ease',
                  },
                  '&:hover img': {
                    transform: 'scale(1.06)',
                  },
                }}
              >
                <Image
                  src={VISUAL_ASSETS.hero.src}
                  alt={VISUAL_ASSETS.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(20,24,48,0.1) 0%, rgba(20,24,48,0.82) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 18, md: 28 },
                    right: { xs: 18, md: 28 },
                    bottom: { xs: 18, md: 28 },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      px: 2,
                      py: 1,
                      display: 'inline-flex',
                      borderRadius: 999,
                      backgroundColor: 'rgba(255,255,255,0.16)',
                      backdropFilter: 'blur(12px)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                    }}
                  >
                    Live coding labs + mentor feedback
                  </Box>
                  <Grid container spacing={2}>
                    {STATS.map((stat, idx) => (
                      <Grid size={{ xs: 6 }} key={idx}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 }}
                        >
                      <Box
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '16px',
                          p: 3,
                          textAlign: 'center',
                          border: '1px solid rgba(255,255,255,0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            transform: 'translateY(-5px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 900,
                            mb: 1,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
