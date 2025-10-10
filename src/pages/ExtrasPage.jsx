import { Sparkles, ExternalLink, Github, BookOpen, Code2, Palette } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ExtrasPage = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [linksRef, isLinksVisible] = useIntersectionObserver();
  const [playgroundRef, isPlaygroundVisible] = useIntersectionObserver();

  const links = [
    {
      title: 'GitHub',
      description: '프로젝트 소스코드와 오픈소스 활동',
      url: personalInfo.profile.github,
      icon: <Github size={32} />,
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-50',
    },
    {
      title: 'Blog',
      description: '기술 블로그 & 학습 기록',
      url: personalInfo.profile.blog,
      icon: <BookOpen size={32} />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'LinkedIn',
      description: '프로페셔널 네트워크',
      url: personalInfo.profile.linkedin,
      icon: <ExternalLink size={32} />,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
    },
  ];

  const playgroundItems = [
    {
      title: 'Typing Animation',
      description: '타이핑 효과로 텍스트를 표현하는 인터랙티브 애니메이션',
      icon: <Code2 size={24} />,
      demo: 'Hero Section에서 확인 가능',
      tech: ['React', 'useState', 'useEffect'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Scroll Animations',
      description: '스크롤 트리거 기반의 부드러운 등장 애니메이션',
      icon: <Sparkles size={24} />,
      demo: '모든 섹션에서 확인 가능',
      tech: ['Intersection Observer', 'CSS Transitions'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: '3D Hover Effects',
      description: 'CSS Transform을 활용한 3D 카드 효과',
      icon: <Palette size={24} />,
      demo: 'Projects & Skills Section',
      tech: ['CSS Transform', 'Perspective'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Page Header */}
      <div
        ref={headerRef}
        className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Sparkles size={24} />
            <span className="font-semibold">Extras</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Playground & Links
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            기술적 창의성과 지속적인 학습을 공유합니다
          </p>
        </div>
      </div>

      {/* Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={linksRef}
            className={`text-center mb-16 transition-all duration-1000 ${isLinksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 플랫폼에서 저와 소통해보세요
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isLinksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${link.bgColor} rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>방문하기</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={playgroundRef}
            className={`text-center mb-16 transition-all duration-1000 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              UI Playground
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              이 포트폴리오에서 사용된 인터랙티브 요소들
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {playgroundItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Demo:</span>
                  <p className="text-sm text-blue-600 mt-1">{item.demo}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Info */}
          <div
            className={`mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 transition-all duration-1000 delay-700 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                이 포트폴리오는...
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                React, Tailwind CSS, Vite로 구축되었으며,<br />
                모던 웹 기술과 UX 디자인 원칙을 적용하여 제작되었습니다.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">React</span>
                <span className="bg-cyan-500 text-white px-4 py-2 rounded-full font-semibold">Tailwind CSS</span>
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Vite</span>
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">React Router</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtrasPage;


