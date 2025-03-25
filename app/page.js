"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components that rely on client-side features
const HeroSection = dynamic(
  () => import("./components/homepage/hero-section"),
  { ssr: false }
);
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});
const Blog = dynamic(() => import("./components/homepage/blog"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});
const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});

import { certificateData } from "../utils/data/certificates"; // Adjust the path as needed

export default function Home() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setCertificates(certificateData);
      setLoading(false);
    }, 1000); // Simulating a delay for demonstration
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
