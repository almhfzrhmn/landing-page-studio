import { Award, Music, Users, Headphones} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { aboutHighlights } from "../../data/siteData";

const iconMap = {
  Award,
  Music,
  Users,
  Headphones,
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="w-full text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 lg:mb-24">
            <div className="max-w-xl font-poppins">
              <span className="text-sm font-light">SoundSpace Studio</span>
              <h2 className="font-black text-3xl tracking-tight leading-tight uppercase">
                Defining the Standard of
                <span className="px-1 text-cyan-700">Modern Audio</span>{" "}
                Production
              </h2>
            </div>
            <div className="max-w-md lg:mt-8">
              <p className="font-light text-sm text-right">
                SoundSpace Studio is a creative sanctuary built for artists to
                push boundaries. With 10+ years of experience, we feature
                acoustically treated live rooms and meticulously calibrated
                control suites designed to eliminate any creative limits.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {aboutHighlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Music;
              return (
                <GlassCard
                  key={idx}
                  className="relative p-8 rounded-lg min-h-[260px] flex flex-col justify-between transition-all duration-300"
                >
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-zin-600 rounded-tl-sm" />
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border">
                    <Icon size={32} />
                  </div>
                  <div className="mt-12">
                  <h3 className="">{item.title}</h3>
                  <p className="">{item.description}</p>

                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
