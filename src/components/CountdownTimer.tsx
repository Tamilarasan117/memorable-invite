import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-04T18:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (timeLeft.total <= 0) {
    return (
      <section className="relative bg-white/60 backdrop-blur-md py-10 overflow-hidden text-center">
        <div className="text-pink-700 font-primary text-xl z-10 relative">
          💖 It's Time to Celebrate! 💖
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative bg-white backdrop-blur-lg py-16 overflow-hidden text-center"
    >
      {/* Butterflies */}
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[8%] left-[6%] w-10 animate-float1 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[15%] right-[7%] w-7 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[18%] left-[10%] w-10 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[8%] right-[12%] w-15 animate-float4 z-10"
      />

      <motion.div
        className="relative z-10 max-w-full mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold font-primary text-pink-800 mb-6 tracking-wide">
          Countdown to Our Special Day
        </h2>

        <div className="flex justify-center gap-3 flex-wrap">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </motion.div>
    </section>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <motion.div
    className="bg-white/20 backdrop-blur-xl rounded-2xl px-4 py-3 ring-inset ring-1 ring-white/20 flex flex-col items-center justify-center"
    style={{
      width: "80px",
      height: "80px",
      boxShadow:
        "inset 0 0 10px rgba(255,255,255,0.1), inset 0 0 10px rgba(0,0,0,0.2)",
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-[28px] sm:text-3xl font-bold font-primary text-yellow-600 drop-shadow-gold-glow animate-pulse-gold leading-tight">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-[12px] font-secondary text-gray-700 tracking-wide mt-1">
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
