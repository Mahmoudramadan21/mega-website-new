import type { Metadata } from 'next';

import RegisterClient from './RegisterClient';

// -----------------------------------------------------------------------------
// Metadata – optimized for SEO & social sharing
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'Register | Join MEGA Team',
  description:
    'Apply now to become part of the MEGA Team at Mansoura University. Work on real projects, learn cutting-edge technologies, and grow with a passionate community. Limited spots – submit your application today!',

  keywords: [
    'MEGA Team application',
    'join MEGA Mansoura',
    'MEGA Team recruitment',
    'Mansoura University tech team',
    'student tech team application',
  ],

  openGraph: {
    title: 'Join MEGA Team – Register Now',
    description:
      'Become a member of MEGA – the leading student tech team at Mansoura University. Real-world projects, workshops, and a strong community await you.',
    url: '/register',
    images: [
      {
        url: '/images/mega-team-apply-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MEGA Team Application – Join Us',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Register to Join MEGA Team',
    description:
      'Excited to build the future? Apply to MEGA Team now! Limited spots – don’t miss out.',
    images: ['/images/mega-team-apply-twitter.jpg'],
  },

  alternates: {
    canonical: 'https://megateam.vercel.app/register',
  },
};

// -----------------------------------------------------------------------------
// Page – minimal server component that delegates to client
// -----------------------------------------------------------------------------
export default function RegisterPage() {
  return <RegisterClient />;
}

// ISR: refresh once per hour (adjust according to application deadline urgency)
export const revalidate = 3600; // 1 hour