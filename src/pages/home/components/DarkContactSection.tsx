export default function DarkContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 px-6 md:pl-8 md:pr-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8">
          LET'S BUILD
          <br />
          <span className="text-gradient">TOGETHER</span>
        </h2>
        
        <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl">
          Interested in cloud architecture, Kubernetes, or infrastructure automation? 
          Let's build scalable systems with measurable impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-dark-lighter rounded-2xl p-6 border border-dark-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:suhried@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-[#F36A2F] group-hover:bg-[#F36A2F] transition-all duration-300">
                    <i className="ri-mail-fill text-xl" style={{ color: '#F36A2F' }}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-base font-medium">suhried@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/+8801683323276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-[#F36A2F] group-hover:bg-[#F36A2F] transition-all duration-300">
                    <i className="ri-whatsapp-fill text-xl" style={{ color: '#F36A2F' }}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-base font-medium">+880 1683 323276</p>
                  </div>
                </a>

                <a
                  href="https://github.com/suhried"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-[#F36A2F] group-hover:bg-[#F36A2F] transition-all duration-300">
                    <i className="ri-github-fill text-xl" style={{ color: '#F36A2F' }}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <p className="text-base font-medium">github.com/suhried</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/suhried"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-[#F36A2F] group-hover:bg-[#F36A2F] transition-all duration-300">
                    <i className="ri-linkedin-fill text-xl" style={{ color: '#F36A2F' }}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="text-base font-medium">linkedin.com/in/suhried</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hire Me Section */}
          <div className="bg-dark-lighter rounded-2xl p-6 border border-dark-border flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Work Together?</h3>
            <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed">
              Looking for a Senior DevOps Engineer to architect cloud infrastructure, 
              automate CI/CD pipelines, or scale Kubernetes platforms? Let's discuss how I can help.
            </p>
            <a
              href="mailto:suhried@gmail.com?subject=Hire%20Me%20-%20DevOps%20Opportunity"
              className="inline-block px-8 py-4 bg-[#F36A2F] text-white font-semibold rounded-lg hover:bg-[#ff7a3f] transition-colors cursor-pointer text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
