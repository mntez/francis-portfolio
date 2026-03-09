'use client';

import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface StudioStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const studioSteps: StudioStep[] = [
  {
    id: 1,
    title: "DISCOVERY",
    description: "We begin by understanding your vision, goals, and brand identity through in-depth consultation and research.",
    image: "/images/image 12.png"
  },
  {
    id: 2,
    title: "CONCEPT",
    description: "Our creative team develops initial concepts and mood boards that align with your brand's aesthetic.",
    image: "/images/image 1.jpg"
  },
  {
    id: 3,
    title: "DESIGN",
    description: "We craft unique visual solutions, refining details until every element perfectly represents your brand.",
    image: "/images/image 11.png"
  },
  {
    id: 4,
    title: "DELIVERY",
    description: "Final assets are prepared and delivered with comprehensive guidelines for consistent brand implementation.",
    image: "/images/image 1.jpg"
  }
];

// Fixed textVariants with proper easing (USING STRINGS, NOT ARRAYS)
const textVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: "easeOut"  // Changed from array to string
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    filter: "blur(10px)",
    transition: { 
      duration: 0.4,
      ease: "easeIn"   // Changed from array to string
    }
  }
};

// Fixed imageVariants with proper easing (USING STRINGS, NOT ARRAYS)
const imageVariants: Variants = {
  initial: { 
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)"
  },
  animate: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: "easeOut"  // Changed from array to string
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    transition: { 
      duration: 0.5,
      ease: "easeIn"   // Changed from array to string
    }
  }
};

export default function StudioSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % studioSteps.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="studio" style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#111',
      color: 'white',
      padding: '6rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 30%, rgba(229, 198, 135, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '400',
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            THE <span style={{ color: '#E5C687' }}>STUDIO</span>
          </h2>
          <p style={{
            fontFamily: 'CALID, ui-sans-serif, system-ui',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            lineHeight: '1.6',
          }}>
            Where creativity meets precision. Our studio process ensures every project 
            receives meticulous attention from concept to completion.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left side - Steps */}
          <div>
            {studioSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  marginBottom: '2rem',
                  cursor: 'pointer',
                  opacity: activeStep === index ? 1 : 0.5,
                }}
                onClick={() => setActiveStep(index)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'CALID, ui-sans-serif, system-ui',
                    fontSize: '1rem',
                    color: '#E5C687',
                    letterSpacing: '0.2em',
                  }}>
                    0{step.id}
                  </span>
                  <h3 style={{
                    fontFamily: 'CALID, ui-sans-serif, system-ui',
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    color: 'white',
                    margin: 0,
                  }}>
                    {step.title}
                  </h3>
                </div>

                {/* Progress bar for active step */}
                {activeStep === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                    style={{
                      height: '2px',
                      backgroundColor: '#E5C687',
                      marginLeft: '3.5rem',
                    }}
                  />
                )}

                {/* Description with fixed variants */}
                <motion.p
                  key={`description-${step.id}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    fontFamily: 'CALID, ui-sans-serif, system-ui',
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.6',
                    marginTop: '0.75rem',
                    marginLeft: '3.5rem',
                    maxWidth: '400px',
                  }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Right side - Image with fixed variants */}
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {studioSteps.map((step, index) => (
              <motion.div
                key={`image-${step.id}`}
                variants={imageVariants}
                initial="initial"
                animate={activeStep === index ? "animate" : "exit"}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        left: '1.5rem',
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
        * SINCE 2021
      </div>
    </section>
  );
}