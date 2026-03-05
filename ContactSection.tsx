'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactSection() {
  const [emailHover, setEmailHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [behanceHover, setBehanceHover] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#111',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
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

      <div style={{
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(229, 198, 135, 0.2)',
        position: 'relative',
        zIndex: 2,
        padding: '0 2rem',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
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
            animate={{ color: instagramHover || twitterHover || behanceHover ? '#E5C687' : 'white' }}
            transition={{ duration: 0.3 }}
          >
            TOUCH
          </motion.span>
        </motion.h1>
      </div>

      <div style={{
        height: '60%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        padding: '2.5rem 4rem',
        zIndex: 2,
        position: 'relative',
        alignItems: 'start',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderRight: '1px solid rgba(229, 198, 135, 0.2)',
            paddingRight: '3rem',
            height: '100%',
            paddingTop: '0.5rem',
          }}
        >
          <h3 style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: '0.85rem',
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
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: 'CALID, ui-sans-serif, system-ui',
              fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
              fontWeight: '400',
              color: emailHover ? '#E5C687' : 'white',
              textDecoration: 'none',
              marginBottom: '1rem',
              lineHeight: '1.2',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'color 0.2s ease',
              textShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
          >
            dottocharles26
            <br />
            @gmail.com
          </motion.a>

          <motion.a
            href="tel:+255694045294"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: 'CALID, ui-sans-serif, system-ui',
              fontSize: '1.3rem',
              fontWeight: '400',
              color: '#ffffff',
              textDecoration: 'none',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'color 0.2s ease',
              opacity: 0.9,
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E5C687'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
          >
            +255 694 045 294
          </motion.a>

          <p style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '0.5rem',
            letterSpacing: '0.05em',
            borderLeft: '2px solid #E5C687',
            paddingLeft: '1rem',
          }}>
            Tanzania | Since 2021
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: '1rem',
            height: '100%',
            paddingTop: '0.5rem',
          }}
        >
          <h3 style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            color: '#E5C687',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: '500',
          }}>
            SOCIALS
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <motion.a
              href="#"
              onMouseEnter={() => setInstagramHover(true)}
              onMouseLeave={() => setInstagramHover(false)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: '1.6rem',
                fontWeight: '400',
                color: instagramHover ? '#E5C687' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }}
            >
              <Link href="https://www.instagram.com/1_creativedesign?igsh=MTA2ZHp4dHBxcjZucg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
                INSTAGRAM
              </Link>
            </motion.a>

            <motion.a
              
              onMouseEnter={() => setTwitterHover(true)}
              onMouseLeave={() => setTwitterHover(false)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: '1.6rem',
                fontWeight: '400',
                color: twitterHover ? '#E5C687' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }}
            >
              <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
              TWITTER
            </motion.a>

            

            <motion.a
              href="#"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'CALID, ui-sans-serif, system-ui',
                fontSize: '1.6rem',
                fontWeight: '400',
                color: '#ffffff',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'color 0.2s ease',
                opacity: 0.9,
                textShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E5C687'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
               <Link href="https://www.linkedin.com/in/francis-charles-15219a3b1" target="_blank" rel="noopener noreferrer">
                <span style={{ fontSize: '1rem', color: '#E5C687' }}>—</span>
                LINKEDIN
              </Link>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '4rem',
          right: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(229, 198, 135, 0.2)',
          color: 'rgba(255,255,255,0.7)',
          fontFamily: 'CALID, ui-sans-serif, system-ui',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          zIndex: 3,
        }}
      >
        
        
        <span 
          onClick={scrollToTop} 
          style={{ 
            cursor: 'pointer', 
            transition: 'color 0.2s ease',
            color: 'rgba(255,255,255,0.7)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#E5C687'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
          BACK TO TOP ↑
        </span>
      </motion.div>

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
    </section>
  );
}