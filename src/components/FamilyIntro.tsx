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

const FamilyIntro = () => {
  return (
    <section className="bg-white py-16 px-6 overflow-hidden text-center relative">
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
          className="bg-pink-50 border border-pink-200 p-6 rounded-lg shadow-md w-full sm:w-1/2"
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
          <h3 className="text-lg font-bold text-pink-700 mb-1">
            Bride – Anjali
          </h3>
          <p className="text-sm text-gray-600 font-secondary">
            Anjali is a creative soul, deeply rooted in tradition, with a kind
            heart and infectious smile. Her presence fills our home with joy.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-md w-full sm:w-1/2"
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
          <h3 className="text-lg font-bold text-blue-700 mb-1">
            Groom – Arjun
          </h3>
          <p className="text-sm text-gray-600 font-secondary">
            Arjun is full of charm and compassion, always the light of every
            room. His dedication to family is as strong as his sense of humor.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4 overflow-hidden">
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
                className="h-40 w-64 object-cover rounded-xl shadow-md border border-gray-100 flex-shrink-0"
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
                className="h-40 w-64 object-cover rounded-xl shadow-md border border-gray-100 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyIntro;
