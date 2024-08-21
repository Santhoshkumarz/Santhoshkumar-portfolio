// pages/index.js
'use client';

import { useState, useEffect } from 'react';
import AboutSection from './components/homepage/about'
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';
import { certificateData } from '../utils/data/certificates'; // Adjust the path as needed

export default function Home() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    setCertificates(certificateData);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog certificate={certificates} />
      <ContactSection />
    </>
  );
}
