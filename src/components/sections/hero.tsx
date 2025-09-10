"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { UrlCaptureBar } from "@/components/url-capture/UrlCaptureBar";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-foreground overflow-hidden bg-background">
      <video
        src="https://files.peachworlds.com/website/ab033b05-2b48-4734-8fc1-df72206b59f9/abstrac-fractal-alpha.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20" 
      />

      <div className="absolute inset-0 bg-background/30 z-10" />

      {/* Dynamic floating elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full opacity-40"
            animate={{
              x: [
                typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200
              ],
              y: [
                typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800
              ],
              scale: [0.5, 1.5, 0.8],
              opacity: [0.2, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.8
            }}
          />
        ))}
      </div>

      <div className="container relative z-20 flex flex-col justify-end h-full w-full min-h-screen pt-40 pb-20">
        <div className="flex-grow" />
        <div className="w-full">
          {/* Animated Heading */}
          <motion.h1 
            className="font-display font-bold text-foreground text-left tracking-tighter leading-[0.9] text-[12vw] sm:text-9xl lg:text-[130px] xl:text-[150px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get Discovered
            </motion.div>
          </motion.h1>

          {/* URL Capture Bar - Hero placement */}
          <div className="mt-8 sm:mt-10">
            <UrlCaptureBar variant="hero" />
          </div>

          {/* Sub-content: Tagline and Buttons */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center md:text-left">
              <p className="font-body text-base lg:text-lg text-muted-foreground max-w-lg">
                Your always-on AI growth partner — combining SEO, Generative Engine Optimization (GEO), and social engagement into one seamless platform.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#services"
                  className="border border-foreground text-foreground font-body font-medium py-4 px-8 hover:bg-foreground/10 transition-colors duration-300 ease-in-out whitespace-nowrap"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;