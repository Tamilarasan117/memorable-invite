import { motion } from "framer-motion";

const timelineEvents = [
  {
    title: "Wedding",
    date: "September 4, 2025",
    time: "5:30 PM",
    venue: "St. Thomas Church, Mulagumoodu, Tamil Nadu",
    side: "left",
  },
  {
    title: "Dinner",
    date: "September 4, 2025",
    time: "7:30 PM",
    venue: "Church Hall, Mulagumoodu, Tamil Nadu",
    side: "right",
  },
  {
    title: "Reception",
    date: "September 5, 2025",
    time: "6:30 PM",
    venue: "Hotel Atrium, Nagercoil, Tamil Nadu",
    side: "left",
  },
  {
    title: "Party",
    date: "September 5, 2025",
    time: "8:30 PM",
    venue: "Hotel Atrium Rooftop, Nagercoil, Tamil Nadu",
    side: "right",
  },
];

const getEventIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case "wedding":
      return "/assets/ring.png";
    case "dinner":
      return "/assets/dinner.jpg";
    case "reception":
      return "/assets/reception.png";
    case "party":
      return "/assets/party.png";
    default:
      return "/assets/Heart.png";
  }
};

const EventDetails = () => {
  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden">
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[10%] left-[5%] w-2 animate-float1 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute top-[30%] right-[8%] w-1 animate-float2 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[45%] left-[10%] w-1.5 animate-float3 z-10"
      />
      <img
        src="/assets/Heart.png"
        alt="Heart"
        className="absolute bottom-[28%] right-[15%] w-2 animate-float4 z-10"
      />

      <h2 className="text-3xl font-bold text-center font-primary text-pink-800 mb-16">
        Event Schedule
      </h2>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-gray-300 z-0" />
        {timelineEvents.map((event, i) => {
          const isLeft = event.side === "left";
          const icon = getEventIcon(event.title);

          return (
            <motion.div
              key={i}
              className={`w-full mb-5 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className={`relative bg-white p-5 rounded-xl shadow-md w-[280px] ${
                  isLeft
                    ? "border-r-[4px] border-purple-500"
                    : "border-l-[4px] border-pink-500"
                }`}
              >
                <img
                  src="/assets/Heart.png"
                  alt="Heart"
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isLeft ? "-right-[34px]" : "-left-[34px]"
                  } w-5 h-5 object-contain`}
                />

                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={icon}
                    alt={event.title}
                    className="w-5 h-5 object-contain"
                  />
                  <h3 className="text-lg font-bold text-purple-800">
                    {event.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {event.time}
                </p>
                <p className="text-xs text-gray-600 mt-1 leading-snug">
                  {event.venue}
                </p>
              </div>
            </motion.div>
          );
        })}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-16">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/QR_Code.jpg"
              className="w-28 h-28 object-contain mb-2"
              alt="Invitation QR"
            />
            <p className="text-xs text-gray-700 font-medium">Invitation QR</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/QR_Code.jpg"
              className="w-28 h-28 object-contain mb-2"
              alt="Location QR"
            />
            <p className="text-xs text-gray-700 font-medium">Location QR</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
