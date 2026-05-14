'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Card, Stack, Rating } from '@mui/material';
import { TESTIMONIALS, VISUAL_ASSETS } from '@/lib/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <Box id="testimonials" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
              Success Stories
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              What Our Students Say
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontSize: '1rem', lineHeight: 1.6 }}
            >
              Hear from our students who transformed their careers with ProSoft Institute
            </Typography>
          </Stack>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            gap: { xs: 3, md: 5 },
            alignItems: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              height: { xs: 260, md: 380 },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(16,24,40,0.14)',
              '& img': { transition: 'transform 1s ease' },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <Image
              src={VISUAL_ASSETS.testimonials.src}
              alt={VISUAL_ASSETS.testimonials.alt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(20,24,48,0.62) 100%)',
              }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
              A learning environment students can actually trust
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Real mentorship, peer practice, and placement-focused coaching create the confidence students mention again and again in their reviews.
            </Typography>
          </Box>
        </Box>

        {/* Testimonials Carousel */}
        <Box sx={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: 60 }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card
                    sx={{
                      p: 3.5,
                      height: '100%',
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(102,126,234,0.15)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    {/* Quote */}
                    <Typography
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        color: 'text.primary',
                        flex: 1,
                      }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </Typography>

                    {/* Rating */}
                    <Rating value={testimonial.rating} readOnly size="small" />

                    {/* Author Info */}
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          fontSize: '2.5rem',
                          width: 50,
                          height: 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'primary.light',
                          borderRadius: '50%',
                        }}
                      >
                        {testimonial.image}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.95rem',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.85rem' }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Styles */}
          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #667eea;
              width: 45px;
              height: 45px;
              background-color: rgba(102, 126, 234, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 18px;
              font-weight: bold;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: #667eea;
              color: white;
            }

            .swiper-pagination-bullet {
              background-color: #ccc;
            }

            .swiper-pagination-bullet-active {
              background-color: #667eea;
            }
          `}</style>
        </Box>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {[
              { label: 'Happy Students', value: '500+' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Avg Package', value: '4-6 LPA' },
              { label: 'Companies', value: '50+' },
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: 'primary.light',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
