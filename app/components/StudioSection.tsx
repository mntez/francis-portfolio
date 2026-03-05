'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "DISCOVERY",
      description: "We begin by understanding your vision, goals, and the story you want to tell. Research and strategy phase.",
      image: "/images/image 12.png"
    },
    {
      id: 2,
      title: "CONCEPT",
      description: "Creating mood boards, sketches, and initial concepts that capture the essence of your brand.",
      image: "/images/image 1.jpg"
    },
    {
      id: 3,
      title: "DESIGN",
      description: "Crafting the visual language, refining details, and building the digital experience.",
      image: "/images/image 11.png"
    },
    {
      id: 4,
      title: "DELIVER",
      description: "Final polish, testing, and launching your project into the world with care.",
      image: "/images/image 1.jpg"
    }
  ];

  const currentStep = steps.find(step => step.id === hoveredStep);

  // Animation variants - fixed structure
  const textVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(3px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      } 
    },
    exit: { 
      opacity: 0, 
      y: 5, 
      filter: "blur(3px)",
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section id="studio" className="projects-section">
      <div className="projects-container">
        {/* LEFT SIDE - PROCESS NUMBERS */}
        <div className="projects-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="projects-subtitle"
          >
            THE PROCESS
          </motion.h2>
          
          <div className="projects-list">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`projects-item ${hoveredStep === step.id ? 'expanded' : ''}`}
              >
                <motion.span
                  animate={{ 
                    color: hoveredStep === step.id ? '#E5C687' : 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="projects-number"
                >
                  {step.id.toString().padStart(2, '0')}
                </motion.span>
                
                <div className="projects-content">
                  <motion.h3
                    animate={{ 
                      color: hoveredStep === step.id ? '#E5C687' : 'white',
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`projects-title ${hoveredStep === step.id ? 'with-margin' : ''}`}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <AnimatePresence mode="wait">
                    {hoveredStep === step.id && (
                      <motion.p
                        key={`description-${step.id}`}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="projects-description"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="projects-image-container">
          <AnimatePresence mode="wait">
            {currentStep && (
              <motion.div
                key={hoveredStep}
                initial={{ 
                  x: 400, 
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)"
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  x: -400, 
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)"
                }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 0.8,
                }}
                className="projects-image-wrapper"
              >
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
