'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);



  return (
    <section className="relative w-full aspect-[640/1136] md:aspect-[1920/1080] flex flex-col items-center overflow-hidden">
      {/* Static Background Images (Fallback) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/banner-light.webp"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/images/mb-banner-light.webp"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Videos - Only load the appropriate one */}
      {isClient && !isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-[1920/1080] object-cover"
          src="/images/pc-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('PC video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {isClient && isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-[640/1136] object-cover"
          src="/images/mb-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('Mobile video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )} 

      {/* Logo */}
      <motion.img 
        src="/images/logo-manu.webp" 
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
        src="/images/pc-hero-effect.webp" 
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
        src="/images/scrolling.webp" 
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
        src="/images/mb-hero-effect.webp" 
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