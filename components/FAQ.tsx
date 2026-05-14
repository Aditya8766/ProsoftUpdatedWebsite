'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Stack } from '@mui/material';
import { FAQS, VISUAL_ASSETS } from '@/lib/constants';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
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
              FAQ
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontSize: '1rem', lineHeight: 1.6 }}
            >
              Have questions? We have answers. Get clarity on our courses, placements, and programs.
            </Typography>
          </Stack>
        </motion.div>

        {/* FAQs */}
        <Grid container spacing={3}>
          {FAQS.map((faq, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={faq.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Accordion
                  expanded={expanded === `panel${faq.id}`}
                  onChange={handleChange(`panel${faq.id}`)}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    mb: 1.5,
                    '&.Mui-expanded': {
                      margin: 0,
                    },
                    '&:before': {
                      display: 'none',
                    },
                    boxShadow: expanded === `panel${faq.id}` ? '0 8px 25px rgba(102,126,234,0.12)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FaChevronDown />}
                    sx={{
                      p: 2.5,
                      '&:hover': {
                        backgroundColor: 'rgba(102,126,234,0.02)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        pr: 2,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      p: 2.5,
                      pt: 0,
                      borderTop: '1px solid #e0e0e0',
                    }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4 },
              backgroundColor: 'primary.main',
              borderRadius: 3,
              color: 'white',
              boxShadow: '0 24px 60px rgba(102,126,234,0.22)',
            }}
          >
            <Image
              src={VISUAL_ASSETS.cta.src}
              alt={VISUAL_ASSETS.cta.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background: 'linear-gradient(135deg, rgba(20,24,48,0.9), rgba(102,126,234,0.78))',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Still Have Questions?
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1rem' }}>
              Our counselors are ready to help. Reach out for personalized guidance.
            </Typography>
            <Box
              sx={{
                fontSize: '0.95rem',
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
              <Box>📞 <strong>Call:</strong> +91 XXXXXXXXXX</Box>
              <Box>✉️ <strong>Email:</strong> contact@prosoft.edu</Box>
              <Box>💬 <strong>WhatsApp:</strong> Chat Now</Box>
            </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
