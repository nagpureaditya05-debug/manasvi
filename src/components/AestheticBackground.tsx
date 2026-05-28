import React from 'react';
import { motion } from 'motion/react';

export const Sparkles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--delay': `${Math.random() * 5}s`,
          } as any}
        />
      ))}
    </div>
  );
};

export const FloatingHeart = ({ delay = 0, x = '50%', size = 20 }) => (
  <motion.div
    initial={{ y: '110vh', opacity: 0, x }}
    animate={{ 
      y: '-10vh', 
      opacity: [0, 1, 1, 0],
      x: [`calc(${x} - 20px)`, `calc(${x} + 20px)`, `calc(${x} - 20px)`]
    }}
    transition={{ 
      duration: 15, 
      delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="fixed pointer-events-none text-romantic-pink/30 z-0"
    style={{ fontSize: size }}
  >
    ❤
  </motion.div>
);

export const AestheticBackground = () => {
  return (
    <>
      <div className="fixed inset-0 romantic-gradient opacity-60 z-[-2]" />
      <Sparkles />
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Clouds simulation */}
        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-romantic-purple/40 to-transparent blur-3xl rounded-full -translate-y-1/2 scale-150" />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-romantic-pink/30 to-transparent blur-3xl rounded-full translate-y-1/2 scale-150" />
        
        {/* Hearts */}
        <FloatingHeart x="10%" delay={0} size={30} />
        <FloatingHeart x="25%" delay={5} size={20} />
        <FloatingHeart x="40%" delay={2} size={40} />
        <FloatingHeart x="60%" delay={8} size={25} />
        <FloatingHeart x="85%" delay={4} size={35} />
        <FloatingHeart x="95%" delay={12} size={15} />
      </div>
    </>
  );
};
