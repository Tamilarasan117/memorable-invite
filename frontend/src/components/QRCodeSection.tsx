import React from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const QRCodeSection: React.FC = () => {
  const weddingLink = "https://memorable-invite.vercel.app/";

  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden text-center">
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[10%] left-[5%] w-2 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[23%] right-[8%] w-2 animate-float2 z-10"
      />
      <img
        src="/assets/butterfly.png"
        className="absolute top-[15%] right-[15%] w-10 animate-float2 z-10"
        alt="Butterfly"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[65%] left-[10%] w-2 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[1%] right-[15%] w-10 animate-float4 z-10"
      />

      <motion.div
        className="flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2
          className="text-2xl font-bold mb-4 text-pink-600"
          variants={textVariants}
          custom={0}
        >
          Scan to View Invitation
        </motion.h2>

        <motion.div variants={textVariants} custom={1} className="relative">
          <QRCode value={weddingLink} size={200} />
          <img
            src="/assets/Logo.png"
            alt="Memorable Invite Logo"
            className="absolute inset-0 m-auto w-13 h-7 bg-white p-1"
          />
        </motion.div>

        <motion.p
          className="mt-4 text-gray-600 text-center"
          variants={textVariants}
          custom={2}
        >
          Point your camera to scan <br /> and open the wedding invitation.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default QRCodeSection;
