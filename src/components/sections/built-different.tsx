"use client";

import React from "react";
import { motion } from "framer-motion";

const BuiltDifferent = () => {
  const features = [
    {
      number: "01",
      title: "Why Businesses Choose Us",
      description:
        "Our AI works 24/7 to optimize SEO and GEO while posting across platforms. You get consistent visibility, engagement, and leads — even while you sleep.",
    },
    {
      number: "02", 
      title: "What Makes Us Different",
      description:
        "We combine keyword research, SERP tracking, and Generative Engine Optimization. This means higher rankings and real conversations with your audience.",
    },
    {
      number: "03",
      title: "Reinventing Growth",
      description:
        "Traditional marketing is slow and expensive. Down Up reduces cost, saves time, and activates your presence instantly.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold text-muted-foreground/30">
                {feature.number}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">
                {feature.title}
              </h3>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltDifferent;