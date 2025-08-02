import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const dummyMessages = [
  {
    name: "Ravi",
    message: "Wishing you both a lifetime of love and happiness!",
    avatar: "/assets/ring.png",
  },
  {
    name: "Divya",
    message: "May your journey together be filled with endless joy ❤️",
    avatar: "/assets/Heart.png",
  },
  {
    name: "Anand",
    message: "Congratulations! Blessings for a beautiful future.",
    avatar: "/assets/groom1.png",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const Blessings = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newMsg = {
      name,
      message: text,
      avatar: "/assets/avatar_default.png",
    };

    setMessages((prev) => [newMsg, ...prev]);
    setIndex(0);
    setName("");
    setText("");
  };

  return (
    <section className="bg-white py-16 px-4 text-center relative overflow-hidden">
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

      <motion.h2
        className="text-3xl font-bold text-pink-800 font-primary mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={textVariants}
      >
        Your Blessings
      </motion.h2>

      <motion.p
        className="text-gray-700 font-secondary text-sm sm:text-base mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={textVariants}
      >
        Thank you for your love and blessings. Scroll to read or share yours!
      </motion.p>

      <motion.div
        className="relative max-w-xl h-[200px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={textVariants}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center px-4"
          >
            <img
              src={messages[index].avatar}
              alt={messages[index].name}
              className="w-20 h-20 rounded-full object-cover mb-4 shadow-lg shadow-pink-300"
            />
            <h3 className="text-md font-semibold text-gray-800">
              {messages[index].name}
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-md">
              {messages[index].message}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-pink-600 hover:bg-pink-100 transition"
          style={{
            boxShadow:
              "0 4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(255,192,203,0.4)",
          }}
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-pink-600 hover:bg-pink-100 transition"
          style={{
            boxShadow:
              "0 4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(255,192,203,0.4)",
          }}
        >
          <HiChevronRight />
        </button>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-pink-300 focus:outline-none"
          variants={textVariants}
          custom={3}
        />
        <motion.textarea
          placeholder="Your Blessing or Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-pink-300 focus:outline-none"
          variants={textVariants}
          custom={4}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-pink-700 transition"
          variants={textVariants}
          custom={5}
        >
          Submit Blessing
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Blessings;
