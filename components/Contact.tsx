'use client';

import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    const text = `Hi ProSoft, I'm interested in your courses.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`${COMPANY_INFO.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
              Get In Touch
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
              }}
            >
              Contact ProSoft Institute
            </Typography>
          </Stack>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={3}>
                {/* Contact Card Items */}
                {[
                  {
                    icon: <FaPhone size={24} />,
                    title: 'Call Us',
                    desc: COMPANY_INFO.phone,
                    action: `tel:${COMPANY_INFO.phone}`,
                  },
                  {
                    icon: <FaEnvelope size={24} />,
                    title: 'Email Us',
                    desc: COMPANY_INFO.email,
                    action: `mailto:${COMPANY_INFO.email}`,
                  },
                  {
                    icon: <FaWhatsapp size={24} />,
                    title: 'WhatsApp',
                    desc: 'Chat with us instantly',
                    action: COMPANY_INFO.whatsapp,
                  },
                  {
                    icon: <FaMapMarkerAlt size={24} />,
                    title: 'Location',
                    desc: COMPANY_INFO.location + ', Pune',
                    action: '#',
                  },
                ].map((contact, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(8px)',
                          boxShadow: '0 10px 30px rgba(102,126,234,0.15)',
                        },
                      }}
                      onClick={() => window.open(contact.action, '_blank')}
                    >
                      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: 40,
                          }}
                        >
                          {contact.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '1rem',
                              mb: 0.5,
                            }}
                          >
                            {contact.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.9rem' }}
                          >
                            {contact.desc}
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Card sx={{ p: 3, borderRadius: 2, bgcolor: 'primary.light' }}>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>
                      🕐 Office Hours
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                      {COMPANY_INFO.hours}
                    </Typography>
                  </Card>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form & Map */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={3}>
                {/* Form */}
                <Card sx={{ p: 3.5, borderRadius: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Send Us a Message
                  </Typography>

                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Your Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 1.5,
                        },
                      }}
                    />
                  </Stack>

                  <Stack direction="row" spacing={1.5} sx={{ mt: 2.5 }}>
                    <Button
                      onClick={handleWhatsAppSubmit}
                      variant="contained"
                      fullWidth
                      startIcon={<FaWhatsapp />}
                      sx={{
                        backgroundColor: '#25d366',
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1.2,
                        '&:hover': {
                          backgroundColor: '#1da853',
                        },
                      }}
                    >
                      Send via WhatsApp
                    </Button>
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 2,
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    We&apos;ll respond within 2 hours during business hours
                  </Typography>
                </Card>

                {/* Map */}
                <Card sx={{ borderRadius: 2, overflow: 'hidden', height: 300 }}>
                  <iframe
                    src="https://www.google.com/maps?q=18.4802303,73.8734808&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Card>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
