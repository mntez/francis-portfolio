'use client';

import { useState, useEffect } from 'react';
import Hero from "./components/HeroSection"
import Loader from "./components/LoadingAnimation"
import Description from "./components/DescriptionSection"
import Projects from "./components/ProjectsSection"
import Studio from "./components/StudioSection"
import Contact from "./components/ContactSection"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="page-container">
      <div className="page-reveal">
        <Hero />
        <Description />
        <Projects />
        <Studio />
        <Contact />
      </div>
    </main>
  )
}