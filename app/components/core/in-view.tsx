'use client';
import { motion, MotionProps, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export interface InViewProps extends MotionProps {
  children: ReactNode;
  once?: boolean;
  margin?: number;
  amount?: "some" | "all" | number;
  variants?: {
    hidden: any;
    visible: any;
  };
}

export function InView({ 
  children, 
  once = true,
  margin = -100,
  amount = "some",
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  ...props 
}: InViewProps) {
  const ref = useRef(null);
  
  const viewOptions = {
    once,
    margin: `${margin}px`,
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