'use client'

import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import ScaleLoader from 'react-spinners/ScaleLoader'
import { loadingState } from "../lib/atom";

const LoadingSpinner = () => {
  const loading = useRecoilValue(loadingState)
  
  return (
    // loading && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    //   <div className="flex flex-col items-center gap-6">
    //     {/* Animated Dots */}
    //     <div className="flex gap-2">
    //       {[0, 1, 2].map((i) => (
    //         <motion.div
    //           key={i}
    //           className="w-3 h-3 bg-blue-500 rounded-full"
    //           animate={{
    //             scale: [1, 1.5, 1],
    //             opacity: [0.5, 1, 0.5],
    //           }}
    //           transition={{
    //             duration: 1,
    //             repeat: Infinity,
    //             delay: i * 0.2,
    //             ease: "easeInOut",
    //           }}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>)

    loading && (
      <div
          className="fixed top-0 left-0 z-[100] w-[100vw] h-[100vh] flex justify-center items-center"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
          <ScaleLoader color="#1677ff" />
      </div>
  )
  );
};

export default LoadingSpinner; 