import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const photoList = [
  "/assets/group1.jpg",
  "/assets/group2.jpg",
  "/assets/group3.jpg",
  "/assets/group4.jpg",
  "/assets/group5.jpg",
  "/assets/group6.jpg",
  "/assets/group7.jpg",
  "/assets/group8.jpg",
  "/assets/group9.jpg",
];

const FamilyIntro = () => {
  return (
    <section className="bg-white py-16 px-6 overflow-hidden text-center relative">
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[10%] left-[5%] w-2 animate-float1 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Heart"
        className="absolute bottom-[58%] right-[45%] w-10 animate-float4 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[23%] right-[8%] w-2 animate-float2 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[65%] left-[10%] w-2 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Heart"
        className="absolute bottom-[1%] right-[15%] w-10 animate-float4 z-10"
      />
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
          className="text-3xl font-bold text-pink-800 font-primary mb-4"
          variants={textVariants}
          custom={0}
        >
          Our Loving Families
        </motion.h2>
        <motion.p
          className="text-gray-700 font-secondary text-base"
          variants={textVariants}
          custom={1}
        >
          We are blessed with the support, love, and warmth of our families who
          have been with us every step of the way.
        </motion.p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-3">
        <motion.div
          className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md w-full sm:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/bride.jpg"
            alt="Bride"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-4"
          />
          <h3 className="text-lg font-bold font-primary text-pink-700 mb-1">
            Bride – Anjali
          </h3>
          <p className="text-sm text-gray-600 font-secondary">
            Anjali is a creative soul, deeply rooted in tradition, with a kind
            heart and infectious smile. Her presence fills our home with joy.
          </p>
        </motion.div>

        <motion.div
          className="bg-pink-50 border border-pink-200 p-6 rounded-lg shadow-md w-full sm:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/groom.jpg"
            alt="Groom"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-4"
          />
          <h3 className="text-lg font-bold font-primary text-blue-700 mb-1">
            Groom – Arjun
          </h3>
          <p className="text-sm text-gray-600 font-secondary">
            Arjun is full of charm and compassion, always the light of every
            room. His dedication to family is as strong as his sense of humor.
          </p>
        </motion.div>
      </div>

      <div className="mt-5 max-w-3xl mx-auto mb-5">
        <video
          src="/video/family.mp4"
          controls
          playsInline
          className="w-full rounded-xl shadow-lg border border-gray-200"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-2 overflow-hidden">
        <div className="overflow-hidden max-w-[100vw]">
          <motion.div
            className="flex gap-2 w-max px-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList, ...photoList].map((src, i) => (
              <img
                key={`row1-${i}`}
                src={src}
                alt={`Family ${i}`}
                className="h-35 w-60 object-cover rounded-xl shadow-md border border-gray-100 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden max-w-[100vw]">
          <motion.div
            className="flex gap-2 w-max px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...photoList, ...photoList].map((src, i) => (
              <img
                key={`row2-${i}`}
                src={src}
                alt={`Family ${i}`}
                className="h-35 w-60 object-cover rounded-xl shadow-md border border-gray-100 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyIntro;
