'use client';

import { useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkedAlt, FaClock } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.fromTo(titleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(infoRef.current, 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8 }, 
      "-=0.4"
    )
    .fromTo(mapRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8 }, 
      "-=0.6"
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section bg-red-50 py-20">
      <div className="container mx-auto">
        <div ref={titleRef}>
          <h2 className="section-title">İletişim</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Size en hızlı şekilde hizmet vermek için iletişim kanallarımızdan bize ulaşabilirsiniz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div ref={infoRef} className="bg-white p-6 rounded-xl shadow-md">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <FaPhone className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Telefon</h3>
                  <p className="text-gray-700">Hızlı iletişim için bizi arayın:</p>
                  <a href="tel:+905415302349" className="text-red-600 font-medium text-lg block mt-1 hover:underline">
                    0541 530 23 49
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">WhatsApp</h3>
                  <p className="text-gray-700">WhatsApp üzerinden bize yazın:</p>
                  <a 
                    href="https://wa.me/905415302349?text=Merhaba,%20teknik%20servis%20hizmeti%20almak%20istiyorum." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium text-lg block mt-1 hover:underline"
                  >
                    0541 530 23 49
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <FaMapMarkedAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Adres</h3>
                  <p className="text-gray-700">
                    Mustafa Paşa Mahallesi, <br />
                    Aksoy Sokak, No: 3A, <br />
                    Elazığ Merkez
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-700">
                    Hafta içi: 08:00 - 19:00 <br />
                    Cumartesi: 08:00 - 20:00 <br />
                    Pazar: Kapalı
                  </p>
                  <p className="text-sm text-red-600 mt-1">*Acil durumlarda 7/24 hizmet vermekteyiz.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={mapRef} className="bg-white p-6 rounded-xl shadow-md h-full">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Konum</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps?q=38.6711944,39.2331389&hl=tr&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yılmaz Teknik Konum"
              ></iframe>
              <div className="mt-2 text-center">
                <a href="https://maps.app.goo.gl/e4HynpS3E6uD1QXc9" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-800">
                  Google Haritalar'da Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 