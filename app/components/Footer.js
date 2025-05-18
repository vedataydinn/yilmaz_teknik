'use client';

import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-red-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.svg" 
                alt="Yılmaz Teknik Logo" 
                width={150} 
                height={40}
                className="brightness-0 invert" // Logoyu beyaz yapar
              />
            </div>
            <p className="text-red-100 mb-4">
              Elazığ'da beyaz eşya ve klima tamir hizmetlerinde kalite ve güvenin adresi.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:+905415302349" 
                className="bg-white text-red-900 p-2 rounded-full hover:bg-red-100 transition-colors"
                aria-label="Telefon"
              >
                <FaPhone />
              </a>
              <a 
                href="https://wa.me/905415302349" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 p-2 rounded-full hover:bg-red-100 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-100">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-red-200 hover:text-white transition-colors">
                  Buzdolabı Tamiri
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-red-200 hover:text-white transition-colors">
                  Çamaşır Makinesi Tamiri
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-red-200 hover:text-white transition-colors">
                  Klima Bakım ve Tamiri
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-red-200 hover:text-white transition-colors">
                  Elektrikli Süpürge Tamiri
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-red-200 hover:text-white transition-colors">
                  Periyodik Bakım
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-100">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-red-300 mt-1" />
                <span className="text-red-200">0541 530 23 49</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-300 mt-1" />
                <span className="text-red-200">Mustafa Paşa Mahallesi, Aksoy Sokak, No: 3A, Elazığ Merkez</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-red-300 mt-1" />
                <div>
                  <span className="text-red-200 block">Hafta içi: 08:30 - 18:30</span>
                  <span className="text-red-200 block">Cumartesi: 09:00 - 17:00</span>
                  <span className="text-red-200 block">Pazar: Kapalı</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-800 pt-6 text-center">
          <p className="text-red-300 text-sm">
            &copy; {currentYear} <span className="animate-pulse">Samet Yılmaz Teknik</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 