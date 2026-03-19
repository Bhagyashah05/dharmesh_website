import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import PortfolioSection from '../components/home/PortfolioSection';
import IndustriesSection from '../components/home/IndustriesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogPreviewSection from '../components/home/BlogPreviewSection';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <IndustriesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTABanner />
    </div>
  );
}
