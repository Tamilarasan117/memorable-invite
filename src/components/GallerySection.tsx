import { motion } from "framer-motion";

const photoList = [
  "/assets/family1.jpg",
  "/assets/family2.jpg",
  "/assets/family3.jpg",
  "/assets/family4.jpg",
  "/assets/family5.jpg",
  "/assets/family6.jpg",
  "/assets/family7.jpg",
  "/assets/family8.jpg",
  "/assets/family9.jpg",
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const GallerySection = () => {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden text-center">
      <motion.div
        className="max-w-2xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="text-3xl font-bold text-pink-700 font-primary mb-4"
          variants={textVariants}
          custom={0}
        >
          Cherished Couple Moments
        </motion.h2>
        <motion.p
          className="text-gray-700 font-secondary text-base"
          variants={textVariants}
          custom={1}
        >
          A look into the joyful journey of Anjali & Arjun — from stolen glances
          to eternal promises.
        </motion.p>
      </motion.div>

      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[5%] left-[8%] w-4 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[10%] right-[5%] w-6 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[10%] left-[15%] w-7 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[30%] right-[10%] w-10 animate-float4 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[5%] left-[10%] w-14 animate-float3 z-10"
      />

      <div className="relative max-w-5xl mx-auto overflow-hidden h-[640px] z-20">
        <div className="flex gap-4">
          <motion.div
            className="flex flex-col gap-3 w-1/3"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList, ...photoList].map((src, i) => (
              <img
                key={`col1-${i}`}
                src={src}
                alt={`Couple ${i}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 w-1/3"
            animate={{ y: ["-50%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList, ...photoList].map((src, i) => (
              <img
                key={`col2-${i}`}
                src={src}
                alt={`Couple ${i}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 w-1/3"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 31, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList, ...photoList].map((src, i) => (
              <img
                key={`col3-${i}`}
                src={src}
                alt={`Couple ${i}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
