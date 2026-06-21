import { Mic, Sliders, Disc3, Music4, Users, Podcast } from 'lucide-react';
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { ServicesData } from "@/data/servicesData";
import { useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="services">
      <SectionHeading label="WHAT WE DO" title="Our Services" align="center" />
      <div className="min-h-screen bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 mb-2 text-sm font-bold">Our Services</p>
          <h2 className="text-2xl text-gray-400 font-semibold">
            Comprehensive audio services tailored to bring your creative vision
            to life - from first note to final master.
          </h2>

          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="border-t border-zinc-800 transition duration-300 ease-in-out"
            >
              {/* HEADER */}
              <button
                onClick={() => setActive(service.id)}
                className="w-full flex justify-between items-center py-8 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-[12px] underline font-light">More Details</p>
              </button>

              {/* ACTIVE CONTENT */}
              {active === service.id && service.description  && (
                <div className="pb-10 pl-20">
                  <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}
                    <div>
                      <p className="text-zinc-300 mb-6 text-lg tracking-tighter leading-tight">
                        {service.description}
                      </p>
                      <ul className="space-y-2 text-zinc-300">
                        {service.features.map((feature, i) => (
                          <li 
                            key={i}
                          >
                            - {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
                      {service.images.map((image, i) => (
                        <img
                          key={i}

                          // TO DO : ADD IMAGES
                          src={image}
                          alt=''
                          className='w-full h-40 rounded-md transition-all duration-300 ease-in-out hover:scale-110'
                        >
                        </img>
                      ))}
                    </div>

                  </div>

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
