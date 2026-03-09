'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Your images with correct paths
  const projects = [
    { id: 1, image: 'image 1.jpg' },
    { id: 2, image: 'image 2.png' },
    { id: 3, image: 'image 3.jpg' },
    { id: 4, image: 'image 4.png' },
    { id: 5, image: 'image 5.png' },
    { id: 6, image: 'image 6.png' },
    { id: 7, image: 'image 7.png' },
    { id: 8, image: 'image 8.png' },
    { id: 9, image: 'image 9.png' },
    { id: 10, image: 'image 10.png' },
    { id: 11, image: 'image 11.png' },
    { id: 12, image: 'image 12.png' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP reveal animation for the title
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Split images into three rows
  const row1 = projects.slice(0, 4);
  const row2 = projects.slice(4, 8);
  const row3 = projects.slice(8, 12);

  // Duplicate images for seamless loop (more duplicates for smoother loop on mobile)
  const duplicateCount = isMobile ? 6 : 3;
  const row1Images = [...row1, ...row1, ...row1, ...(isMobile ? [...row1, ...row1] : [])];
  const row2Images = [...row2, ...row2, ...row2, ...(isMobile ? [...row2, ...row2] : [])];
  const row3Images = [...row3, ...row3, ...row3, ...(isMobile ? [...row3, ...row3] : [])];

  // Handle image error
  const handleImageError = (projectId: number, e: any) => {
    console.error(`Image failed to load: /images/image ${projectId}.jpg/png`);
    setImageError(prev => ({...prev, [projectId]: true}));
    
    // Try alternative extension
    const img = e.target;
    const currentSrc = img.src;
    if (currentSrc.includes('.jpg')) {
      img.src = currentSrc.replace('.jpg', '.png');
    } else if (currentSrc.includes('.png')) {
      img.src = currentSrc.replace('.png', '.jpg');
    }
  };

  // Calculate animation distances based on viewport
  const getAnimationDistance = () => {
    if (isMobile) return -3000;
    return -2000;
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="projects-section-marquee"
      style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
      }}
    >
      <div className="projects-container-marquee">
        <h2 
          ref={titleRef} 
          className="projects-title-marquee"
          style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: isMobile ? '2rem' : '5rem',
          }}
        >
          FEATURED WORK
        </h2>
        
        <div className="marquee-wrapper" style={{ gap: isMobile ? '0.8rem' : '1.5rem' }}>
          {/* Row 1 - Left to Right */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, getAnimationDistance()] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isMobile ? 20 : 30, // Faster on mobile
                  ease: "linear",
                },
              }}
              style={{ gap: isMobile ? '0.8rem' : '1.5rem' }}
            >
              {row1Images.map((project, index) => (
                <div 
                  key={`row1-${project.id}-${index}`} 
                  className="marquee-item"
                  style={{
                    width: isMobile ? '150px' : '280px',
                    height: isMobile ? '150px' : '280px',
                  }}
                >
                  {!imageError[project.id] ? (
                    <Image
                      src={`/images/${project.image}`}
                      alt={`Project ${project.id}`}
                      fill
                      className="marquee-image"
                      sizes={isMobile ? '150px' : '300px'}
                      priority={index < 4}
                      onError={(e) => handleImageError(project.id, e)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E5C687',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                    }}>
                      Project {project.id}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [getAnimationDistance(), 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isMobile ? 25 : 35,
                  ease: "linear",
                },
              }}
              style={{ gap: isMobile ? '0.8rem' : '1.5rem' }}
            >
              {row2Images.map((project, index) => (
                <div 
                  key={`row2-${project.id}-${index}`} 
                  className="marquee-item"
                  style={{
                    width: isMobile ? '150px' : '280px',
                    height: isMobile ? '150px' : '280px',
                  }}
                >
                  {!imageError[project.id] ? (
                    <Image
                      src={`/images/${project.image}`}
                      alt={`Project ${project.id}`}
                      fill
                      className="marquee-image"
                      sizes={isMobile ? '150px' : '300px'}
                      onError={(e) => handleImageError(project.id, e)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E5C687',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                    }}>
                      Project {project.id}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Left to Right */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, getAnimationDistance()] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isMobile ? 18 : 25,
                  ease: "linear",
                },
              }}
              style={{ gap: isMobile ? '0.8rem' : '1.5rem' }}
            >
              {row3Images.map((project, index) => (
                <div 
                  key={`row3-${project.id}-${index}`} 
                  className="marquee-item"
                  style={{
                    width: isMobile ? '150px' : '280px',
                    height: isMobile ? '150px' : '280px',
                  }}
                >
                  {!imageError[project.id] ? (
                    <Image
                      src={`/images/${project.image}`}
                      alt={`Project ${project.id}`}
                      fill
                      className="marquee-image"
                      sizes={isMobile ? '150px' : '300px'}
                      onError={(e) => handleImageError(project.id, e)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E5C687',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                    }}>
                      Project {project.id}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="projects-meta-marquee" style={{
          marginTop: isMobile ? '1.5rem' : '2rem',
          fontSize: isMobile ? '0.8rem' : '0.9rem',
          gap: isMobile ? '1rem' : '1.5rem',
        }}>
          <span className="meta-number">02</span>
          <span className="meta-line" style={{ width: isMobile ? '40px' : '60px' }}></span>
          <span className="meta-text">{projects.length} PROJECTS</span>
        </div>
      </div>
    </section>
  );
}