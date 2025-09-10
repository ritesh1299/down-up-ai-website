import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container pt-24 pb-12">
        <div className="border-t border-border pt-20 flex flex-col gap-y-20">
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-6">
            <div className="font-display font-bold text-foreground text-2xl">
              Down Up
            </div>
            <p className="font-body text-muted-foreground text-lg">
              Discoverable. Automated. Unstoppable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-y-10 gap-x-20 md:gap-x-32">
            
            <div className="flex flex-col gap-5">
              <p className="text-base text-muted-foreground">Links</p>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-base text-foreground hover:text-muted-foreground transition-colors">About</Link></li>
                <li><Link href="#services" className="text-base text-foreground hover:text-muted-foreground transition-colors">Services</Link></li>
                <li><Link href="#resources" className="text-base text-foreground hover:text-muted-foreground transition-colors">Resources</Link></li>
                <li><Link href="#contact" className="text-base text-foreground hover:text-muted-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-5">
              <p className="text-base text-muted-foreground">Email</p>
              <ul className="space-y-3">
                <li><a href="mailto:hello@paralleluniverse.ai" className="text-base text-foreground hover:text-muted-foreground transition-colors">hello@paralleluniverse.ai</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-base text-muted-foreground">Socials</p>
              <ul className="space-y-3">
                <li><Link href="#" className="text-base text-foreground hover:text-muted-foreground transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="text-base text-foreground hover:text-muted-foreground transition-colors">X</Link></li>
                <li><Link href="#" className="text-base text-foreground hover:text-muted-foreground transition-colors">Instagram</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              © 2025 Parallel Universe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;