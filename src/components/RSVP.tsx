import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const RSVP = () => {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden text-center">
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[10%] left-[8%] w-3 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[12%] right-[6%] w-4 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[10%] left-[15%] w-7 animate-float1 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[30%] right-[8%] w-10 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[30%] left-[10%] w-15 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[5%] right-[15%] w-20 animate-float4 z-10"
      />

      <motion.div
        className="relative z-20 max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h2
          className="text-3xl font-bold text-pink-800 font-primary mb-4"
          variants={textVariants}
          custom={0}
        >
          Join the Celebration
        </motion.h2>

        <motion.p
          className="text-gray-700 font-secondary text-sm sm:text-base mb-8"
          variants={textVariants}
          custom={1}
        >
          Your presence will make our special day even more memorable. Kindly
          let us know if you’ll be joining us!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="tel:+911234567890"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariants}
            custom={2}
            className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:bg-pink-700 transition flex items-center justify-center gap-2"
          >
            <img src="/assets/call.png" alt="Call" className="w-7 h-7" />
            Call Us
          </motion.a>

          <motion.a
            href="https://wa.me/911234567890?text=Hi%2C%20we'd%20love%20to%20join%20your%20wedding!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariants}
            custom={2}
            className="bg-green-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <img
              src="/assets/whatsapp.png"
              alt="WhatsApp"
              className="w-7 h-7 rounded"
            />
            Message on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RSVP;
