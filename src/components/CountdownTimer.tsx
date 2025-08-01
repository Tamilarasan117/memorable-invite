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

const CountdownTimer = ({ startDelay = 2 }: { startDelay?: number }) => {
  const targetDate = new Date("2025-09-04T18:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
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
      className="relative bg-white/40 backdrop-blur-md mt-3 py-6 px-4 rounded-xl max-w-md mx-auto"
    >
      <img
        src="/assets/Heart.png"
        alt="Butterfly"
        className="absolute top-[10%] left-[15%] w-3 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Butterfly"
        className="absolute top-[30%] right-[8%] w-4 animate-float2 z-10"
      />

      <motion.div
        className="relative z-10 text-center"
        initial="hidden"
        animate={startAnimation && inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm text-gray-700 font-secondary mb-3 tracking-wide"
          variants={itemVariants}
        >
          We're getting married in
        </motion.p>

       <motion.div
  className="flex justify-center gap-2 sm:gap-6 flex-nowrap"
  variants={containerVariants}
>
  <TimeBox label="Days" value={timeLeft.days} />
  <TimeBox label="Hrs" value={timeLeft.hours} />
  <TimeBox label="Mins" value={timeLeft.minutes} />
  <TimeBox label="Secs" value={timeLeft.seconds} />
</motion.div>

      </motion.div>
    </section>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <motion.div
  className="bg-white/30 backdrop-blur-lg rounded-2xl px-3 py-3 ring-1 ring-white/30 flex flex-col items-center justify-center"
  style={{
    width: "65px",
    height: "70px",
    boxShadow: `
      inset 4px 4px 8px rgba(0, 0, 0, 0.15), 
      inset -4px -4px 8px rgba(255, 255, 255, 0.6)
    `,
  }}
  variants={itemVariants}
>
  <div className="text-[24px] sm:text-[28px] font-bold font-primary text-yellow-600 animate-pulse-gold leading-none">
    {String(value).padStart(2, "0")}
  </div>
  <div className="text-[10px] sm:text-xs font-secondary text-gray-700 tracking-wide mt-1">
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
