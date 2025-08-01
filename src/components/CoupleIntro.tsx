import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const CoupleIntro = () => {
  return (
    <section className="relative bg-white px-4 py-12 text-center overflow-hidden">
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[10%] left-[5%] w-7 animate-float1 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[30%] right-[8%] w-10 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[15%] left-[10%] w-15 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[5%] right-[15%] w-20 animate-float4 z-10"
      />

      <div className="relative z-10 max-w-md mx-auto">
        <motion.h2
          className="text-3xl font-bold font-primary text-pink-800 mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          Meet the Couple
        </motion.h2>

        <div className="flex items-center justify-center gap-4">
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 shadow-xl rounded-2xl p-5 w-[150px] relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            <div className="absolute -top-4 -right-4 w-6 h-6">
              <img
                src="/assets/butterfly.png"
                alt="Butterfly"
                className="animate-float1"
              />
            </div>
            <img
              src="/assets/bride1.png"
              alt="Bride"
              className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-white shadow-md"
            />
            <h3 className="text-lg font-bold font-primary text-pink-900">
              Karthik
            </h3>
            <p className="text-xs font-secondary text-gray-600">
              M.A. Literature
            </p>
          </motion.div>

          <motion.img
            src="/assets/ring.png"
            alt="Wedding Ring"
            className="w-12 h-12 object-contain mx-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={2}
          />

          <motion.div
            className="bg-gradient-to-bl from-pink-50 to-pink-100 border border-pink-200 shadow-xl rounded-2xl p-5 w-[150px] relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={3}
          >
            <div className="absolute -bottom-4 -left-4 w-6 h-6">
              <img
                src="/assets/butterfly.png"
                alt="Butterfly"
                className="animate-float2"
              />
            </div>
            <img
              src="/assets/groom1.png"
              alt="Groom"
              className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-white shadow-md"
            />
            <h3 className="text-lg font-bold font-primary text-pink-900">
              Aarthi
            </h3>
            <p className="text-xs font-secondary text-gray-600">
              B.E. Computer Science
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          className="mt-10 px-4 italic text-sm text-gray-700 font-secondary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={4}
        >
          "Two souls, two hearts, one promise of forever."
        </motion.blockquote>
      </div>
    </section>
  );
};

export default CoupleIntro;
