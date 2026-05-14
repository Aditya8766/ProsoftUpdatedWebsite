import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

export const generateMetadata = (): Metadata => {
  return {
    title: 'ProSoft Institute - Best Training & Placement Institute in Pune, Bibewadi',
    description: 'Professional IT training and placement institute in Pune. Live mentor-led coding, real projects, internships, and 95% placement success. Best training and placement institute in Bibewadi.',
    keywords: [
      'training and placement institute Pune',
      'best training institute Bibewadi',
      'software training Pune',
      'IT training Bibewadi',
      'placement institute Pune',
      'full stack development training',
      'internship programs Pune',
      'JavaScript training Pune',
      'React training Pune',
      'Python training institute',
      'programming courses Pune',
      'job placement coaching'
    ],
    metadataBase: new URL('https://prosoft.edu'),
    alternates: {
      canonical: 'https://prosoft.edu'
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: 'https://prosoft.edu',
      siteName: 'ProSoft Institute',
      title: 'ProSoft Institute - Best Training & Placement Institute in Pune',
      description: 'Live software training, real projects, internship programs, and 95% job placement success rate.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ProSoft Institute - Best Training and Placement Institute'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ProSoft Institute - Best Training & Placement Institute in Pune',
      description: 'Professional IT training with live mentors, real projects, internships & placements',
      images: ['/og-image.jpg']
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: 'google-site-verification-code', // Add actual verification code
    }
  };
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'ProSoft Institute',
  description: 'Job-oriented IT training and placement institute',
  url: 'https://prosoft.edu',
  logo: 'https://prosoft.edu/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bibewadi',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411037',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    availableLanguage: ['en']
  },
  sameAs: [
    'https://www.facebook.com/prosoft',
    'https://www.instagram.com/prosoft',
    'https://www.linkedin.com/company/prosoft'
  ],
  areaServed: ['Pune', 'Maharashtra', 'India'],
  hasOfferingType: 'ProfessionalService',
  knowsAbout: ['IT Training', 'Programming', 'Web Development', 'Data Science']
};

export const courseSchema = (courseName: string, courseDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: courseName,
  description: courseDescription,
  provider: {
    '@type': 'Organization',
    name: 'ProSoft Institute',
    sameAs: 'https://prosoft.edu'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://prosoft.edu/courses',
    priceCurrency: 'INR',
    price: '8000-25000',
    availability: 'https://schema.org/InStock'
  }
});
