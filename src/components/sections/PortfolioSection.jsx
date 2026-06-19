import { Button } from '@heroui/react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { portfolioItems } from '../../data/siteData';
import { Play, ExternalLink, Music } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <SectionWrapper id="portfolio">
      <SectionHeading 
        label="OUR WORK" 
        title="Portfolio" 
        subtitle="Explore some of our recent projects. From raw demos to chart-topping hits, we help artists realize their sonic vision."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <GlassCard key={item.id} className="p-0 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[#b58709]/10 via-black to-red-900/10 flex items-center justify-center relative group">
              <Music className="text-white/20 size-16" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#b58709] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-[#b58709]/30">
                  <Play className="text-black fill-black ml-1 size-5" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <span className="inline-block rounded-full bg-[#b58709]/10 text-[#b58709] text-xs font-semibold px-3 py-1 mb-3">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold font-poppins text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 font-poppins mt-2 leading-relaxed">
                {item.description}
              </p>
              
              <Button 
                variant="outline"
                className="mt-6 text-white px-5 py-2 h-auto text-xs font-semibold tracking-wide border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 rounded-full backdrop-blur-sm flex items-center gap-2"
              >
                <span>View Project</span>
                <ExternalLink size={14} />
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;

