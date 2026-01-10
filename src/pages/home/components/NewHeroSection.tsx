import { useEffect, useState } from 'react';
import profileImage from '../../../assets/profile.jpg';

export default function NewHeroSection() {

  return (
    <div className="h-auto md:h-full md:flex md:items-center pt-4 md:pt-24 pb-8 md:pb-0 px-6 md:pl-16 md:pr-0">
      <div className="w-full max-w-[450px] mx-auto md:mx-0">
        {/* Profile Card */}
        <div
          className="bg-white rounded-3xl p-5 md:p-8 w-full max-w-[450px] mx-auto shadow-2xl animate-fade-in"
          style={{
            animation: 'fadeSlideUp 1s ease-out forwards',
          }}
        >
          {/* Profile Image */}
          <div className="relative mb-4 md:mb-6 rounded-2xl overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[#8B4513] opacity-30 z-10"></div>
            <img
              src={profileImage}
              alt="Suhried Datta"
              className="w-full h-[400px] md:h-[420px] object-cover object-top relative z-0"
            />
            
            {/* Decorative Dashed Line */}
            <svg
              className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-16 md:w-24 md:h-24 z-20"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M 5 59 Q 32 25 59 5"
                stroke="#F36A2F"
                strokeWidth="3"
                strokeDasharray="5 5"
                fill="none"
              />
              <circle cx="59" cy="5" r="8" fill="#F36A2F" />
            </svg>
          </div>

          {/* Name and Bio */}
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">Suhried Datta</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Senior DevOps Engineer & Cloud Architect
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 md:gap-3">
            <a
              href="https://github.com/suhried"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-[#F36A2F] hover:border-[#F36A2F] hover:scale-110 transition-all duration-300 cursor-pointer bg-white"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-xl" style={{ color: '#F36A2F' }}></i>
            </a>
            <a
              href="https://linkedin.com/in/suhried"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-[#F36A2F] hover:border-[#F36A2F] hover:scale-110 transition-all duration-300 cursor-pointer bg-white"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-xl" style={{ color: '#F36A2F' }}></i>
            </a>
            <a
              href="https://wa.me/+8801683323276"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-[#F36A2F] hover:border-[#F36A2F] hover:scale-110 transition-all duration-300 cursor-pointer bg-white"
              aria-label="WhatsApp"
            >
              <i className="ri-whatsapp-fill text-xl" style={{ color: '#F36A2F' }}></i>
            </a>
            <a
              href="mailto:suhried@gmail.com"
              className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-[#F36A2F] hover:border-[#F36A2F] hover:scale-110 transition-all duration-300 cursor-pointer bg-white"
              aria-label="Gmail"
            >
              <i className="ri-mail-fill text-xl" style={{ color: '#F36A2F' }}></i>
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
      `}</style>
    </div>
  );
}
