'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.fromTo(textRef.current, 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(imageRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8 }, 
      "-=0.5"
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Hakkımızda</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={textRef} className="space-y-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-red-700 animate-pulse">Yılmaz Teknik</span> olarak, 
              beyaz eşya ve klima tamir hizmetlerinde güvenilir çözüm ortağınız olmaktan gurur duyuyoruz.
            </p>
            <p className="text-lg text-gray-700">
              İşlerinizi <strong>hızlı ve temiz</strong> yapan, deneyimli teknik ekibimizle 
              Elazığ ve çevresinde profesyonel hizmet sunuyoruz.
            </p>
            <p className="text-lg text-gray-700">
              Tüm beyaz eşya ve klima sorunlarınızı en kısa sürede, uygun fiyatlarla 
              ve garantili olarak çözüme kavuşturuyoruz.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex-1 min-w-[200px]">
                <h3 className="text-xl font-bold text-red-800 mb-2">Deneyim</h3>
                <p className="text-gray-700">Yılların tecrübesiyle kaliteli hizmet</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex-1 min-w-[200px]">
                <h3 className="text-xl font-bold text-red-800 mb-2">Güven</h3>
                <p className="text-gray-700">Müşteri memnuniyeti odaklı çalışma</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex-1 min-w-[200px]">
                <h3 className="text-xl font-bold text-red-800 mb-2">Kalite</h3>
                <p className="text-gray-700">Orijinal parça ve profesyonel tamir</p>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="flex justify-center">
            <div className="relative w-full max-w-md h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/tamir.png" 
                alt="Yılmaz Teknik Servis" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 