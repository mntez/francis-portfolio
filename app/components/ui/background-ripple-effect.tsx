"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { canvas } from "framer-motion/m";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
}

export function BackgroundRippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Add new ripples at random positions
    const addRipple = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      ripplesRef.current.push({
        id: Date.now() + Math.random(),
        x,
        y,
        size: 20,
        life: 1,
      });
    };

    // Add ripples periodically
    const interval = setInterval(addRipple, 2000);

    // Animation loop
    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      const deltaTime = time - (lastTimeRef.current || time);
      lastTimeRef.current = time;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        // Update ripple
        ripple.size += deltaTime * 0.1;
        ripple.life -= deltaTime * 0.001;

        // Draw ripple
        if (ripple.life > 0) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(150, 150, 255, ${ripple.life * 0.3})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Inner circle
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 200, 255, ${ripple.life * 0.2})`;
          ctx.fill();
        }

        return ripple.life > 0 && ripple.size < Math.max(canvas.width, canvas.height);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}