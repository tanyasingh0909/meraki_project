import React, { useEffect, useState } from "react";

const HomeSection = () => {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setAnimateLogo(true);            // animate once on mount
  }, []);

  return (
    <section
      id="home"
      className="pt-40 pb-40 px-6 md:px-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl text-sunset font-extrabold mb-8 leading-tight">
            Welcome to <br /> MERAKI
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Craving something delicious? We’ve got you covered. Freshly prepared
            meals, delivered right to your doorstep.
          </p>

          <a
            href="#about"
            className="inline-block bg-sunset text-white text-lg px-8 py-4 rounded-lg hover:bg-jellyBeanBlue transition"
          >
            Know&nbsp;About&nbsp;Us
          </a>
        </div>

        {/* Right: Extra-large animated logo */}
        <div className="flex-1 flex justify-center">
          <div
            className={`w-[28rem] h-[28rem] rounded-full overflow-hidden shadow-2xl border-[8px] border-sunset transform transition-all duration-1000 ease-out ${
              animateLogo ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <img
              src="/images/meraki_logo.png"
              alt="Meraki Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
