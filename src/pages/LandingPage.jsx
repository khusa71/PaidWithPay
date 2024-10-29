import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Stats } from '@/components/landing/Stats';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';
import { Security } from '@/components/landing/Security';
import { Contact } from '@/components/landing/Contact';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="landing" />
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}