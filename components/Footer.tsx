'use client';

import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Stack, Link, Divider } from '@mui/material';
import { COMPANY_INFO, TECHNOLOGIES, VISUAL_ASSETS } from '@/lib/constants';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#1a1a2e', color: 'white' }}>
      <Container maxWidth="lg">
        {/* Main Footer */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      fontSize: '1.3rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ProSoft Institute
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ lineHeight: 1.6 }}>
                    Professional IT training and placement institute in Pune, Bibewadi. Transforming careers, one student at a time.
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    {[
                      { icon: FaFacebook, url: '#' },
                      { icon: FaInstagram, url: '#' },
                      { icon: FaLinkedin, url: '#' },
                      { icon: FaTwitter, url: '#' },
                      { icon: FaYoutube, url: '#' },
                    ].map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: '#667eea',
                            transform: 'translateY(-3px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <social.icon size={20} />
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Stack spacing={1.5}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', mb: 1 }}>
                    Quick Links
                  </Typography>
                  {['Courses', 'About Us', 'Testimonials', 'FAQ', 'Contact'].map((link, idx) => (
                    <Link
                      key={idx}
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: '#667eea',
                          paddingLeft: '8px',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Courses */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Stack spacing={1.5}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', mb: 1 }}>
                    Courses
                  </Typography>
                  {['Full-Stack', 'Python', 'Frontend', 'C/C++', 'Internship'].map((course, idx) => (
                    <Link
                      key={idx}
                      href="#courses"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: '#667eea',
                          paddingLeft: '8px',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {course}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Stack spacing={1.5}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', mb: 1 }}>
                    Contact
                  </Typography>
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      📍 Location
                    </Typography>
                    <Typography
                      color="rgba(255,255,255,0.7)"
                      sx={{ fontSize: '0.85rem' }}
                    >
                      {COMPANY_INFO.location}, Pune
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      📞 Phone
                    </Typography>
                    <Link
                      href={`tel:${COMPANY_INFO.phone}`}
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        '&:hover': { color: '#667eea' },
                      }}
                    >
                      {COMPANY_INFO.phone}
                    </Link>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      ✉️ Email
                    </Typography>
                    <Link
                      href={`mailto:${COMPANY_INFO.email}`}
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        '&:hover': { color: '#667eea' },
                      }}
                    >
                      {COMPANY_INFO.email}
                    </Link>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      🕐 Hours
                    </Typography>
                    <Typography
                      color="rgba(255,255,255,0.7)"
                      sx={{ fontSize: '0.85rem' }}
                    >
                      {COMPANY_INFO.hours}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Technologies */}
        <Box sx={{ py: 4 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '0.95rem',
                mb: 2,
                textAlign: 'center',
              }}
            >
              Technologies We Teach
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1.5,
              }}
            >
              {TECHNOLOGIES.map((tech, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: 2,
                    py: 0.8,
                    backgroundColor: 'rgba(102,126,234,0.1)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    border: '1px solid rgba(102,126,234,0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(102,126,234,0.2)',
                      borderColor: '#667eea',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.6)"
            sx={{ fontSize: '0.85rem' }}
          >
            © {currentYear} ProSoft Institute • Training & Placement • All Rights Reserved
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.55)"
            sx={{ fontSize: '0.78rem' }}
          >
            Visuals from Pexels, Unsplash, Pixabay and{' '}
            <Link
              href={VISUAL_ASSETS.illustration.source}
              target="_blank"
              rel="noopener"
              sx={{
                color: 'rgba(255,255,255,0.68)',
                textDecoration: 'none',
                '&:hover': { color: '#667eea' },
              }}
            >
              storyset on Freepik
            </Link>
          </Typography>
          <Stack direction="row" spacing={3} sx={{ fontSize: '0.85rem' }}>
            <Link
              href="#"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                '&:hover': { color: '#667eea' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                '&:hover': { color: '#667eea' },
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                '&:hover': { color: '#667eea' },
              }}
            >
              Sitemap
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
