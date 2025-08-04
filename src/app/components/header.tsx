'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: '/', label: 'TRANG CHỦ' },
  { href: '/tin-tuc', label: 'TIN TỨC' },
  { href: '/su-kien', label: 'SỰ KIỆN' },
  { href: '/ho-tro', label: 'HỖ TRỢ' },
  { href: '/cong-dong', label: 'CỘNG ĐỒNG' },
]

const navLinksMb = [
  { href: '/', label: 'TRANG CHỦ' },
  { href: '/tin-tuc', label: 'TIN TỨC' },
  { href: '/su-kien', label: 'SỰ KIỆN' },
  { href: '/ho-tro', label: 'HỖ TRỢ' },
  { href: '/cong-dong', label: 'CỘNG ĐỒNG' },
  { href: '/huong-dan', label: 'HƯỚNG DẪN' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  
  // Transform scroll values for animations
  const headerHeight = isMobile 
    ? useTransform(scrollY, [0, 83], [83, 75]) 
    : useTransform(scrollY, [0, 100], [100, 80]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.7, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 10]);
  const headerShadow = useTransform(scrollY, [0, 50], [0, 0.3]);
  const textScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  // Handle scroll effect and screen size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.header 
      className="z-50 fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm
      border-2 border-b border-[#9F9ADC] md:border-[#AAA4E3]"
      style={{
        height: headerHeight,
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${headerShadow})`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* PC */}
      <div className="hidden md:flex w-full h-full justify-center items-center gap-[2%] text-2xl text-white font-bold">
        {navLinks.map((link, idx) => (
          <motion.div
            key={idx}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: idx * 0.1 + 0.3,
              ease: "easeOut"
            }}
            className="flex items-center"
            style={{ scale: textScale }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 8px rgba(255, 255, 0, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href={link.href} 
                className={`transition-all duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? 'hover:text-yellow-200 text-xl' 
                    : 'hover:text-yellow-200 text-2xl'
                }`}
              >
                {link.label}          
              </Link>
            </motion.div>
            {idx !== navLinks.length - 1 && (
              <motion.img 
                src="/images/icon-nav.webp" 
                alt="line" 
                className="w-[1%] object-contain bg-transparent ml-[2%]" 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: idx * 0.1 + 0.5,
                  ease: "easeOut"
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* MB */}
      <motion.div 
        className="md:hidden w-full flex justify-between items-center px-[2%]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ height: headerHeight }}
      >
        <motion.img 
          src="/images/logo-manu.webp" 
          alt="logo" 
          className="h-[75%] object-contain"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => router.push('/')}
        />
        <motion.img 
          src="/images/btn-topup.webp" 
          alt="" 
          className="h-[45%] object-contain cursor-pointer"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
        <motion.img 
          src="/images/btn-playnow.webp" 
          alt="" 
          className="h-[45%] object-contain cursor-pointer"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
        {isMenuOpen ? (
          <motion.img 
            src="/images/icon-close.webp" 
            alt="" 
            className="h-[45%] object-contain cursor-pointer"
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <motion.img 
            src="/images/icon-menu.webp" 
            alt="" 
            className="h-[45%] object-contain cursor-pointer"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#AAA4E3] to-[#9F9ADC]"
        style={{
          width: useTransform(scrollY, [0, 1000], ['0%', '100%']),
        }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="absolute -z-10 top-0 left-0 right-0 w-full bg-cover bg-center bg-no-repeat aspect-[640/613] bg-[url('/images/mb-menu-tab.webp')] flex justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mt-[20%] w-[95%] h-[67%] flex flex-col justify-between items-center gap-[2vw] text-[#FFFCDC] text-[3.5vw] font-extrabold">
              {navLinksMb.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex flex-col items-center gap-[2vw]"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 10px rgba(255, 252, 220, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="hover:text-yellow-200 transition-colors duration-300">
                      {link.label}
                    </Link>
                  </motion.div>
                  <motion.div 
                    className="custom-line-mb"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: idx * 0.1 + 0.2
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;