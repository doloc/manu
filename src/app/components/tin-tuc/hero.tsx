'use client'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full aspect-[640/486] md:aspect-[1920/666] bg-cover bg-center bg-no-repeat
    bg-[url('/images/tin-tuc/mb-hero-bg.jpg')] md:bg-[url('/images/tin-tuc/pc-hero-bg.jpg')] flex flex-col items-center overflow-hidden">
      {/* PC Hero Effect */}
      <motion.img 
        src="/images/pc-hero-effect.png" 
        alt="" 
        className="z-10 hidden md:block absolute bottom-0 w-full object-contain"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.8,
          ease: "easeOut"
        }}
      />

      {/* Mobile Hero Effect */}
      <motion.img 
        src="/images/mb-hero-effect.png" 
        alt="" 
        className="z-10 md:hidden absolute -bottom-[1%] w-full object-contain"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.8,
          ease: "easeOut"
        }}
      />
    </section>
  );
};

export default Hero;