import React from 'react';
import { motion } from 'motion/react';

interface PolaroidProps {
  image: string;
  caption?: string;
  rotation?: number;
  className?: string;
  delay?: number;
  hasTape?: boolean;
}

export const Polaroid: React.FC<PolaroidProps> = ({ 
  image, 
  caption, 
  rotation = 0, 
  className = "", 
  delay = 0,
  hasTape = false 
}) => {
  const imageSrc = image.startsWith('http') || image.startsWith('/') || image.startsWith('data:')
    ? image
    : `/${image}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative bg-white p-4 pb-12 shadow-2xl ${className}`}
      style={{
        width: 'fit-content'
      }}
    >
      {hasTape && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-romantic-pink/40 backdrop-blur-sm transform -rotate-2 z-10 mix-blend-multiply" 
             style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }} />
      )}
      
      <div className="relative overflow-hidden w-64 h-80 bg-gray-100">
        <img 
          src={imageSrc} 
          alt="Memory" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {caption && (
        <div className="mt-4 text-center">
          <p className="font-handwriting text-2xl text-gray-800 leading-none">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};
