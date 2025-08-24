import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
