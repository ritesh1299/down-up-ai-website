"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-foreground hover:opacity-80 transition-opacity">
          Parallel Universe
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          data-action="open-url-capture"
          className="bg-primary text-primary-foreground font-medium py-2 px-6 flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
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
      </div>
    </header>
  );
};

export default Header;