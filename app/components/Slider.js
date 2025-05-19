'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const slides = [
  {
    id: 'slide-1',
    image: '/images/buzdolabı.png',
    title: 'Buzdolabı Tamiri',
    description: 'Tüm buzdolabı modellerinde uzman teknik servis, arıza tespiti ve onarım hizmeti sunuyoruz.'
  },
  {
    id: 'slide-2',
    image: '/images/camasırmakinesi.png',
    title: 'Çamaşır Makinesi Tamiri',
    description: 'Su almama, sıkma yapmama, gürültülü çalışma ve diğer tüm arızalarda hızlı çözüm sunuyoruz.'
  },
  {
    id: 'slide-3',
    image: '/images/klima.png',
    title: 'Klima Montaj-Bakım ve Tamiri',
    description: 'Klima montaj,bakım ve tamiri ile yazın serin, kışın sıcak bir ortam sağlıyoruz.'
  }
];

const Slider = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(titleRef.current, 
      { y: 30, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="slider" ref={sectionRef} className="section bg-white py-24">
      <div className="container mx-auto">
        <div ref={titleRef}>
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Tüm beyaz eşya ve klima modellerinde profesyonel tamir ve bakım hizmeti
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mt-10 rounded-xl overflow-hidden shadow-xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="pb-16">
                <div className="relative h-[500px] w-full">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-lg text-gray-200 mb-4">{slide.description}</p>
                    <a href="tel:+905415302349" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300 inline-block">
                      Hemen Arayın
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider; 