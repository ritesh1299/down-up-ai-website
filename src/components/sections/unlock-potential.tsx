"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { UrlCaptureBar } from "@/components/url-capture/UrlCaptureBar";
import { BGGlobeDots } from "@/components/visual/BGGlobeDots";

const UnlockPotentialSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Dotted hemisphere (CTA) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/2 md:right-0 bottom-[-6%] translate-x-1/2 md:translate-x-0 z-0 motion-reduce:animate-none animate-[driftXY_26s_ease-in-out_infinite_alternate]"
      >
        <BGGlobeDots
          variant="cta"
          className="w-[900px] max-w-[70vw] opacity-[0.04] md:opacity-[0.05]"
          scale={0.7}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
        </div>
      </div>
    </section>
  );
};

export default UnlockPotentialSection;