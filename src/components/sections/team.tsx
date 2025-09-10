"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small teams beginning their discovery journey. $49/mo",
    },
    {
      name: "Growth", 
      description: "For growing businesses that need SEO + GEO + automated posting. $99/mo",
    },
    {
      name: "Pro",
      description: "Advanced automation and engagement for scaling brands.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.h2>
          
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Simple, transparent, and scalable.
            <br />
            Choose the plan that fits your growth journey — whether you're just starting or scaling fast.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const priceMatch = tier.description.match(/\$\d+\/mo/);
            const descText = tier.description.replace(/\s*\$\d+\/mo/, "");
            return (
              <motion.div
                key={index}
                className="bg-muted/5 border border-border p-8 hover:bg-muted/10 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {tier.name}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {descText.trim()}
                  </p>
                  {priceMatch && (
                    <p className="font-display font-bold text-foreground">
                      {priceMatch[0]}
                    </p>
                  )}
                  
                  <button
                    type="button"
                    data-action="open-url-capture"
                    className="w-full bg-primary text-primary-foreground font-medium py-3 px-6 hover:opacity-80 transition-opacity duration-300"
                  >
                    {tier.name === "Pro" ? "Contact Sales" : "Try Now"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;