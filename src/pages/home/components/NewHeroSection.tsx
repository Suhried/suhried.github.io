import { useEffect, useState } from 'react';
import profileImage from '../../../assets/profile.jpg';

export default function NewHeroSection() {

  return (
    <div className="h-auto md:h-full md:flex md:items-center pt-4 md:pt-24 pb-8 md:pb-0 px-6 md:pl-16 md:pr-0">
      <div className="w-full max-w-[320px] mx-auto md:mx-0">
        {/* Profile Card */}
        <div
          className="bg-white rounded-3xl p-5 md:p-8 w-full max-w-[320px] mx-auto shadow-2xl animate-fade-in"
          style={{
            animation: 'fadeSlideUp 1s ease-out forwards',
          }}
        >
          {/* Profile Image */}
          <div className="relative mb-4 md:mb-6 rounded-2xl overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[#8B4513] opacity-30 z-10"></div>
            <img
              src={profileImage}
              alt="Suhried Datta - Best DevOps Engineer & SRE in Bangladesh, Cloud Infrastructure Architect"
              className="w-full h-[320px] md:h-[340px] object-cover object-top relative z-0"
            />
          </div>

          {/* Name and Bio */}
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">Suhried Datta</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Senior DevOps Engineer, SRE & Cloud Infrastructure Architect
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 md:gap-3">
            <a
              href="https://github.com/suhried"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-0 hover:border hover:border-[#F36A2F] hover:rounded-lg cursor-pointer group"
              aria-label="GitHub"
            >
              <i className="ri-github-line text-xl md:text-2xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
              href="https://linkedin.com/in/suhried"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-0 hover:border hover:border-[#F36A2F] hover:rounded-lg cursor-pointer group"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-line text-xl md:text-2xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
              href="https://wa.me/+8801683323276"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-0 hover:border hover:border-[#F36A2F] hover:rounded-lg cursor-pointer group"
              aria-label="WhatsApp"
            >
              <i className="ri-whatsapp-line text-xl md:text-2xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
              href="mailto:suhried@gmail.com"
              className="social-icon-link w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-0 hover:border hover:border-[#F36A2F] hover:rounded-lg cursor-pointer group"
              aria-label="Gmail"
            >
              <i className="ri-mail-line text-xl md:text-2xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .social-icon-link {
          transition: border 200ms ease-out, border-radius 200ms ease-out, background-color 200ms ease-out 150ms;
        }
        
        .social-icon-link:hover {
          background-color: #F36A2F;
        }
      `}</style>
    </div>
  );
}
