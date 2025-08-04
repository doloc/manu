'use client'

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Hero from "../../components/tin-tuc/hero";
import Footer from "../../components/footer";
import Floating from "../../components/floating";
import { useRef } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={topRef} className="w-full h-full">
      <Hero />
      <motion.div 
        className="z-20 absolute top-[75vw] md:top-[35vw] left-1/2 transform -translate-x-1/2 w-[45%] md:w-[27%] aspect-[518/136] bg-cover bg-center bg-no-repeat bg-[url('/images/tin-tuc/bg-btn.webp')] flex justify-center items-center"
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.05,
          filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
        }}
      >
        {pathname === '/tin-tuc' ? (
          <motion.span 
            className="text-white text-[4vw] md:text-[1.5vw] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Tin Tức - Sự Kiện
          </motion.span>
        ) : (
          <motion.span 
            className="text-white text-[4vw] md:text-[1.5vw] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Sự Kiện
          </motion.span>
        )}
      </motion.div>
      <motion.section 
        className="relative w-full aspect-[640/1171] md:aspect-[1920/2041] bg-cover bg-center bg-no-repeat
        bg-[url('/images/tin-tuc/mb-content-bg.webp')] md:bg-[url('/images/tin-tuc/pc-content-bg.webp')] flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 0.5,
          ease: "easeOut"
        }}
      >
        <motion.div 
          className="relative mt-[4%] w-[95%] md:w-[62.5%] aspect-[613/1107] md:aspect-[1200/1942] bg-cover bg-center bg-no-repeat bg-[url('/images/tin-tuc/mb-fr-content.webp')] md:bg-[url('/images/tin-tuc/pc-fr-content.webp')] flex flex-col items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Layout;