'use client'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full aspect-[640/1136] md:aspect-[1920/1080] flex flex-col items-center overflow-hidden">
      {/* Background Videos */}
      <motion.video
        className="hidden md:block top-0 left-0 w-full aspect-[1920/1080] object-cover"
        src="/images/pc-hero-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      /> 

      <motion.video
        className="md:hidden top-0 left-0 w-full aspect-[640/1136] object-cover"
        src="/images/mb-hero-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      /> 

      {/* Logo */}
      <motion.img 
        src="/images/logo-manu.png" 
        alt="logo" 
        className="hidden md:block absolute top-[8%] left-[4%] w-[19%] object-contain"
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1, 
          delay: 0.5,
          ease: "easeOut"
        }}
      />

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

      {/* Mobile Scrolling Icon */}
      <motion.img 
        src="/images/scrolling.png" 
        alt="" 
        className="md:hidden absolute bottom-[5%] w-[40%] object-contain"
        initial={{ y: 50, opacity: 0 }}
        animate={{ 
          y: [0, -10, 0],
          opacity: 1
        }}
        transition={{ 
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 1,
            delay: 1
          }
        }}
        whileHover={{ scale: 1.1 }}
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

      {/* Floating Particles Effect (Optional) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;