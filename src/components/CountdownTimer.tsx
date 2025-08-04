import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
type CountdownTimerProps = {
  startDelay?: number;
  isPlaying: boolean;
  toggleMusic: () => void;
};

const CountdownTimer = ({
  startDelay = 2,
  isPlaying,
  toggleMusic,
}: CountdownTimerProps) => {
  const targetDate = new Date("2025-09-04T16:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [startAnimation, setStartAnimation] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = getTimeRemaining(targetDate);
      setTimeLeft(updatedTime);
      if (updatedTime.total <= 0) {
        setIsTimeUp(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartAnimation(true);
    }, startDelay * 1000);
    return () => clearTimeout(delay);
  }, [startDelay]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-white/40 backdrop-blur-md py-6 px-0 rounded-xl max-w-md mx-auto"
    >
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[10%] left-[15%] w-3 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[30%] right-[8%] w-4 animate-float2 z-10"
      />

      <motion.div
        className="relative z-10 text-center"
        initial="hidden"
        animate={startAnimation && inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {isTimeUp ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="px-2"
          >
            <motion.p className="text-xl sm:text-2xl font-bold font-primary text-pink-700 mb-2" variants={itemVariants}>
              💖 Forever Begins Today 💍
            </motion.p>
            <motion.p className="text-sm text-gray-600 font-secondary" variants={itemVariants}>
              Our journey as one begins now. Thank you for being part of our
              story.
            </motion.p>
          </motion.div>
        ) : (
          <>
            <motion.p
              className="text-sm text-gray-700 font-secondary mb-3 tracking-wide"
              variants={itemVariants}
            >
              We're getting married in
            </motion.p>

            <motion.div
              className="flex justify-center gap-2 sm:gap-3 flex-nowrap items-center"
              variants={containerVariants}
            >
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hrs" value={timeLeft.hours} />
              <TimeBox label="Mins" value={timeLeft.minutes} />
              <TimeBox label="Secs" value={timeLeft.seconds} />

              <motion.button
                onClick={toggleMusic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                className={`ml-3 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-md flex items-center justify-center transition-transform ring-2 ring-white/60 ${
                  !isPlaying ? "animate-glow-soft" : ""
                }`}
              >
                <img
                  src={isPlaying ? "/assets/Pause.png" : "/assets/Play.png"}
                  alt={isPlaying ? "Pause Music" : "Play Music"}
                  className="w-6 h-6"
                />
              </motion.button>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <motion.div
    className="bg-white/30 backdrop-blur-lg rounded-xl px-2 py-2 ring-1 ring-white/30 flex flex-col items-center justify-center"
    style={{
      width: "52px",
      height: "58px",
      boxShadow: `
        inset 2px 2px 6px rgba(0, 0, 0, 0.15), 
        inset -2px -2px 6px rgba(255, 255, 255, 0.5)
      `,
    }}
    variants={itemVariants}
  >
    <div className="text-[18px] sm:text-[20px] font-bold font-primary text-yellow-600 animate-pulse-gold leading-none">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-[9px] sm:text-[10px] font-secondary text-gray-700 tracking-wide mt-0.5">
      {label}
    </div>
  </motion.div>
);

const getTimeRemaining = (target: Date) => {
  const total = target.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

export default CountdownTimer;
