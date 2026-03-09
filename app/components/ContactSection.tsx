'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [emailHover, setEmailHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#111',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      padding: isMobile ? '2rem 1rem' : '0',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 50%, rgba(229, 198, 135, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Header Section - Mobile Optimized */}
      <div style={{
        height: isMobile ? '30vh' : '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(229, 198, 135, 0.2)',
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '0 1rem' : '0 2rem',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: isMobile ? 'clamp(2rem, 12vw, 3.5rem)' : 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: '400',
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          <motion.span
            animate={{ color: emailHover ? '#E5C687' : 'white' }}
            transition={{ duration: 0.3 }}
          >
            GET IN
          </motion.span>{' '}
          <motion.span
            animate={{ color: instagramHover || twitterHover || linkedinHover ? '#E5C687' : 'white' }}
            transition={{ duration: 0.3 }}
          >
            TOUCH
          </motion.span>
        </motion.h1>
      </div>

      {/* Content Section - Mobile Stacked Layout */}
      <div style={{
        height: isMobile ? 'auto' : '60%',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : '2rem',
        padding: isMobile ? '2rem 1rem' : '2.5rem 4rem',
        zIndex: 2,
        position: 'relative',
        alignItems: 'start',
      }}>
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderRight: isMobile ? 'none' : '1px solid rgba(229, 198, 135, 0.2)',
            paddingRight: isMobile ? '0' : '3rem',
            height: '100%',
            paddingTop: '0.5rem',
          }}
        >
          <h3 style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            letterSpacing: '0.3em',
            color: '#E5C687',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: '500',
          }}>
            CONTACT
          </h3>

          <motion.a
            href="mailto:dottocharles26@gmail.com"
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
            onTouchStart={() => isMobile && setEmailHover(true)} // Mobile touch
            onTouchEnd={() => isMobile && setEmailHover(false)}
            whileHover={!isMobile ? { x: 8 } : {}}
            style={{
              fontFamily: 'CALID, ui-sans-serif, system-ui',
              fontSize: isMobile ? 'clamp(1.1rem, 5vw, 1.5rem)' : 'clamp(1.3rem, 2.5vw, 2.2rem)',
              fontWeight: '400',
              color: emailHover ? '#E5C687' : 'white',
              textDecoration: 'none',
              marginBottom: '1rem',
              lineHeight: '1.2',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'color 0.2s ease',
              textShadow: '0 2px 5px rgba(0,0,0,0.2)',
              padding: isMobile ? '12px 0' : '0', // Larger touch target
            }}
          >
            dottocharles26
            <br />
            @gmail.com
          </motion.a>

          <motion.a
            href="tel:+255694045294"
            whileHover={!isMobile ? { x: 8 } : {}}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: 'CALID, ui-sans-serif, system-ui',
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              fontWeight: '400',
              color: '#ffffff',
              textDecoration: 'none',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'color 0.2s ease',
              opacity: 0.9,
              padding: isMobile ? '12px 0' : '0',
            }}
            onMouseEnter={(e) => !isMobile && (e.currentTarget.style.color = '#E5C687')}
            onMouseLeave={(e) => !isMobile && (e.currentTarget.style.color = '#ffffff')}
            onTouchStart={() => {
              if (isMobile) {
                const element = document.getElementById('phone-number');
                if (element) element.style.color = '#E5C687';
              }
            }}
            onTouchEnd={() => {
              if (isMobile) {
                const element = document.getElementById('phone-number');
                if (element) element.style.color = '#ffffff';
              }
            }}
            id="phone-number"
          >
            +255 694 045 294
          </motion.a>

          <p style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '0.5rem',
            letterSpacing: '0.05em',
            borderLeft: '2px solid #E5C687',
            paddingLeft: '1rem',
          }}>
            Tanzania | Since 2021
          </p>
        </motion.div>

        {/* Right Column - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: isMobile ? '0' : '1rem',
            height: '100%',
            paddingTop: '0.5rem',
          }}
        >
          <h3 style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            letterSpacing: '0.3em',
            color: '#E5C687',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: '500',
          }}>
            SOCIALS
          </h3>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? '0.5rem' : '1.2rem' 
          }}>
            {/* Instagram Link */}
            <motion.a
              href="https://www.instagram.com/1_creativedesign?igsh=MTA2ZHp4dHBxcjZucg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setInstagramHover(true)}
              onMouseLeave={() => setInstagramHover(false)}
              onTouchStart={() => isMobile && setInstagramHover(true)}
              onTouchEnd={() => isMobile && setInstagramHover(false)}
              whileHover={!isMobile ? { x: 8 } : {}}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: isMobile ? '1.2rem' : '1.6rem',
                fontWeight: '400',
                color: instagramHover ? '#E5C687' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
                padding: isMobile ? '12px 0' : '0',
              }}
            >
              <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
              INSTAGRAM
            </motion.a>

            {/* Twitter Link */}
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTwitterHover(true)}
              onMouseLeave={() => setTwitterHover(false)}
              onTouchStart={() => isMobile && setTwitterHover(true)}
              onTouchEnd={() => isMobile && setTwitterHover(false)}
              whileHover={!isMobile ? { x: 8 } : {}}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: isMobile ? '1.2rem' : '1.6rem',
                fontWeight: '400',
                color: twitterHover ? '#E5C687' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
                padding: isMobile ? '12px 0' : '0',
              }}
            >
              <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
              TWITTER
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/francis-charles-15219a3b1"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
              onTouchStart={() => isMobile && setLinkedinHover(true)}
              onTouchEnd={() => isMobile && setLinkedinHover(false)}
              whileHover={!isMobile ? { x: 8 } : {}}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: isMobile ? '1.2rem' : '1.6rem',
                fontWeight: '400',
                color: linkedinHover ? '#E5C687' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
                padding: isMobile ? '12px 0' : '0',
              }}
            >
              <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
              LINKEDIN
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          bottom: isMobile ? '1rem' : '1.5rem',
          left: isMobile ? '1rem' : '4rem',
          right: isMobile ? '1rem' : '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: isMobile ? '2rem' : '1rem',
          borderTop: '1px solid rgba(229, 198, 135, 0.2)',
          color: 'rgba(255,255,255,0.7)',
          fontFamily: 'CALID, ui-sans-serif, system-ui',
          fontSize: isMobile ? '0.7rem' : '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          zIndex: 3,
          marginTop: isMobile ? '1rem' : '0',
        }}
      >
        <span 
          onClick={scrollToTop} 
          style={{ 
            cursor: 'pointer', 
            transition: 'color 0.2s ease',
            color: 'rgba(255,255,255,0.7)',
            padding: isMobile ? '12px 0' : '0',
          }}
          onMouseEnter={(e) => !isMobile && (e.currentTarget.style.color = '#E5C687')}
          onMouseLeave={(e) => !isMobile && (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onTouchStart={(e) => {
            if (isMobile) e.currentTarget.style.color = '#E5C687';
          }}
          onTouchEnd={(e) => {
            if (isMobile) e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
          }}
        >
          BACK TO TOP ↑
        </span>
      </motion.div>

      {/* Hide vertical text on mobile */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)',
          writingMode: 'vertical-rl',
          fontFamily: 'CALID, ui-sans-serif, system-ui',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          color: 'rgba(229, 198, 135, 0.3)',
          textTransform: 'uppercase',
          zIndex: 3,
        }}>
          * GRAPHIC & WEB DESIGN
        </div>
      )}
    </section>
  );
}