const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-mono">
              SD<span className="text-accent">_</span>
            </h3>
            <p className="text-gray-400 text-sm">
              © 2024 Suhried Datta. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent hover:bg-accent transition-all duration-300 cursor-pointer"
            >
              <i className="ri-linkedin-line text-lg"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent hover:bg-accent transition-all duration-300 cursor-pointer"
            >
              <i className="ri-github-line text-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent hover:bg-accent transition-all duration-300 cursor-pointer"
            >
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
          </div>

          <div className="flex items-center justify-end gap-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Copyright © 2026 Suhried Datta. All Rights Reserved. v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;