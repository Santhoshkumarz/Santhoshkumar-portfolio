import HeroSection from "./components/homepage/hero-section";
import Stats from "./components/homepage/stats";
import AboutSection from "./components/homepage/about";
import AiHighlights from "./components/homepage/ai-highlights";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import { certificateData } from "../utils/data/certificates";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <AboutSection />
      <AiHighlights />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog certificate={certificateData} />
      <ContactSection />
    </>
  );
}
