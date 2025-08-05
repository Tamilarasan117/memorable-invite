import { motion } from "framer-motion";

const slideVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const CoupleCard = ({
  backgroundPosition = "left",
  from,
}: {
  backgroundPosition?: "left" | "right";
  from: "left" | "right";
}) => {
  const variant = from === "left" ? "hiddenLeft" : "hiddenRight";

  return (
    <motion.div
      className={`w-[275px] h-[275px] bg-center bg-cover`}
      style={{
        backgroundImage: "url('/assets/CoupleCard.png')",
        backgroundPosition: backgroundPosition,
      }}
      variants={slideVariants}
      initial={variant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    />
  );
};

const CoupleInfo = ({
  name,
  designation,
  parents,
  address,
  align,
  from,
}: {
  name: string;
  designation: string;
  parents: string;
  address: string;
  index: number;
  align: "left" | "right";
  from: "left" | "right";
}) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-end text-right";
  const variant = from === "left" ? "hiddenLeft" : "hiddenRight";

  return (
    <motion.div
      className={`max-w-[250px] flex flex-col ${alignment}`}
      variants={slideVariants}
      initial={variant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h3 className="text-base font-bold font-primary text-purple-700">
        {name}
      </h3>
      <p className="text-[11px] mt-1 font-secondary leading-tight text-gray-700">
        {designation}
      </p>
      <p className="text-[11px] font-secondary leading-tight mt-1 text-gray-700">
        {parents}
      </p>
      <p className="text-[10px] font-secondary leading-tight mt-1 italic text-gray-500">
        {address}
      </p>
    </motion.div>
  );
};

const CoupleIntro = () => {
  return (
    <section className="relative bg-white px-4 py-7 text-center overflow-hidden">
      <motion.h2
        className="text-3xl font-bold font-primary text-pink-800 mb-7"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Meet the Couple
      </motion.h2>

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
      <img
        src="/assets/butterfly.png"
        className="absolute top-[15%] right-[15%] w-10 animate-float2 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/butterfly.png"
        className="absolute bottom-[45%] left-[10%] w-15 animate-float3 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/Heart.png"
        alt="Butterfly"
        className="absolute bottom-[35%] left-[10%] w-2 animate-float3 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Butterfly"
        className="absolute bottom-[45%] right-[15%] w-3 animate-float4 z-10"
      />
      <img
        src="/assets/butterfly.png"
        className="absolute bottom-[15%] left-[25%] w-10 animate-float3 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/Heart.png"
        alt="Butterfly"
        className="absolute bottom-[10%] right-[10%] w-2 animate-float3 z-10"
      />

      <div className="relative w-full max-w-[600px] h-[320px] mx-auto mb-12">
        <div className="absolute top-0 left-0">
          <CoupleCard backgroundPosition="left" from="left" />
        </div>
        <div className="absolute bottom-3 right-5">
          <CoupleInfo
            name="V.S. Sarah"
            designation="Senior Developer"
            parents="D/o. Mr. G. Vijayakumar & J. Jegatha."
            address="Heavenly Garden, Therivillai, Mulagumoodu P.O."
            index={1}
            align="right"
            from="right"
          />
        </div>
      </div>

      <div className="relative w-full max-w-[600px] h-[320px] mx-auto">
        <div className="absolute top-0 right-0">
          <CoupleCard backgroundPosition="right" from="right" />
        </div>
        <div className="absolute bottom-5 left-5">
          <CoupleInfo
            name="John Michael"
            designation="Software Engineer"
            parents="S/o. Mr. Michael & Mrs. Grace"
            address="St. Joseph Street, Nagercoil, Tamil Nadu"
            index={2}
            align="left"
            from="left"
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;
