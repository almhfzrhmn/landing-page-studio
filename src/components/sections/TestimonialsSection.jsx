import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { testimonials } from '../../data/siteData';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="reviews">
      <SectionHeading 
        label="REVIEWS" 
        title="What Clients Say" 
        subtitle="Don't just take our word for it. Hear from the artists, producers, and creators who make SoundSpace their creative home."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <GlassCard key={index} className="flex flex-col h-full">
            <Quote className="text-[#b58709]/30 size-8 mb-4" />
            
            <p className="text-white/70 font-poppins text-sm leading-relaxed italic mb-6 flex-grow">
              "{testimonial.content}"
            </p>
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`size-4 ${i < testimonial.rating ? 'text-[#b58709] fill-[#b58709]' : 'text-white/20'}`} 
                />
              ))}
            </div>
            
            <div className="h-px bg-white/10 my-4" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b58709]/30 to-red-900/30 flex items-center justify-center text-white font-semibold text-sm shrink-0 border border-white/10">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-poppins">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-white/50 font-poppins">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;

