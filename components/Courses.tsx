'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Card, Stack, Button, Chip } from '@mui/material';
import { COURSES, COMPANY_INFO, VISUAL_ASSETS } from '@/lib/constants';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const courseImages = [
  VISUAL_ASSETS.courses,
  VISUAL_ASSETS.illustration,
  VISUAL_ASSETS.courses,
  VISUAL_ASSETS.cta,
  VISUAL_ASSETS.internship,
  VISUAL_ASSETS.placement,
];

export default function Courses() {
  const handleWhatsAppClick = () => {
    window.open(COMPANY_INFO.whatsapp, '_blank');
  };

  return (
    <Box id="courses" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
              Our Courses
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
                mb: 1,
              }}
            >
              Software Training Courses & Placement Programs
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontSize: '1rem', lineHeight: 1.6 }}
            >
              Job-oriented IT training, full stack courses, internships and placement preparation programs designed for computer and IT students.
            </Typography>
          </Stack>
        </motion.div>

        {/* Courses Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 3, md: 5 },
            alignItems: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.65rem', md: '2.1rem' },
                mb: 2,
              }}
            >
              Learn with the same tools teams use in production
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Every course blends guided lessons, code reviews, portfolio projects, interview practice, and internship-style collaboration so students can show real work, not just certificates.
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              height: { xs: 250, md: 340 },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(102,126,234,0.18)',
              '& img': { transition: 'transform 1s ease' },
              '&:hover img': { transform: 'scale(1.06)' },
            }}
          >
            <Image
              src={VISUAL_ASSETS.courses.src}
              alt={VISUAL_ASSETS.courses.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              quality={72}
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(102,126,234,0.18), rgba(118,75,162,0.62))',
              }}
            />
          </Box>
        </Box>
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' } }}>
            {COURSES.map((course, idx) => (
              <Box key={course.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 20px 50px rgba(102,126,234,0.2)',
                      },
                      '&:hover img': {
                        transform: 'scale(1.06)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                      <Image
                        src={courseImages[idx].src}
                        alt={`${course.title} visual - ${courseImages[idx].alt}`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                        quality={68}
                        style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.38) 100%)',
                        }}
                      />
                    </Box>
                    <Stack spacing={2} sx={{ p: 3, flex: 1 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        fontSize: '3rem',
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {course.icon}
                    </Box>

                    {/* Title & Description */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          mb: 1,
                          fontSize: '1.15rem',
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6, minHeight: 50 }}
                      >
                        {course.description}
                      </Typography>
                    </Box>

                    {/* Topics */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          fontSize: '0.85rem',
                          color: 'primary.main',
                        }}
                      >
                        Key Topics:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {course.topics.slice(0, 3).map((topic, idx) => (
                          <Chip
                            key={idx}
                            label={topic}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Details */}
                    <Stack spacing={1} sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        ⏱️ Duration: <strong>{course.duration}</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        📊 Level: <strong>{course.level}</strong>
                      </Typography>
                    </Stack>

                    {/* Highlights */}
                    <Stack spacing={0.8} sx={{ mb: 2 }}>
                      {course.highlights.map((highlight, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'success.main',
                          }}
                        >
                          ✓ {highlight}
                        </Typography>
                      ))}
                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="contained"
                        size="small"
                        startIcon={<FaWhatsapp />}
                        sx={{
                          backgroundColor: '#25d366',
                          flex: 1,
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#1da853',
                          },
                        }}
                      >
                        Enquire
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<FaArrowRight size={14} />}
                        sx={{
                          flex: 1,
                          textTransform: 'none',
                          fontWeight: 600,
                        }}
                      >
                        Learn More
                      </Button>
                    </Stack>
                    </Stack>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              color: 'white',
              backgroundColor: 'primary.main',
              boxShadow: '0 24px 60px rgba(102,126,234,0.24)',
            }}
          >
            <Image
              src={VISUAL_ASSETS.cta.src}
              alt={VISUAL_ASSETS.cta.alt}
              fill
              sizes="100vw"
              quality={70}
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background: 'linear-gradient(135deg, rgba(102,126,234,0.88), rgba(20,24,48,0.86))',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Not Sure Which Course to Choose?
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1rem' }}>
              Chat with our counselors and get personalized course recommendation
            </Typography>
            <Button
              onClick={handleWhatsAppClick}
              variant="contained"
              size="large"
              startIcon={<FaWhatsapp />}
              sx={{
                backgroundColor: '#25d366',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1.2,
                '&:hover': {
                  backgroundColor: '#1da853',
                },
              }}
            >
              Get Free Counseling
            </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
