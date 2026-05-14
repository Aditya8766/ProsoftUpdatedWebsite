'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Stack, Card } from '@mui/material';
import { COMPANY_INFO, VISUAL_ASSETS } from '@/lib/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                fontSize: '1rem',
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              Why Choose ProSoft Institute?
            </Typography>
          </Stack>
        </motion.div>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={3}
                sx={{
                  height: '100%',
                  minHeight: { md: 420 },
                  justifyContent: 'center',
                  p: { xs: 0, md: 4 },
                  borderRadius: 4,
                  backgroundColor: { xs: 'transparent', md: 'white' },
                  boxShadow: { xs: 'none', md: '0 24px 60px rgba(16,24,40,0.08)' },
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: '1.3rem' }}>
                    Practical IT Training & Placement Focused
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                    {COMPANY_INFO.description}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1rem' }}>
                    What We Offer
                  </Typography>
                  <Stack spacing={1.2}>
                    {[
                      '📞 Course & Admission Support',
                      '✉️ Get Syllabus & Fee Details',
                      '💬 Instant WhatsApp Assistance',
                      '🎯 Real Project Experience',
                      '📚 Live Mentor-Led Sessions',
                      '💼 Placement Guarantee Support',
                    ].map((item, idx) => (
                      <Typography key={idx} sx={{ fontSize: '0.95rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    📍 Location: {COMPANY_INFO.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    🕐 {COMPANY_INFO.hours}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 320, md: 420 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(16,24,40,0.16)',
                '& img': {
                  transition: 'transform 1s ease',
                },
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Image
                src={VISUAL_ASSETS.about.src}
                alt={VISUAL_ASSETS.about.alt}
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
                quality={72}
                style={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(20,24,48,0.62) 100%)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: 24,
                  right: 24,
                  bottom: 24,
                  color: 'white',
                }}
              >
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.9, mb: 0.5 }}>
                  Mentor-guided learning
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.6rem' } }}>
                  Classroom support with real project conversations
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2.5} sx={{ mt: { xs: 4, md: 5 } }}>
              {[
                {
                  title: 'Live Training',
                  desc: 'Real-time interactive sessions with expert mentors',
                  icon: '👨‍🏫',
                },
                {
                  title: 'Real Projects',
                  desc: 'Build industry-standard projects for portfolio',
                  icon: '🚀',
                },
                {
                  title: 'Internship',
                  desc: 'Guidance and placement support throughout',
                  icon: '📋',
                },
                {
                  title: 'Interview Prep',
                  desc: 'Mock interviews and DSA training included',
                  icon: '💼',
                },
                {
                  title: 'Certificate',
                  desc: 'Recognized certification upon completion',
                  icon: '🏆',
                },
                {
                  title: 'Career Support',
                  desc: 'Placement assistance and career coaching',
                  icon: '📈',
                },
              ].map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
                  <motion.div
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>
                        {item.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
      </Container>
    </Box>
  );
}
