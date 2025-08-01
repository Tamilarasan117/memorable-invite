import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const WelcomeSection = () => {
  return (
    <section
      className="relative min-h-[100vh] flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: "url('/assets/Welcome_bg1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <img
        src="/assets/Top_design.png"
        alt="Top Flower Design"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-1 pointer-events-none"
      />

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
        className="absolute bottom-[45%] left-[10%] w-15 animate-float3 z-10"
      />
      <img
        src="/assets/butterfly.png"
        alt="Butterfly"
        className="absolute bottom-[25%] right-[15%] w-20 animate-float4 z-10"
      />

      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-[320px] mx-auto py-10">
        <div className="relative w-[325px] h-[325px] mx-auto">
          <motion.img
            src="/assets/Welcome_animation_img.png"
            alt="Floral Ring"
            className="w-full h-full mx-auto object-contain"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />

          <div className="absolute inset-0 top-0 flex flex-col items-center justify-center">
            <motion.h1
              className="text-3xl font-bold text-pink-900 font-primary"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Karthik
            </motion.h1>

            <motion.img
              src="/assets/ring.png"
              alt="Ring Icon"
              className="w-8 my-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            />

            <motion.h1
              className="text-3xl font-bold text-pink-900 font-primary"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Aarthi
            </motion.h1>
          </div>
        </div>

        <motion.h2
          className="mt-3 text-xl font-semibold text-gray-800 tracking-wider font-primary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          We invite you to celebrate love and commitment with us
        </motion.h2>

        <motion.p
          className="mt-4 text-sm font-medium text-gray-800 font-secondary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          SEPTEMBER{" "}
          <span className="text-base font-bold text-pink-700">04 & 05</span> at
          6 PM
        </motion.p>

        <motion.p
          className="mt-2 text-xs text-gray-700 font-secondary"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          @ Chennai, Tamil Nadu <br />
          <span className="italic text-[10px]">Reception to follow</span>
        </motion.p>
      </div>
      <CountdownTimer startDelay={2} />
    </section>
  );
};

export default WelcomeSection;
