import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-background text-foreground py-[120px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-5xl text-center">
            <h2 className="font-display font-bold text-[40px] leading-tight text-center text-foreground mb-12">
              Trusted By Growing Brands <span className="text-foreground">•</span>
            </h2>
            <blockquote>
              <p className="font-display text-[28px] md:text-[32px] leading-[1.3] italic font-normal text-foreground mb-12">
                "The automation felt seamless, it's like having a growth team that never sleeps."
              </p>
              <footer className="font-body text-lg text-muted-foreground">
                — Early Adopter, Tech Startup CEO
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;