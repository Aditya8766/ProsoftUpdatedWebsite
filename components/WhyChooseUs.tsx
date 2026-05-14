'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { FEATURES, VISUAL_ASSETS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyChooseUs() {
  return (
    <Box id="why-choose-us" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
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
              Why ProSoft?
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              What Makes Us Different
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontSize: '1rem', lineHeight: 1.6 }}
            >
              We combine live training, real projects, and placement support to ensure every student succeeds.
            </Typography>
          </Stack>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {FEATURES.map((feature, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3.5,
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e0e0e0',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(102,126,234,0.15)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        fontSize: '3rem',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontSize: '1.2rem',
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        minHeight: 50,
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Details */}
                    <Stack spacing={1} sx={{ mt: 'auto' }}>
                      {feature.details.map((detail, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            color: 'success.main',
                            fontWeight: 500,
                          }}
                        >
                          ✓ {detail}
                        </Typography>
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Internship and Placement Story */}
        <Grid container spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
          {[
            {
              title: 'Internship-ready project collaboration',
              desc: 'Students practice standups, code reviews, task breakdowns, and delivery habits before they enter real internships.',
              image: VISUAL_ASSETS.internship,
            },
            {
              title: 'Placement preparation with interview confidence',
              desc: 'Mock interviews, resume reviews, aptitude drills, and role-specific guidance help students walk into hiring rounds prepared.',
              image: VISUAL_ASSETS.placement,
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 24px 60px rgba(16,24,40,0.12)',
                  '& img': { transition: 'transform 1s ease' },
                  '&:hover img': { transform: 'scale(1.05)' },
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 230, md: 280 } }}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    quality={70}
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.58))',
                    }}
                  />
                </Box>
                <Box sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.2, fontSize: '1.25rem' }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4 },
              backgroundColor: 'white',
              borderRadius: 3,
              border: '2px solid primary.main',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
                fontSize: '1.3rem',
              }}
            >
              Our Commitment to Your Success
            </Typography>

            <Grid container spacing={3}>
              {[
                {
                  icon: '🎯',
                  title: 'Career-Focused',
                  desc: 'Every course is designed keeping job requirements in mind',
                },
                {
                  icon: '👥',
                  title: 'Small Batch Size',
                  desc: 'Limited students per batch for personalized attention',
                },
                {
                  icon: '⚡',
                  title: 'Industry Mentors',
                  desc: 'Learn from professionals actively working in the industry',
                },
                {
                  icon: '🔄',
                  title: 'Flexible Batches',
                  desc: 'Multiple start dates and timing options available',
                },
                {
                  icon: '💻',
                  title: 'Latest Tech Stack',
                  desc: 'Curriculum updated regularly with latest technologies',
                },
                {
                  icon: '🏆',
                  title: 'Lifetime Support',
                  desc: 'Continued support and placement assistance post-course',
                },
              ].map((benefit, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Stack spacing={1.5} direction="row" sx={{ alignItems: 'flex-start' }}>
                      <Typography sx={{ fontSize: '2rem' }}>
                        {benefit.icon}
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: '1rem',
                            mb: 0.5,
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}
                        >
                          {benefit.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
