"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            An intelligent growth engine powered by AI.
            <br />
            From SEO and GEO to automated posting and engagement —
            <br />
            Down Up ensures your brand stays visible, relevant, and connected.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="#contact"
              data-action="open-url-capture"
              className="bg-primary text-primary-foreground font-body font-medium py-4 px-8 flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap"
            >
              Try Now
              <Image
                src="https://files.peachworlds.com/website/2fcd9ba3-fd48-49df-83ed-035950fff8e8/right-up-white.svg"
                alt="Arrow icon"
                width={16}
                height={16}
                className="brightness-0"
              />
            </Link>
            <Link
              href="#services"
              className="border border-foreground text-foreground font-body font-medium py-4 px-8 hover:bg-foreground/10 transition-colors duration-300 whitespace-nowrap"
            >
              View Features
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;