const Footer = () => {
  return (
    <footer className="relative bg-white backdrop-blur-md text-center py-6 overflow-hidden">
      <div className="z-10 relative max-w-md mx-auto px-4">
        <h4 className="text-pink-800 font-bold font-primary text-lg font-semibold">
          Memorable Invite
        </h4>
        <p className="text-[13px] text-gray-700 font-secondary mt-1">
          Crafted with 💖 to make your moments unforgettable
        </p>

        <p className="text-[11px] text-gray-500 mt-2 font-secondary italic">
          © 2025 Memorable Invite. All rights reserved.
        </p>
      </div>

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
    </footer>
  );
};

export default Footer;
