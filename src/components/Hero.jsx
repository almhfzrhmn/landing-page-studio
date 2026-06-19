import { Button } from "@heroui/react";
import FuzzyText from "./FuzzyText.jsx";
import EvilEye from "./EvilEye.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-24 text-white"
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(220,38,38,0.2),transparent_50%),linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.95)_100%)]" />

      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <EvilEye
          eyeColor="#5d0712"
          intensity={1.5}
          pupilSize={0.6}
          irisWidth={0.25}
          glowIntensity={0.35}
          scale={0.8}
          noiseScale={1}
          pupilFollow={1}
          flameSpeed={0.3}
          backgroundColor="#120F17"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center px-5 pb-24 pt-16 md:px-6">
        {/* Sub-heading Context */}
        <p className="mb-3 font-poppins text-xs font-semibold tracking-widest uppercase text-white/50 md:text-sm">
          Makes your dreams come true in
        </p>

        {/* Main Heading Text Wrapper with Fluid Sizing */}
        <div className="w-full font-unifraktur-cook leading-none flex justify-center py-2">
          <FuzzyText
            baseIntensity={0.04}
            hoverIntensity={0.85}
            enableHover
            fontSize="clamp(2.8rem, 7.5vw, 6.5rem)"
            fontFamily="inherit"
            color="#b58709"
            glitchInterval={0.6}
          >
            SoundSpace Studio
          </FuzzyText>
        </div>

        {/* Description Body */}
        <p className="mt-6 max-w-2xl font-poppins text-base leading-tight tracking-tight text-white/70 md:text-lg">
          A modern production room for artists who want clean captures, warm
          detail, and gear that stays out of the creative flow.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-center w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-[#b58709]/50 hover:bg-[#b58709] text-white font-semibold px-8 py-6 text-sm tracking-wide border border-red-500/20 cursor-pointer transition-all duration-300 hover:scale-105 rounded-full shadow-lg shadow-red-900/40 hover:scale-120">
            See Gears
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto text-white px-8 py-6 text-sm font-semibold tracking-wide border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 rounded-full backdrop-blur-sm"
          >
            Explore Studio
          </Button>

        </div>
      </div>

      {/* 5. Minimalist Footer Border & Utility Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden sm:block">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex items-center justify-between py-5 text-[10px] font-semibold uppercase tracking-widest text-white/40">
            <span>SoundSpace Studio</span>
            <span>New gears available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
