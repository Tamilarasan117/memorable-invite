import { motion } from "framer-motion";

const photoList1 = [
  "/assets/family/family1.jpg",
  "/assets/couple/bride1.jpg",
  "/assets/family/family4.jpg",
  "/assets/couple/couple2.jpg",
  "/assets/family/family7.jpg",
  "/assets/couple/groom1.jpg",
  "/assets/family/family10.jpg",
  "/assets/couple/bride6.jpg",
  "/assets/family/family13.jpg",
  "/assets/couple/bride7.jpg",
  "/assets/family/family19.jpg",
];

const photoList2 = [
  "/assets/family/family2.jpg",
  "/assets/couple/bride2.jpg",
  "/assets/family/family5.jpg",
  "/assets/couple/couple3.jpg",
  "/assets/family/family8.jpg",
  "/assets/couple/groom3.jpg",
  "/assets/family/family20.jpg",
  "/assets/family/family11.jpg",
  "/assets/couple/groom7.jpg",
  "/assets/family/family12.jpg",
  "/assets/family/family14.jpg",
  "/assets/family/family16.jpg",
];

const photoList3 = [
  "/assets/family/family3.jpg",
  "/assets/couple/bride3.jpg",
  "/assets/family/family6.jpg",
  "/assets/couple/couple4.jpg",
  "/assets/family/family9.jpg",
  "/assets/couple/groom4.jpg",
  "/assets/family/family12.jpg",
  "/assets/couple/bride11.jpg",
  "/assets/family/family15.jpg",
  "/assets/family/family17.jpg",
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
          A look into the joyful journey of Vinayagam & Nithya.
        </motion.p>
      </motion.div>

      <img
        src="/assets/images/Heart.png"
        alt="Heart"
        className="absolute top-[5%] left-[8%] w-4 animate-float1 z-10"
      />
      <img
        src="/assets/images/Heart.png"
        alt="Heart"
        className="absolute bottom-[10%] right-[5%] w-6 animate-float2 z-10"
      />
      <img
        src="/assets/images/butterfly.png"
        alt="Butterfly"
        className="absolute top-[10%] left-[15%] w-7 animate-float3 z-10"
      />
      <img
        src="/assets/images/butterfly.png"
        alt="Butterfly"
        className="absolute top-[30%] right-[10%] w-10 animate-float4 z-10"
      />
      <img
        src="/assets/images/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[5%] left-[10%] w-14 animate-float3 z-10"
      />

      <div className="relative max-w-5xl mx-auto overflow-hidden h-[675px] z-20">
        <div className="flex gap-4">
          <motion.div
            className="flex flex-col gap-3 w-1/3"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList1, ...photoList1].map((src, i) => (
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
            {[...photoList2, ...photoList2].map((src, i) => (
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
            {[...photoList3, ...photoList3].map((src, i) => (
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
