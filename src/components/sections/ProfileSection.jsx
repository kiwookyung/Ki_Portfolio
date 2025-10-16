import { MapPin, Mail, Phone, Github, FileText } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProfileSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // 마크다운 스타일 강조 텍스트 파싱 함수
  const parseMarkdownText = (text) => {
    // **텍스트** 패턴을 찾아서 강조된 텍스트로 변환
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // **로 감싸진 텍스트는 강조 스타일 적용
        const content = part.slice(2, -2); // ** 제거
        return (
          <span
            key={index}
            className="font-bold text-blue-700 bg-blue-50 px-1 py-0.5 rounded-md"
          >
            {content}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary transition-all duration-300">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                  <img
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
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

                {/* Action Links */}
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
                    href={`mailto:${personalInfo.profile.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href={personalInfo.profile.resume}
                    download
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Resume"
                  >
                    <FileText size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Vision */}
              <div className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Vision
                </h3>
                <p className="text-lg text-theme-secondary leading-relaxed font-medium">
                  {personalInfo.vision}
                </p>
              </div>

              {/* About Me */}
              <div className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-display font-black text-theme-primary mb-6">
                  About Me
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-theme-secondary leading-relaxed whitespace-pre-line font-body">
                    {parseMarkdownText(personalInfo.longDescription)}
                  </p>
                </div>
              </div>

              {/* Strengths Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-xl p-6 shadow-xl border-2 border-theme-accent hover:border-theme-primary hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="text-4xl mb-3">{strength.icon}</div>
                    <h4 className="text-lg font-display font-black text-theme-primary mb-2">
                      {strength.title}
                    </h4>
                    <p className="text-theme-secondary text-sm leading-relaxed font-body">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <h3 className="text-2xl font-display font-black text-theme-primary mb-6">
                  관심 분야
                </h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-theme-card-subtle to-theme-card text-theme-secondary px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-theme-accent hover:border-theme-primary hover:text-theme-primary font-body"
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


