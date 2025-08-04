'use client'

import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api";
import { convertTimeStampToDate } from "../lib/time";
import Link from "next/link";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const NewsEvent = () => {
  const [data, setData] = useState<any[]>([]);
  const [imgSource, setImgSource] = useState<string[]>(['/images/banner-event.webp']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts('NEWS', 0, 5)
      .then((data) => {
        setData(data.data);
        setImgSource(data.data.map((item: any) => item.thumbnail));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <motion.section 
      className="w-full aspect-[640/1196] md:aspect-[1920/1080] bg-cover bg-center bg-no-repeat 
      bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/pc-news-event-bg.webp')] flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src="/images/news-event-title.webp" 
        alt="news-event-title" 
        className="mt-[12%] md:mt-[3%] w-[70%] md:w-[35%] object-contain"
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      />

      {/* event - pc*/}
      <motion.div 
        className="hidden md:grid mt-[0.5%] w-[64%] aspect-[1304/477] bg-cover bg-center bg-no-repeat bg-[url('/images/pc-fr-news-event.webp')]
        pt-[2%] pb-[1%] pl-[2%] pr-[1%] grid-cols-[55%_45%]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="relative col-span-1 w-full aspect-[688/402] p-[3%]" >
          <div className="w-full h-full bg-[#323572] overflow-hidden">
            {imgSource.length && (
              <Swiper
                modules={[EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                className="w-full h-full flex justify-center items-center"
              >
                {imgSource.map((item, idx) => (
                  <SwiperSlide key={idx} style={{width: '100%'}}>
                    <img src={item} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <img src="/images/pc-fr-news-effect.webp" alt="" className="z-10 absolute pointer-events-none top-0 left-0 w-full object-contain" />
        </div>
        <div className="col-span-1 w-full h-full overflow-hidden p-[2%] text-[#422986]">
          {loading && (
            <motion.div 
              className="w-full h-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Đang tải dữ liệu...
            </motion.div>
          )}
          {!loading && data && data.length > 0 && data.map((val, idx) => (
            <motion.div 
              key={idx} 
              className="relative w-full flex flex-col items-center gap-[0.5vw] mb-[0.5vw]"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="grid grid-cols-[0.15fr_0.85fr]">
                <div className="col-span-1 flex justify-center items-center">
                  {idx < 2 ? 
                    <motion.img 
                      src="/images/hot-news.webp" 
                      alt="Title" 
                      className="w-[90%]"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: idx * 0.5
                      }}
                    /> : <></>
                  }
                </div>
                <div className="col-span-1 w-full grid grid-cols-[0.8fr_0.2fr] text-[1vw]">
                  <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden">
                    <Link href={String("/tin-tuc/"+val.postId)} className="w-full truncate block hover:cursor-pointer hover:text-purple-500 transition-colors duration-300">
                      {val.title}
                    </Link>
                  </motion.div>
                  <span className="text-center">{convertTimeStampToDate(val.time)}</span>
                </div>
              </div>
              <motion.div 
                className="custom-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
          <motion.div 
            className="mt-[3%] w-full flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/tin-tuc" className="w-[30%] aspect-[186/59] bg-cover bg-center bg-no-repeat bg-[url('/images/btn-view-more.webp')] hover:brightness-110 transition-all duration-300 block"></Link>
          </motion.div>
        </div>
      </motion.div>

      {/* event - mb */}
      <motion.div 
        className="relative md:hidden mt-[5%] w-[85%] aspect-[545/728] bg-cover bg-center bg-no-repeat bg-[url('/images/mb-fr-news-event.webp')] flex flex-col items-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="relative w-full aspect-[688/402] overflow-hidden "
          transition={{ duration: 0.3 }}
        >
          {imgSource.length && (
            <Swiper
              modules={[EffectCoverflow]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="w-full h-full flex justify-center items-center"
            >
              {imgSource.map((item, idx) => (
                <SwiperSlide key={idx} style={{width: '100%'}}>
                  <img src={item} alt="" className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
        <img src="/images/pc-fr-news-effect.webp" alt="" className="z-10 absolute pointer-events-none top-0 left-0 w-full scale-107 object-contain" />
        <div className="mt-[5%] w-full h-[47%] px-[7%]">
          <div className="w-full h-full overflow-hidden text-[#422986] text-[4vw]">
            {loading && (
              <motion.div 
                className="w-full h-full flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Đang tải dữ liệu...
              </motion.div>
            )}
            {!loading && data && data.length > 0 && data.map((val, idx) => (
              <motion.div 
                key={idx} 
                className="relative w-full flex flex-col items-center gap-[1.5vw] mb-[1.5vw]"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="grid grid-cols-[0.15fr_0.85fr]">
                  <div className="col-span-1 flex justify-center items-center">
                    {idx < 2 ? 
                      <motion.img 
                        src="/images/hot-news.webp" 
                        alt="Title" 
                        className="w-[90%]"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: idx * 0.5
                        }}
                      /> : <></>
                    }
                  </div>
                  <div className="col-span-1 w-full grid grid-cols-[0.8fr_0.2fr]">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden">
                      <Link href={String("/tin-tuc/"+val.postId)} className="w-full truncate block hover:text-purple-500 transition-colors duration-300">
                        {val.title}
                      </Link>
                    </motion.div>
                    <span className="text-center">{convertTimeStampToDate(val.time)}</span>
                  </div>
                </div>
                <motion.div 
                  className="custom-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="absolute -bottom-[3%] w-full flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/tin-tuc" className="w-[35%] aspect-[186/59] bg-cover bg-center bg-no-repeat bg-[url('/images/btn-view-more.webp')] hover:brightness-110 transition-all duration-300 block"></Link>
        </motion.div>
      </motion.div>

      {/* cta */}
      <motion.div 
        className="mt-[2%] md:mt-0 w-full md:w-[55%] aspect-[1102/401] bg-cover bg-center bg-no-repeat bg-[url('/images/fr-nav.webp')] 
        flex justify-center items-center pl-[9%] pr-[10%] py-[8%] md:pl-[5%] md:pr-[5.3%] md:py-[4.5%]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full grid grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
          {[
            { src: "/images/fr-huongdannapthe.webp", alt: "Hướng dẫn nạp thẻ" },
            { src: "/images/fr-hotro.webp", alt: "Hỗ trợ" },
            { src: "/images/fr-camnangtanthu.webp", alt: "Cẩm nang tân thủ" },
            { src: "/images/fr-dieukhoan.webp", alt: "Điều khoản" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="w-full h-full flex justify-center items-center"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1 + 0.7,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-contain btn-image" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewsEvent;