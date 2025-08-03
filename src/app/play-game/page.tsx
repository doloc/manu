'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

const PlayGame = () => {
  const [isAgreed, setIsAgreed] = useState(true);
  return (
    <motion.div 
      className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#dad3f2] to-[#8062ec] flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden h-full max-w-2xl bg-cover bg-center bg-no-repeat bg-[url('/images/play-game/bg.jpg')] flex flex-col items-center">
        <motion.div 
          className="absolute w-full max-w-2xl flex flex-col items-end"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="/images/logo-manu.png" 
            alt="" 
            className="w-[30%] mt-[2%] object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.img 
            src="/images/play-game/tagage.png" 
            alt="" 
            className="mr-[2%] w-[20%] object-contain"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>
        <motion.img 
          src="/images/play-game/tagline.png" 
          alt="" 
          className="mt-[40vh] md:mt-[80%] w-full object-contain"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.img 
          src="/images/play-game/btn-playnow.png" 
          alt="" 
          className="mt-[2vh] w-[70%] object-contain btn-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.span 
          className="mt-[2vh] w-[90%] text-center text-white text-[3vw] md:text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Dữ liệu bạn cung cấp sẽ được dùng để nâng cao chất lượng dịch vụ và hoàn toàn bảo mật. Bạn có thể thay đổi bất kỳ lúc nào.
        </motion.span>
        <motion.div 
          className="mt-[1vh] w-[90%] flex justify-center items-center gap-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <input 
            type="checkbox" 
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="w-4 h-4 accent-purple-500"
          />
          <span className="text-white text-[3vw] md:text-xl font-semibold">Tôi đồng ý với <a href="/privacy-policy" className="text-[#0E99FF]">Điều kiện sử dụng</a> và <a href="/privacy-policy" className="text-[#0E99FF]">Chính sách bảo mật</a></span>
        </motion.div>
        <motion.div 
          className="mt-[1vh] w-[85%] flex justify-between items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.img 
            src="/images/play-game/btn-home.png" 
            alt="" 
            className="w-[30%] object-contain btn-image"
            whileTap={{ scale: 0.95 }}
          />
          <motion.img 
            src="/images/play-game/btn-support.png" 
            alt="" 
            className="w-[30%] object-contain btn-image"
            whileTap={{ scale: 0.95 }}
          />
          <motion.img 
            src="/images/play-game/btn-policy.png" 
            alt="" 
            className="w-[30%] object-contain btn-image"
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
        <motion.div 
          className="mt-[2vh] w-[70%] text-white text-[2.2vw] md:text-base font-semibold text-center flex flex-col gap-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <span>Giấy phép phê duyệt nội dung số: 289/GXN-SVHTT cấp ngày 30/06/2025 do Sở Văn Hóa và Thể Thao Hà Nội cấp</span>
          <span>Giấy chứng nhận cung cấp dịch vụ và trò chơi điện tử G2 trên mạng số 224/GCN-SVHTT cấp ngày 04 tháng 6 năm 2025 do Sở Văn Hóa và Thể Thao thành phố Hà Nội cấp</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlayGame;