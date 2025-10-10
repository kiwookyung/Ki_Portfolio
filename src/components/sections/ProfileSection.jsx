import { MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProfileSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-gray-100">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  {personalInfo.name.charAt(0)}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-center text-blue-600 font-semibold mb-6">
                  Frontend Developer
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${personalInfo.profile.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{personalInfo.profile.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} />
                    <span className="text-sm">{personalInfo.profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm">{personalInfo.profile.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-200">
                  <a
                    href={personalInfo.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={personalInfo.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={personalInfo.profile.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Blog"
                  >
                    <Globe size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {personalInfo.vision}
                </p>
              </div>

              {/* About Me */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  About Me
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {personalInfo.longDescription}
                  </p>
                </div>
              </div>

              {/* Strengths Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="text-4xl mb-3">{strength.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  관심 분야
                </h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;


