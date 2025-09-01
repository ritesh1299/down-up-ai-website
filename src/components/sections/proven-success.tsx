"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  prefix?: string;
  suffix: string;
}

const AnimatedCounter = ({ targetValue, duration = 2000, prefix = "", suffix }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easedPercentage = 1 - Math.pow(1 - percentage, 3); // easeOutCubic
        
        const currentCount = Math.floor(easedPercentage * targetValue);
        setCount(currentCount);

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, targetValue, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

interface StatItemProps {
  targetValue: number;
  suffix: string;
  label: string;
  prefix?: string;
  index: number;
}

const StatItem = ({ targetValue, suffix, label, prefix = "", index }: StatItemProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-start text-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Dynamic background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent rounded-lg"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: index * 0.5
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full opacity-40"
            animate={{
              y: [20, -20, 20],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.7 + index * 0.3
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
          />
        ))}
      </div>

      <motion.div 
        className="font-mono font-medium text-foreground leading-none text-[120px] lg:text-[160px] relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <AnimatedCounter targetValue={targetValue} prefix={prefix} suffix={suffix} />
      </motion.div>
      <motion.p 
        className="mt-6 text-lg font-normal text-muted-foreground tracking-[-0.01em] relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default function ProvenSuccess() {
  const stats = [
    { targetValue: 10, suffix: "x", label: "Faster Visibility" },
    { targetValue: 90, suffix: "%", label: "Engagement Uplift" },
    { targetValue: 10, suffix: "k", label: "Automated Posts Delivered" },
  ];

  return (
    <section className="bg-background py-[120px] relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, var(--color-foreground) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, var(--color-foreground) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, var(--color-foreground) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${20 * i}%`}
              x2="100%"
              y2={`${20 * i}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-[72px]">
          <motion.h2 
            className="font-display font-medium text-[40px] leading-tight text-center text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Proven Success <span className="text-foreground">•</span>
          </motion.h2>
          <div className="grid w-full grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8">
            {stats.map((stat, index) => (
              <StatItem 
                key={index} 
                targetValue={stat.targetValue}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}