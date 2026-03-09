'use client';
import { motion, MotionProps, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export interface InViewProps extends MotionProps {
  children: ReactNode;
  once?: boolean;
  margin?: string | number;  // Changed to accept string or number
  amount?: "some" | "all" | number;
  variants?: {
    hidden: any;
    visible: any;
  };
}

export function InView({ 
  children, 
  once = true,
  margin = "-100px",  // Changed default to string with px
  amount = "some",
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  ...props 
}: InViewProps) {
  const ref = useRef(null);
  
  // Convert number to string with px if needed
  const marginValue = typeof margin === 'number' ? `${margin}px` : margin;
  
  const viewOptions = {
    once,
    rootMargin: marginValue,  // Changed from 'margin' to 'rootMargin'
    amount,
  };
  
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}