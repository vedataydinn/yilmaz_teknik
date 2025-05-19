'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    id: 'buzdolabi',
    title: 'Buzdolabı Tamiri',
    description: 'Soğutma problemleri, motor arızaları, gaz kaçakları ve tüm buzdolabı sorunlarınızı çözüyoruz.',
    image: '/images/buzdolabı.png',
  },
  {
    id: 'camasir',
    title: 'Çamaşır Makinesi Tamiri',
    description: 'Su almama, sıkma yapmama, gürültülü çalışma ve diğer tüm arızalarda çözüm sunuyoruz.',
    image: '/images/camasırmakinesi.png',
  },
  {
    id: 'elektrik-supurge',
    title: 'Elektrik Süpürgesi Tamiri',
    description: 'Çekiş gücü azalması, motor arızaları ve tüm süpürge sorunlarınıza ekonomik çözümler.',
    image: '/images/supurge.png',
  },
  {
    id: 'klima',
    title: 'Klima Montaj-Bakım ve Tamiri',
    description: 'Klima montajı,Periyodik bakım, gaz dolumu, arıza tespiti ve tamiri ile klimanızı ilk günkü gibi çalıştırıyoruz.',
    image: '/images/klima.png',
  },
  {
    id: 'diger',
    title: 'Diğer Beyaz Eşyalar',
    description: 'Bulaşık makinesi, fırın, ocak ve diğer tüm ev aletlerinizin tamir ve bakımını yapıyoruz.',
    image: '/images/firin.png',
  },
  {
    id: 'bakim',
    title: 'Periyodik Bakım',
    description: 'Tüm beyaz eşyalarınızın periyodik bakımlarını yaparak ömrünü uzatıyoruz.',
    image: '/images/tamirler.png',
  }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        }
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="service-card flex flex-col items-center overflow-hidden">
      <div className="w-full h-48 mb-4 relative overflow-hidden rounded-t-lg">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-red-800 mb-2 text-center">{service.title}</h3>
      <p className="text-gray-600 text-center">{service.description}</p>
    </div>
  );
};

const Services = () => {
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
    <section id="services" ref={sectionRef} className="section bg-red-50">
      <div className="container mx-auto">
        <div ref={titleRef}>
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            <span className="font-semibold text-red-700 animate-pulse">Yılmaz Teknik</span> olarak uzman kadromuzla tüm beyaz eşya ve klima modellerinde 
            profesyonel tamir ve bakım hizmetleri sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 