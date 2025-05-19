'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(imageRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.8 }, 
      "-=0.5"
    )
    .fromTo(buttonsRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=0.5"
    );
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-100 z-[-1]"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div ref={titleRef} className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 leading-tight">
            Beyaz Eşya & Klima <br className="hidden md:block" />
            <span className="text-red-600">Tamir Bakım ve Montaj</span>
          </h1>
          <p className="text-lg md:text-xl text-red-800 max-w-lg mx-auto md:mx-0">
            Uzman kadromuz ve kaliteli hizmet anlayışımızla tüm beyaz eşya ve klima sorunlarınızda yanınızdayız.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="tel:+905415302349" className="btn-primary flex items-center justify-center">
              <FaPhoneAlt className="mr-2" />
              <span>Hemen Ara: 0541 530 23 49</span>
            </a>
            <a 
              href="https://wa.me/905415302349?text=Merhaba,%20teknik%20servis%20hizmeti%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              <span>WhatsApp'tan Yaz</span>
            </a>
          </div>
        </div>
        <div ref={imageRef} className="mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg h-72 md:h-96">
            <Image 
              src="/images/beyazesya.png"
              alt="Beyaz Eşya Tamiri"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Dalgalı Alt Kenar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V52.57Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 