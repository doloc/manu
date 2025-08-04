'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = "/images/placeholder.webp",
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Main Image */}
      <motion.img
        src={hasError ? placeholder : src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default OptimizedImage; 