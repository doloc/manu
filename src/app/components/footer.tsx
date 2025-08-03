'use client'

import { motion } from "framer-motion";

const Footer = () => {
  const footerItems = [
    {
      type: 'title',
      content: 'ZAGOO GAMES',
      className: 'text-3xl font-extrabold tracking-widest text-white mb-2'
    },
    {
      type: 'company',
      content: 'Công Ty TNHH Giải Trí Long Đỉnh',
      className: 'text-lg font-semibold mb-1'
    },
    {
      type: 'address',
      content: 'Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà TNR Tower, số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam',
      className: 'text-center text-sm md:text-lg font-semibold max-w-xl md:max-w-none mb-2'
    }
  ];

  return (
    <motion.footer 
      className="w-full bg-gradient-to-b from-[#241A3C] to-[#19132B] text-white py-8 px-4 flex flex-col items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Footer Content */}
      {footerItems.map((item, idx) => (
        <motion.div
          key={idx}
          className={item.className}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: idx * 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          whileHover={item.type === 'title' ? { 
            scale: 1.02,
            textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
          } : undefined}
        >
          {item.type === 'title' ? (
            <span>
              ZAGOO <motion.span 
                className="text-yellow-300"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(255, 255, 0, 0.5)",
                    "0 0 20px rgba(255, 255, 0, 0.8)",
                    "0 0 5px rgba(255, 255, 0, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                GAMES
              </motion.span>
            </span>
          ) : (
            item.content
          )}
        </motion.div>
      ))}

      {/* Optional Links Section */}
      {/* <motion.div 
        className="flex flex-wrap gap-2 justify-center items-center mt-2"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.a 
          href="#" 
          className="text-white hover:text-yellow-300 hover:underline font-semibold transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Điều khoản
        </motion.a>
        <motion.div 
          className="w-[1px] h-[4vw] md:h-[1vw] bg-white"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        />
        <motion.a 
          href="#" 
          className="text-white hover:text-yellow-300 hover:underline font-semibold transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quy trình khiếu nại
        </motion.a>
      </motion.div> */}

      {/* Bottom Border Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
      />
    </motion.footer>
  );
}

export default Footer;