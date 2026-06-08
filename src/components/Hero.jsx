// import React from "react";
import { Button } from "@heroui/react";
import FloatingLines from "./ui/FloatingLines.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full text-white overflow-hidden min-h-[85vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive
          parallax={true}
          animationSpeed={1}
          linesGradient={["#e945f5", "#6f6f6f", "#6a6a6a"]}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 gap-12 items-center w-full">
        <div className="flex flex-col space-y-6 text-center justify-center z-10">
          <h1 className="font-poppins font-semibold tracking-normal text-5xl mt-0 mb-0">
            Makes your dreams come true in
          </h1>
          <span className="font-russo-one font-bold tracking-tight text-6xl mt-2">
            SoundSpace
            <span className="text-red-600">Studio</span>
          </span>
          <p className="text-sm tracking-normal font-light">
            Check Out Our New Gears!
          </p>
          <div className="flex items-center justify-center">
            <Button className="bg-transparent text-white text-sm font-light transition-all duration-300 hover:bg-orange-600 cursor-pointer border-2 backdrop-blur-2xl border-red-500">
              See Gears
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
