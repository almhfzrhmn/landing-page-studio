import { Mic, Sliders, Disc3, Music4, Users, Podcast } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { ServicesData } from '@/data/servicesData';

const iconMap = {
  Mic,
  Sliders,
  Disc3,
  Music4,
  Users,
  Podcast,
};

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        label="WHAT WE DO"
        title="Our Services"
        subtitle="Comprehensive audio services tailored to bring your creative vision to life — from first note to final master."
        align="center"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {ServicesData.map((service, idx) => {
          const Icon = iconMap[service.icon] || Mic;
          return (
            <GlassCard key={idx}>
              <div className="w-12 h-12 rounded-xl bg-[#b58709]/10 flex items-center justify-center mb-4">
                <Icon size={24} className="text-[#b58709]" />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-white">
                {service.title}
              </h3>
              <p className="text-sm text-white/60 font-poppins leading-relaxed mt-2">
                {service.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

