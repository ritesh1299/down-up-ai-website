"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { UrlCaptureBar } from "@/components/url-capture/UrlCaptureBar";

const UnlockPotentialSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlock Your Growth Potential
          </motion.h2>
          
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your growth doesn't wait. Neither should you.
          </motion.p>

          {/* URL Capture Bar - Bottom CTA placement */}
          <div className="mb-8">
            <UrlCaptureBar variant="cta" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="#contact"
              data-action="open-url-capture"
              className="bg-primary text-primary-foreground font-body font-medium py-4 px-8 flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300 mx-auto w-fit"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotentialSection;