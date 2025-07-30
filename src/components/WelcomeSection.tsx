import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
}

const WelcomeSection = () => {
  return (
    <section
      className="relative min-h-[100vh] flex justify-center text-center"
      style={{
        backgroundImage: "url('/assets/Welcome_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-[320px] mx-auto py-10">
        <div className="relative w-[300px] h-[300px] mx-auto">
          <motion.img
            src="/assets/Welcome_animation_img.png"
            alt="Floral Ring"
            className="w-full h-full mx-auto object-contain"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
              className="text-2xl font-bold text-pink-900 font-signature"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Aarthi
            </motion.h1>

            <motion.span
              className="text-sm italic mb-3 text-gray-600 font-elegant"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              and
            </motion.span>

            <motion.h1
              className="text-2xl font-bold text-pink-900 font-signature"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Karthik
            </motion.h1>
          </div>
        </div>

        <motion.h2
          className="mt-3 text-xl font-semibold text-gray-800 tracking-wider font-signature"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          We invite you to celebrate love and commitment with us
        </motion.h2>

        <motion.p
          className="mt-4 text-sm font-medium text-gray-800 font-elegant"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          SEPTEMBER <span className="text-base font-bold text-pink-700">04 & 05</span> at 6 PM
        </motion.p>

        <motion.p
          className="mt-2 text-xs text-gray-700 font-elegant"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          @ Chennai, Tamil Nadu <br />
          <span className="italic text-[10px]">Reception to follow</span>
        </motion.p>
      </div>
    </section>
  )
}

export default WelcomeSection
