'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const NewsPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // Adjust as needed
  const [totalPages, setTotalPages] = useState<number>(1);
  const router = useRouter();
  
  useEffect(() => {
      setLoading(true);
      fetchPosts('NEWS', (currentPage - 1) * itemsPerPage, itemsPerPage)
        .then((data) => {
          setData(data.data);
          const totalCount = data.extraData.count;
          const totalPages = Math.ceil(totalCount / itemsPerPage);
          setTotalPages(totalPages);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
          setData([]);
          setTotalPages(1);
        })
        .finally(() => setLoading(false));
  }, [currentPage]);
  
  return (
    <div className="relative w-full py-[8%] px-[4%] md:p-[10%]">
      {loading ? 
      <motion.div 
        className="w-full mb-[3%] flex justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="text-xl font-bold text-[#0E99FF]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Đang tải dữ liệu...
        </motion.span>
      </motion.div> : 
      data.length > 0 ? <div className="w-full flex flex-col gap-2 md:gap-4">
        {data.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="w-full bg-[#FAEEFC] p-[1%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: idx * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <div className="w-full border border-[#DCA9DA] p-[2%] grid grid-cols-[50%_50%]">
              <img src={item.thumbnail} alt="" className="col-span-1 w-full h-full object-cover hover:cursor-pointer" onClick={() => router.push(String("/tin-tuc/"+item.postId))} />
              <div className="col-span-1 w-full h-full flex flex-col justify-between p-[4%] md:p-[2%] text-[#492EAB]">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-xs md:text-[1vw] font-semibold truncate flex-1 min-w-0 hover:cursor-pointer hover:text-purple-500 transition-colors duration-300" onClick={() => router.push(String("/tin-tuc/"+item.postId))}>{item.title}</span>
                    {idx < 2 ? 
                      <motion.img 
                        src="/images/hot-news.png" 
                        alt="Title" 
                        className="w-[15%] object-contain"
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
                  <span className="text-xs md:text-[0.8vw]">Thời gian: {new Date(item.time).toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })} ngày {new Date(item.time).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit'
                  })}</span>
                </div>
                <motion.div 
                  className="mt-[3%] w-full flex justify-start"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href={String("/tin-tuc/"+item.postId)} className="w-[45%] md:w-[30%] aspect-[186/59] bg-cover bg-center bg-no-repeat bg-[url('/images/btn-view-more.png')] hover:brightness-110 transition-all duration-300 block"></Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div> : 
      <motion.div 
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-2xl font-bold text-[#0E99FF]">Không có dữ liệu</span>
      </motion.div>}

      {/* Pagination */}
      <motion.div 
        className="mt-[2%] w-full flex justify-center items-center gap-2 select-none"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left Arrow */}
        <motion.button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`mr-[2%] w-[4%] aspect-[50/47] bg-cover bg-center bg-no-repeat bg-[url('/images/tin-tuc/prev.png')] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
        </motion.button>
                 {/* Page Numbers */}
         {(() => {
           const pages = [];
           const showPages = 2; // Number of pages to show on each side
           
           // Always show first page
           pages.push(1);
           
           // Calculate start and end of visible range
           const start = Math.max(2, currentPage - showPages);
           const end = Math.min(totalPages - 1, currentPage + showPages);
           
           // Add ellipsis after first page if there's a gap
           if (start > 2) {
             pages.push('...');
           }
           
           // Add pages in the middle range
           for (let i = start; i <= end; i++) {
             if (i !== 1 && i !== totalPages) {
               pages.push(i);
             }
           }
           
           // Add ellipsis before last page if there's a gap
           if (end < totalPages - 1) {
             pages.push('...');
           }
           
           // Always show last page (if different from first)
           if (totalPages > 1) {
             pages.push(totalPages);
           }
           
          return pages.map((page, idx) => (
              <motion.button
                key={idx}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '...'}
                className={`text-xs md:text-[1.2vw] text-[#492EAB] font-bold transition
                  ${page === '...' ? 'cursor-default' : 'cursor-pointer'}
                  ${currentPage === page ? 'scale-125 text-purple-500' : 'hover:text-purple-500'}
                `}
                whileHover={{ scale: page === '...' ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {page}
              </motion.button>
            ));
         })()}
        {/* Right Arrow */}
        <motion.button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`ml-[2%] w-[4%] aspect-[50/47] bg-cover bg-center bg-no-repeat bg-[url('/images/tin-tuc/next.png')] transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NewsPage;