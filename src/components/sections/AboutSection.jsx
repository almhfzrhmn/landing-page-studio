import { Award, Music, Users, Headphones } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { aboutHighlights } from '../../data/siteData';

const iconMap = {
  Award,
  Music,
  Users,
  Headphones,
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="WHO WE ARE"
        title={
          <>
            Sound<span className="text-red-700">Space</span> Story
          </>
        }
        subtitle="Where passion meets precision — crafting sonic excellence since day one."
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        {/* Left — narrative */}
        <div className="space-y-6">
          <p className="font-poppins text-white/70 text-base leading-relaxed">
            SoundSpace Studio was born from a singular obsession: to build a
            creative sanctuary where artists feel free to push boundaries. Over
            the span of <span className="text-white font-semibold">10+ years</span>,
            we've refined every square foot of our facility — from the acoustically
            treated live rooms to the meticulously calibrated control suites — so
            that the only limit is your imagination.
          </p>

          <p className="font-poppins text-white/70 text-base leading-relaxed">
            Our engineers and producers have lent their ears to hundreds of
            projects spanning hip-hop, orchestral scoring, indie-rock, and
            electronic music. No matter the genre, SoundSpace delivers a
            signal-chain you can trust and an atmosphere that fuels creativity.
          </p>

          <blockquote className="border-l-2 border-[#b58709] pl-4 font-poppins text-white/80 italic text-base leading-relaxed">
            "Our vision is simple — give every artist access to world-class sound
            without the world-class ego. Great records start with great spaces."
          </blockquote>
        </div>

        {/* Right — 2×2 highlight cards */}
        <div className="grid grid-cols-2 gap-5">
          {aboutHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Music;
            return (
              <GlassCard key={idx} className="flex flex-col items-start gap-3">
                <Icon size={32} className="text-[#b58709]" />
                <h3 className="text-xl font-semibold font-poppins text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 font-poppins leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

