'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const backImageRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (backImageRef.current && frontImageRef.current) {
        backImageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        frontImageRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div ref={backImageRef} className="hero-image-back">
        <Image
          src="/images/mon.png"
          alt="Mon"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div ref={frontImageRef} className="hero-image-front">
        <Image
          src="/images/montezz.png"
          alt="Montezz"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="hero-overlay" />
      
      {/* Button - no animations that cause movement */}
      <div className="hero-button-container">
        <button
          onClick={() => scrollToSection('contact')}
          className="hero-button"
        >
          LET'S GET IN TOUCH
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="hero-nav">
        <div className="nav-left">
          <div className="nav-item work" onClick={() => scrollToSection('studio')}>WORK</div>
          <div className="nav-item studio" onClick={() => scrollToSection('studio-original')}>STUDIO</div>
        </div>
        
        <div className="nav-right">
          <div className="nav-item news" onClick={() => scrollToSection('about')}>NEWS</div>
          <div className="nav-item contact" onClick={() => scrollToSection('contact')}>CONTACT</div>
        </div>
      </nav>
    </section>
  );
}