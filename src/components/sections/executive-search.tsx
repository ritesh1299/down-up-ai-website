"use client";

import React from "react";
import { motion } from "framer-motion";

const ExecutiveSearch = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Automated Growth for Modern Businesses
          </motion.h2>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Down Up analyzes your content, discovers keywords, and engages audiences with posts, comments, and reels.
            <br />
            Through SEO + GEO (Generative Engine Optimization), we ensure your brand becomes discoverable — automatically.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {['SEO', 'Engagement', 'Social', 'Discovery'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-border text-muted-foreground font-medium text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearch;