'use client'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const features = [
  {
    image: '/images/banner-event.jpg',
    alt: 'Feature 1',
  },
  {
    image: '/images/banner-feature.jpg',
    alt: 'Feature 2',
  },
  {
    image: '/images/banner-light.jpg',
    alt: 'Feature 3',
  },
  {
    image: '/images/banner-dark.jpg',
    alt: 'Feature 4',
  },
];

const Feature = () => {
  return (
    <motion.section 
      className="relative w-full aspect-[640/589] md:aspect-[1920/861] bg-cover bg-center bg-no-repeat
      bg-[url('/images/mb-feature-bg.jpg')] md:bg-[url('/images/pc-feature-bg.jpg')] flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src="/images/feature-title.png" 
        alt="feature-title" 
        className="mt-[5%] md:mt-0 w-[70%] md:w-[35%] object-contain"
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      />

      <motion.div 
        className="relative mt-[10%] md:mt-[2%] w-full md:w-[83%] aspect-[1600/580] flex justify-center items-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Custom Prev Button */}
        <motion.div 
          className="hidden md:block swiper-button-prev-custom absolute -left-[1%] md:left-[2%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/prev.png" alt="Prev" className="w-[45%] md:w-[70%] object-cover" loading="lazy" />
        </motion.div>

        {/* MB - Custom Prev Button */}
        <motion.div 
          className="md:hidden swiper-button-prev-custom absolute -bottom-[17%] left-[25%] z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/prev.png" alt="Prev" className="w-[45%] md:w-[70%] object-cover" />
        </motion.div>

        <motion.div 
          className="relative w-full flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            className="w-full flex justify-center items-center special-features-swiper"
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx} className='swiper-slide' style={{width: '65%'}}>
                <div className="w-full p-[2%] overflow-hidden aspect-[1048/596] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/fr-banner.png')]">
                  <motion.img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full object-contain"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.1 + 1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* PC - Custom Next Button */}
        <motion.div 
          className="hidden md:block swiper-button-next-custom absolute -right-[15%] md:right-[2%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/next.png" alt="Next" className="w-[45%] md:w-[70%] object-cover" />
        </motion.div>

        {/* MB - Custom Next Button */}
        <motion.div 
          className="md:hidden swiper-button-next-custom absolute -bottom-[17%] right-[25%] z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/next.png" alt="Next" className="w-[45%] md:w-[70%] object-cover" />
        </motion.div>

        {/* Custom Pagination */}
        <motion.div 
          className="absolute swiper-pagination-custom w-full left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        viewport={{ once: true }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/10 rounded-full"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Feature;