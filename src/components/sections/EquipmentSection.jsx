import { useState, useMemo } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EquipmentData } from "@/data/equipmentData";

export default function EquipmentSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(EquipmentData.map((item) => item.category))],
    [],
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? EquipmentData
        : EquipmentData.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <SectionWrapper id="equipment">
      <SectionHeading
        label="OUR GEAR"
        title="Equipment & Facilities"
        subtitle="World-class hardware and meticulously tuned acoustics — everything you need to capture perfection."
        align="center"
      />

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 mb-2 top-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-poppins font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-[#b58709] text-black"
                : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Equipment grid */}
      <div className="flex items-center justify-center gap-10">
        <div className="w-[700px]">
          
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filtered.map((item, idx) => {
            return (
              <GlassCard key={idx}>
                {/* Image placeholder */}
                <div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={item.imageUrl}
                    alt={item.name}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out hover:scale-105"
                    ></img>
                </div>

                {/* Category badge */}
                <span className="inline-block rounded-full bg-[#b58709]/10 text-[#b58709] text-xs font-semibold px-3 py-1 mb-2 font-poppins">
                  {item.category}
                </span>

                {/* Details */}
                <h3 className="text-base font-semibold font-poppins text-white">
                  {item.name}
                </h3>
                {item.brand && (
                  <p className="text-xs text-white/40 font-poppins mt-1">
                    {item.brand}
                  </p>
                )}
                {item.description && (
                  <p className="text-sm text-white/50 font-poppins mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
        </div>
        <div className="w-[300px] h-full flex flex-col items-center justify-center">
          <img 
            src="../../../public/img/strat.webp"
            className="rotate-270 scale-300 transition-transform duration-300 hover:scale-350"
            />

            {/* TO DO : FIX THE ALIGNMENT & FIX THE HARDCODED NEW ITEM NAME */}

            <div className="px-10 py-4 rounded-full bg-amber-900 bottom-0 mt-110">
              <h1 className="">
                Fender Strat
              </h1>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
