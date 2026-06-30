import { Eye, Camera } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { GalleryData } from '@/data/galleryData';

const gradients = [
  'bg-gradient-to-br from-[#b58709]/10 via-transparent to-red-900/10',
  'bg-gradient-to-tl from-[#b58709]/15 via-transparent to-white/5',
  'bg-gradient-to-tr from-red-900/10 via-transparent to-[#b58709]/10',
  'bg-gradient-to-bl from-white/5 via-transparent to-[#b58709]/10',
];

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <SectionHeading
        label="OUR SPACE"
        title="Studio Gallery"
        subtitle="Step inside SoundSpace — explore the rooms, consoles, and creative corners where records come to life."
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {GalleryData.map((item, idx) => {
          const isLarge = idx === 0 || idx === 5;
          const gradient = gradients[idx % gradients.length];

          return (
            <div
              key={idx}
              className={`gallery-item group relative cursor-pointer rounded-2xl overflow-hidden ${
                isLarge
                  ? 'md:col-span-2 md:row-span-2 aspect-video md:aspect-auto'
                  : 'aspect-square'
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`w-full h-full ${gradient} flex items-center justify-center ${
                  isLarge ? 'min-h-[280px]' : ''
                }`}
              >
                <img
                  src={item.src}
                >
                </img>
                <Camera
                  size={isLarge ? 48 : 32}
                  className="text-white/15"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center rounded-2xl gap-2">
                <Eye size={28} className="text-[#b58709]" />
                {item.category && (
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#b58709] font-poppins">
                    {item.category}
                  </span>
                )}
                {item.alt && (
                  <p className="text-sm text-white/70 font-poppins text-center px-4">
                    {item.alt}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

