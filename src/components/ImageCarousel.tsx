import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  "/assets/carousel/1.jpg",
  "/assets/carousel/2.jpg",
  "/assets/carousel/3.jpg",
  "/assets/carousel/4.jpg",
];

const ImageCarousel = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextImage = () => {
    setCurrent(([prev]) => [(prev + 1) % images.length, 1]);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextImage, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white py-12 overflow-hidden relative">
      <img
        src="/assets/butterfly.png"
        className="absolute top-[16%] left-[6%] w-4 animate-float1 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/Heart.png"
        className="absolute bottom-[12%] right-[8%] w-2 animate-float2 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/butterfly.png"
        className="absolute top-[60%] left-[48%] w-5 animate-float3 z-10"
        alt="Butterfly"
      />

      <motion.div
        className="max-w-sm mx-auto px-4 relative z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold font-primary text-pink-800 text-center mb-6">
          Our Journey Together
        </h2>

        <div className="relative w-full h-[220px] rounded overflow-hidden shadow-lg">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={images[current]}
              src={images[current]}
              alt={`Memory ${current + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "bg-pink-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImageCarousel;
