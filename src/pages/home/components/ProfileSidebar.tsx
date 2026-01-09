export default function ProfileSidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[480px] bg-accent-orange overflow-hidden">
      {/* Profile Image */}
      <div className="relative h-full">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20confident%20software%20engineer%20in%20modern%20minimalist%20studio%20setting%20with%20clean%20neutral%20background%20warm%20natural%20lighting%20facing%20camera%20with%20friendly%20approachable%20expression%20wearing%20casual%20professional%20attire%20high%20quality%20photography&width=480&height=1080&seq=profile-sidebar-001&orientation=portrait"
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Profile Info Card */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Suhried</h3>
            <p className="text-sm text-gray-600 mb-4">
              A Software Engineer who has developed countless innovative solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <i className="ri-dribbble-line text-gray-700 text-lg"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-line text-gray-700 text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-gray-700 text-lg"></i>
              </a>
              <a
                href="mailto:your@email.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-gray-700 text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
