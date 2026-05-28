import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onFinished, 1000);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-romantic-pink/30 blur-2xl rounded-full scale-150"
            />
            <Heart className="w-24 h-24 text-romantic-pink fill-romantic-pink heartbeat relative z-10" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-cursive text-3xl text-white/90 glow-text"
          >
            Loading Love... ❤️
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LoveTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Example start date: Jan 1st, 2023. In a real app, this would be a prop.
  const startDate = new Date('2023-01-01T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CounterBox = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-24 md:w-28 md:h-32 glass-card rounded-2xl flex items-center justify-center mb-2 border-white/20 relative overflow-hidden group">
        <motion.div 
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-white glow-text relative z-10"
        >
          {value}
        </motion.div>
        <div className="absolute inset-0 bg-romantic-pink/5 group-hover:bg-romantic-pink/10 transition-colors" />
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold">{label}</span>
    </div>
  );

  return (
    <section className="py-24 px-8 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-romantic-pink/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="font-cursive text-4xl md:text-5xl mb-12">We have created memories together for...</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <CounterBox value={timeLeft.days} label="Days" />
          <CounterBox value={timeLeft.hours} label="Hours" />
          <CounterBox value={timeLeft.minutes} label="Minutes" />
          <CounterBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
};

export const FinalSurprise = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isBursting, setIsBursting] = useState(false);

  const handleSurprise = () => {
    setIsBursting(true);
    setTimeout(() => {
      setShowPopup(true);
      setIsBursting(false);
    }, 1000);
  };

  return (
    <section className="py-32 px-8 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-cursive text-5xl md:text-7xl mb-6 glow-text">
          Here's to you, my love, and a lifetime of beautiful memories ❤️
        </h2>
        <p className="text-xl md:text-2xl text-white/60 mb-12 font-light">
          Thank you for existing in my life.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurprise}
          className="romantic-gradient neon-border px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all flex items-center gap-3 mx-auto"
        >
          <Heart className={`w-6 h-6 fill-white ${isBursting ? 'heartbeat' : ''}`} />
          Forever & Always ❤️
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isBursting && (
          <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
             {[...Array(30)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0, x: '50vw', y: '50vh' }}
                 animate={{ 
                   scale: Math.random() * 2 + 1,
                   x: `${Math.random() * 100}vw`,
                   y: `${Math.random() * 100}vh`,
                   opacity: [1, 0],
                   rotate: Math.random() * 360
                 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="absolute text-romantic-pink text-4xl"
               >
                 ❤️
               </motion.div>
             ))}
          </div>
        )}

        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] backdrop-blur-md flex items-center justify-center p-8 bg-black/40"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="glass-card p-12 md:p-20 rounded-[40px] text-center max-w-xl border-romantic-pink/30 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-romantic-gradient" />
              <Heart className="w-20 h-20 text-romantic-pink fill-romantic-pink mx-auto mb-8 heartbeat" />
              <h3 className="font-cursive text-6xl md:text-7xl text-white mb-6">I Love You Forever ❤️</h3>
              <p className="text-white/60 text-lg md:text-xl font-light italic">
                "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-10 text-romantic-pink uppercase tracking-widest text-sm font-bold border-b border-romantic-pink/30 pb-1 hover:border-romantic-pink transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
