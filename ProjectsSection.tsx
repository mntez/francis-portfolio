'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Your images
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

  // Duplicate images for seamless loop
  const row1Images = [...row1, ...row1, ...row1];
  const row2Images = [...row2, ...row2, ...row2];
  const row3Images = [...row3, ...row3, ...row3];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="projects-section-marquee"
    >
      <div className="projects-container-marquee">
        <h2 ref={titleRef} className="projects-title-marquee">FEATURED WORK</h2>
        
        <div className="marquee-wrapper">
          {/* Row 1 - Left to Right */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {row1Images.map((project, index) => (
                <div key={`row1-${project.id}-${index}`} className="marquee-item">
                  <Image
                    src={`/images/${project.image}`}
                    alt={`Project ${project.id}`}
                    fill
                    className="marquee-image"
                    sizes="300px"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [-2000, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {row2Images.map((project, index) => (
                <div key={`row2-${project.id}-${index}`} className="marquee-item">
                  <Image
                    src={`/images/${project.image}`}
                    alt={`Project ${project.id}`}
                    fill
                    className="marquee-image"
                    sizes="300px"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Left to Right */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {row3Images.map((project, index) => (
                <div key={`row3-${project.id}-${index}`} className="marquee-item">
                  <Image
                    src={`/images/${project.image}`}
                    alt={`Project ${project.id}`}
                    fill
                    className="marquee-image"
                    sizes="300px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="projects-meta-marquee">
          <span className="meta-number">02</span>
          <span className="meta-line"></span>
          <span className="meta-text">{projects.length} PROJECTS</span>
        </div>
      </div>
    </section>
  );
}