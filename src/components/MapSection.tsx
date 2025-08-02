import { motion } from "framer-motion";

const mapVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const MapSection = () => {
  return (
    <section className="relative bg-white backdrop-blur-lg py-16 px-4 overflow-hidden">
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[8%] left-[10%] w-4 animate-float1 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute top-[20%] right-[5%] w-8 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[10%] left-[15%] w-10 animate-float3 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[5%] right-[12%] w-5 animate-float4 z-10"
      />

      <motion.h2
        className="text-3xl font-bold text-pink-800 font-primary text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={mapVariants}
        custom={0}
      >
        Venue Locations
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-white/60 rounded-2xl p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={mapVariants}
        custom={1}
      >
        <div className="flex-1 text-center">
          <h3 className="text-xl font-semibold text-pink-700 mb-3 font-primary">
            Marriage Location
          </h3>
          <a
            href="https://maps.app.goo.gl/749FNDVLuLFs84G28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pink-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-pink-700 transition gap-3"
          >
            <span>View on Google Maps</span>
            <img
              src="/assets/map.png"
              alt="Map"
              className="w-6 h-6 object-contain rounded"
            />
          </a>
        </div>

        <div className="w-[1px] h-12 bg-pink-200 hidden sm:block" />

        <div className="flex-1 text-center">
          <h3 className="text-xl font-semibold text-pink-700 mb-3 font-primary">
            Reception Location
          </h3>
          <a
            href="https://maps.app.goo.gl/749FNDVLuLFs84G28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pink-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-pink-700 transition gap-3"
          >
            <span>View on Google Maps</span>
            <img
              src="/assets/map.png"
              alt="Map"
              className="w-6 h-6 object-contain rounded"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;
