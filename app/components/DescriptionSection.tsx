'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export default function DescriptionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const oliveColor = '#6B8E23';

    class Line {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      speed: number;
      life: number;
      maxLife: number;
      width: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x1 = Math.random() * canvasWidth;
        this.y1 = Math.random() * canvasHeight;
        this.x2 = Math.random() * canvasWidth;
        this.y2 = Math.random() * canvasHeight;
        this.opacity = Math.random() * 0.2 + 0.1;
        this.speed = Math.random() * 0.3 + 0.1;
        this.maxLife = 150 + Math.random() * 100;
        this.life = this.maxLife;
        this.width = Math.random() * 1.5 + 0.5;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.life -= this.speed;
        
        this.x1 += (Math.random() - 0.5) * 0.3;
        this.y1 += (Math.random() - 0.5) * 0.3;
        this.x2 += (Math.random() - 0.5) * 0.3;
        this.y2 += (Math.random() - 0.5) * 0.3;

        this.x1 = Math.max(0, Math.min(canvasWidth, this.x1));
        this.y1 = Math.max(0, Math.min(canvasHeight, this.y1));
        this.x2 = Math.max(0, Math.min(canvasWidth, this.x2));
        this.y2 = Math.max(0, Math.min(canvasHeight, this.y2));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity * (this.life / this.maxLife)})`;
        ctx.lineWidth = this.width;
        ctx.stroke();
      }

      isAlive() {
        return this.life > 0;
      }
    }

    let lines: Line[] = [];
    const maxLines = 25;

    for (let i = 0; i < 15; i++) {
      lines.push(new Line(canvas.width, canvas.height));
    }

    let animationFrame: number;
    
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = oliveColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (lines.length < maxLines && Math.random() < 0.05) {
        lines.push(new Line(canvas.width, canvas.height));
      }

      lines = lines.filter(line => {
        line.update(canvas.width, canvas.height);
        line.draw(ctx);
        return line.isAlive();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'center center',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    )
    .fromTo([paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '-=0.6'
    )
    .fromTo(metaRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="description-section">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          display: 'block',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="description-container">
          <h2 ref={titleRef} className="description-title">FRANCIS CHARLES</h2>
          
          <div className="description-text">
            <p ref={paragraph1Ref} className="description-paragraph">
              I'm a graphic designer and web designer based in Tanzania. 
              Since starting my journey in 2021, I've been crafting visual 
              identities and digital experiences that communicate and inspire.
            </p>
            
            <p ref={paragraph2Ref} className="description-paragraph">
              My approach combines minimalist aesthetics with purposeful design, 
              creating work that is both beautiful and functional. I believe in 
              clean lines, thoughtful details, and designs that tell a story.
            </p>
            
            <p ref={paragraph3Ref} className="description-paragraph">
              Whether it's branding, web design, or visual communication, 
              I bring ideas to life through creativity and code. 
              Let's create something meaningful together.
            </p>
          </div>
          
          <div ref={metaRef} className="description-meta">
            <span className="meta-item">— 01</span>
            <span className="meta-item">ABOUT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
