import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Heart, Music, HeartHandshake, Stars, Gift, Infinity as InfinityIcon, Volume2, VolumeX, MailOpen, Mail } from 'lucide-react';
import { AestheticBackground } from './components/AestheticBackground';
import { Polaroid } from './components/Polaroid';
import { LoadingScreen, LoveTimer, FinalSurprise } from './components/ExtraFeatures';

const publicImages = [
  'image-1779972030987.png',
  'image-1779972058734.png',
  'third-memory.jpg',
  'forever-yours.png',
  'favorite-sunset.png',
  'magical-moments.png',
  '1.jpeg',
];

const Navbar = ({ isPlaying, onToggleAudio }: { isPlaying: boolean; onToggleAudio: () => void }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm md:backdrop-blur-none">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-cursive text-3xl font-bold bg-gradient-to-r from-romantic-pink to-white bg-clip-text text-transparent flex items-center gap-2"
      >
        For My Love <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Heart className="w-6 h-6 text-romantic-pink fill-romantic-pink" /></motion.div>
      </motion.div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
        <a href="#home" className="hover:text-romantic-pink transition-colors relative group">
          Home
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-romantic-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a href="#gallery" className="hover:text-romantic-pink transition-colors relative group">
          Memories
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-romantic-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a href="#letter" className="hover:text-romantic-pink transition-colors relative group">
          Letter
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-romantic-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a href="#reasons" className="hover:text-romantic-pink transition-colors relative group">
          Why You
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-romantic-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggleAudio}
        className="flex items-center gap-2 bg-romantic-pink/20 backdrop-blur-md border border-romantic-pink/40 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-romantic-pink hover:text-white transition-all neon-border"
      >
        {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />} {isPlaying ? 'Pause Music' : 'Play Our Song'}
      </motion.button>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-romantic-pink origin-left z-[60]"
        style={{ scaleX }}
      />
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 px-8 md:px-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="font-cursive text-7xl md:text-9xl mb-6 leading-tight"
          >
            Happy Birthday <br />
            <span className="text-romantic-pink">My Love</span> <Heart className="inline w-12 h-12 md:w-20 md:h-20 text-romantic-pink" />
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-lg mb-8 font-light">
            You make my world brighter, my days better and my life so meaningful.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="romantic-gradient px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-romantic-pink/20 mb-10 flex items-center gap-2"
          >
            <Heart className="w-5 h-5 fill-white" /> Just For You
          </motion.button>

          <div className="flex items-center gap-4 text-sm text-white/50 bg-black/20 backdrop-blur-sm p-4 rounded-2xl w-fit border border-white/5">
            <Music className="w-5 h-5" />
            <span>Background Music: Our Song</span>
            <div className="flex items-end gap-0.5 h-4">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [4, 16, 8, 12, 4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-romantic-pink"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center mt-20 md:mt-0">
          <div className="absolute inset-0 bg-romantic-pink/20 blur-[100px] rounded-full scale-75 animate-pulse" />
          <Polaroid 
            image={publicImages[0]} 
            caption="You are my today and all of my tomorrows ❤️"
            rotation={-5}
            delay={0.2}
            className="z-20 scale-100 md:scale-110"
            hasTape={true}
          />
          <Polaroid 
            image={publicImages[1]} 
            rotation={12}
            delay={0.5}
            className="absolute -top-12 -right-12 md:top-0 md:right-0 z-10 scale-75 md:scale-100"
          />
          <Polaroid 
            image={publicImages[2]} 
            rotation={-15}
            delay={0.8}
            className="absolute -bottom-12 -left-12 md:bottom-10 md:left-0 z-30 scale-75 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    { url: publicImages[0] ?? '1.jpeg', caption: "Sweetest smile", rotation: -3 },
    { url: publicImages[1] ?? publicImages[0] ?? '1.jpeg', caption: "Golden hour", rotation: 4 },
    { url: "beautiful-night.png", caption: "Beautiful night", rotation: -2 },
    { url: "1779985403958.png", caption: "Magic", rotation: 5 },
    { url: publicImages[4] ?? publicImages[0] ?? '1.jpeg', caption: "Favorite sunrise", rotation: -4 },
    { url: "mana.png", caption: "Forever yours", rotation: 2 }
  ];

  return (
    <section id="gallery" className="py-24 px-8 md:px-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16 justify-center">
          <div className="h-[1px] w-12 md:w-32 bg-romantic-pink/30" />
          <h2 className="font-cursive text-5xl md:text-6xl text-center">Our Beautiful Memories ✨</h2>
          <div className="h-[1px] w-12 md:w-32 bg-romantic-pink/30" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, rotate: 0 }}
              className="cursor-pointer"
            >
              <Polaroid 
                image={img.url} 
                caption={img.caption} 
                rotation={img.rotation} 
                delay={i * 0.1}
                className="hover:shadow-romantic-pink/20 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const letterText = `🎂 Happy Birthday Manasvi 💖

Marathi madhech lihit aaho, je vatate te, karan English madhe bore pan hote aani feelings tevdya effectively jaat pan naahi.

Mala tu khup aavadte. Tu kahi pan karte te saglach aavadte. Aani tujhe looks, tujhe eyes, tyancha varcha chashma, tujhe nose, lips, kes, tujhi choti si bindi, lahan lahan kanatle… tasach khup kahi aahe je saglach aavadte.

Tula pahun khup changla vatate. Aani tula pahnyasathich mi roj clg la yeto. Tu yet naahi tevha icha pan naahi hot yaychi.

Tu ekdum sundar vatate. Asa vatate divasbhar pahat rahu tulach. Aani khup kahi aahe bolay sathi, pan eka letter madhe saglach yenar naahi.

Once again, Happy Birthday 🎂
Enjoy your day 😊

Tujhach,
Aditya❤️`;

  const [displayedText, setDisplayedText] = useState("");
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      setDisplayedText("");
      typingRef.current = setInterval(() => {
        if (i < letterText.length) {
          setDisplayedText((prev) => prev + letterText.charAt(i));
          i++;
        } else {
          if (typingRef.current) clearInterval(typingRef.current);
        }
      }, 30);
    } else {
      if (typingRef.current) clearInterval(typingRef.current);
      setDisplayedText("");
    }
    return () => { if (typingRef.current) clearInterval(typingRef.current); };
  }, [isOpen]);

  return (
    <section id="letter" className="py-24 px-8 md:px-20 relative z-10">
      <div className="max-w-6xl mx-auto glass-card rounded-[40px] p-1 shadow-2xl overflow-hidden relative border-white/5">
        <div className="flex flex-col md:flex-row bg-white/5 rounded-[39px] overflow-hidden min-h-[600px]">
          
          <div className="md:w-1/3 p-12 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute top-10 left-10 text-romantic-pink/10"><Heart className="w-40 h-40" /></div>
            <Polaroid 
              image="letter-photo.jpg" 
              rotation={2}
              className="z-10 shadow-2xl relative"
            />
          </div>
          
          <div className="md:w-2/3 p-6 md:p-12 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div 
                  key="envelope"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
                  className="flex flex-col items-center gap-8 text-center py-20"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer relative group"
                  >
                    <div className="w-56 h-36 md:w-72 md:h-48 bg-pink-100 rounded-xl shadow-2xl flex items-center justify-center border-b-4 border-pink-200 relative overflow-hidden group-hover:bg-pink-50 transition-colors">
                       <Mail className="w-16 h-16 text-romantic-pink/20" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-romantic-pink rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                           <Heart className="text-white fill-white w-8 h-8" />
                         </div>
                       </div>
                       <motion.div 
                         animate={{ y: [0, -10, 0] }}
                         transition={{ repeat: Infinity, duration: 2 }}
                         className="absolute -top-4 right-4 text-romantic-pink"
                       >
                         ✨
                       </motion.div>
                    </div>
                    <p className="mt-8 font-cursive text-3xl text-romantic-pink glow-text">Click to open your letter</p>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  key="letter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <div className="flex justify-between items-center mb-8">
                     <h2 className="font-cursive text-5xl text-romantic-pink flex items-center gap-3">A Letter For You <Heart className="w-8 h-8 fill-romantic-pink" /></h2>
                     <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Close Letter</button>
                  </div>
                  <div className="torn-paper p-8 md:p-16 shadow-inner min-h-[500px] relative">
                    <div className="absolute top-4 right-4 opacity-50"><MailOpen className="w-8 h-8 text-romantic-pink" /></div>
                    <div className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed whitespace-pre-wrap typing italic">
                      {displayedText}
                    </div>
                    <div className="mt-12">
                      <p className="font-cursive text-4xl text-gray-800 border-t border-gray-200 pt-8 inline-block">Always and endlessly ❤️</p>
                    </div>
                    
                    {/* Petals decorations */}
                    <div className="absolute bottom-6 right-6 flex gap-2">
                       <div className="w-3 h-3 bg-romantic-pink rounded-full blur-[2px] opacity-40 animate-pulse" />
                       <div className="w-2 h-2 bg-pink-300 rounded-full blur-[1px] opacity-60" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => {
  const reasons = [
    { icon: Heart, title: "Your smile heals me", text: "One look at you and all my worries vanish." },
    { icon: HeartHandshake, title: "Magic", text: "You turn ordinary days into extraordinary memories." },
    { icon: Gift, title: "Simply special", text: "Every second spent with you is a gift I cherish." },
    { icon: InfinityIcon, title: "I choose you forever", text: "In every lifetime, it will always be you." }
  ];

  return (
    <section id="reasons" className="py-32 px-8 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <h2 className="font-cursive text-6xl md:text-7xl mb-6 glow-text">Reasons You're My Everything ❤️</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">The list is endless, but here are a few reasons why you are the most special person in my life.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-card p-10 rounded-[30px] flex flex-col items-center text-center gap-6 border-white/5 group hover:border-romantic-pink/30 hover:bg-white/10 transition-all cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-romantic-pink scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-20 h-20 rounded-full bg-romantic-pink/10 flex items-center justify-center group-hover:bg-romantic-pink group-hover:text-white transition-all duration-500 shadow-inner">
                <reason.icon className="w-10 h-10 text-romantic-pink group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fallbackAudio = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleError = () => {
      if (audio.src !== fallbackAudio) {
        audio.src = fallbackAudio;
        audio.load();
        if (!audio.paused) {
          audio.play().catch(() => {
            setIsAudioPlaying(false);
          });
        }
      }
    };

    const handleEnded = () => {
      setIsAudioPlaying(false);
    };

    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsAudioPlaying(true);
      } else {
        audio.pause();
        setIsAudioPlaying(false);
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsAudioPlaying(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-romantic-pink selection:text-white">
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        preload="auto"
        loop
        style={{ display: 'none' }}
      />
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AestheticBackground />
          <Navbar isPlaying={isAudioPlaying} onToggleAudio={toggleAudio} />
          <Hero />
          <GallerySection />
          <LetterSection />
          <ReasonsSection />
          <FinalSurprise />
          
          <footer className="py-16 text-center border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="flex justify-center gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className={`w-5 h-5 ${i % 2 === 0 ? 'text-romantic-pink fill-romantic-pink' : 'text-romantic-pink/20'}`} />
              ))}
            </div>
            <p className="mt-4 text-[10px] text-white/20 uppercase tracking-widest italic">Happy Birthday, My Heart</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
