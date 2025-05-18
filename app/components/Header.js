'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header yüksekliği kadar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Yılmaz Teknik Logo" 
            width={150} 
            height={40} 
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          />
        </div>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-red-900 hover:text-red-700 font-medium transition-colors">
            Hakkımızda
          </button>
          <button onClick={() => scrollToSection('services')} className="text-red-900 hover:text-red-700 font-medium transition-colors">
            Hizmetlerimiz
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-red-900 hover:text-red-700 font-medium transition-colors">
            İletişim
          </button>
          <a href="tel:+905415302349" className="btn-primary flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>0541 530 23 49</span>
          </a>
        </nav>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden text-red-900 p-2" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-red-900 hover:text-red-700 font-medium py-2 transition-colors">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('services')} className="text-red-900 hover:text-red-700 font-medium py-2 transition-colors">
              Hizmetlerimiz
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-red-900 hover:text-red-700 font-medium py-2 transition-colors">
              İletişim
            </button>
            <a href="tel:+905415302349" className="btn-primary flex items-center justify-center">
              <FaPhoneAlt className="mr-2" />
              <span>0541 530 23 49</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 