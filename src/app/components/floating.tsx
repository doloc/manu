'use client'

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Floating: FC<{
  onScrollToTop: () => void;
}> = ({onScrollToTop}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay the appearance for a better entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const floatingButtons = [
    { src: "/images/btn-napthe.png", alt: "Nạp thẻ", aspectRatio: '138/115' },
    { src: "/images/btn-nhapcode.png", alt: "Cộng đồng", aspectRatio: '137/47' },
    { src: "/images/btn-zalo.png", alt: "Zalo", aspectRatio: '137/36' },
    { src: "/images/btn-fb.png", alt: "FB", aspectRatio: '137/36' }
  ];

  return (
    <div className="hidden md:block w-full">
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="z-50 fixed top-[10%] right-[1%] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/fr-floating.png')] w-[10%] aspect-[193/546]"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              scale: 1,
              translateX: isExpanded ? 0 : "calc(100% - 30px)"
            }}
            exit={{ x: 100, opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              translateX: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="z-10 mt-[50%] w-[70%] h-[48%] py-[3%] flex flex-col items-center justify-between"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {floatingButtons.map((button, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="" className="w-[95%] block">
                        <motion.img 
                          src={button.src} 
                          alt={button.alt} 
                          className="w-full h-auto"
                          style={{ aspectRatio: button.aspectRatio }}
                          whileHover={{ 
                            filter: "brightness(1.2)",
                            transition: { duration: 0.2 }
                          }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.img 
                    src="/images/btn-top.png" 
                    alt="" 
                    className="absolute -bottom-[8%] w-1/5 btn-image object-contain cursor-pointer" 
                    onClick={() => onScrollToTop()}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.4, delay: 0.6, ease: "easeOut" },
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
                    }}
                    whileTap={{ scale: 0.9 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div 
              className="absolute top-[60%] -left-[3%] w-1/5 aspect-square border-2 border-[#596A9E] rounded-full flex justify-center items-center cursor-pointer" 
              onClick={toggleExpand}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: isExpanded ? 0 : 180,
              }}
              transition={{ 
                duration: 0.1, 
                rotate: { duration: 0.3 }
              }}
              whileHover={{ 
                scale: 1.15,
                border: "2px solid #EAE5EF",
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{
                  x: isExpanded ? 0 : 2
                }}
                transition={{ duration: 0.3 }}
              >
                <FaAngleDoubleRight className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Floating;