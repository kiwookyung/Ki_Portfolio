import { Sparkles, Mail, Github, FileText, Code2, Palette } from 'lucide-react';
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
      color: 'from-text-primary to-text-secondary',
      bgColor: 'bg-background-alt',
      external: true,
    },
    {
      title: 'Email',
      description: '이메일로 연락하기',
      url: `mailto:${personalInfo.profile.email}`,
      icon: <Mail size={32} />,
      color: 'from-theme-primary to-theme-primary-dark',
      bgColor: 'bg-theme-card-subtle',
      external: false,
    },
    {
      title: 'Resume',
      description: '이력서 다운로드',
      url: personalInfo.profile.resume,
      icon: <FileText size={32} />,
      color: 'from-theme-accent to-theme-primary',
      bgColor: 'bg-theme-card-subtle',
      external: false,
      download: true,
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
      code: `const [text, setText] = useState('');
const fullText = 'Frontend Developer';

useEffect(() => {
  let index = 0;
  const timer = setInterval(() => {
    setText(fullText.slice(0, index));
    index++;
    if (index > fullText.length) {
      clearInterval(timer);
    }
  }, 100);
  return () => clearInterval(timer);
}, []);`,
    },
    {
      title: 'Scroll Animations',
      description: '스크롤 트리거 기반의 부드러운 등장 애니메이션',
      icon: <Sparkles size={24} />,
      demo: '모든 섹션에서 확인 가능',
      tech: ['Intersection Observer', 'CSS Transitions'],
      gradient: 'from-purple-500 to-pink-500',
      code: `const [ref, isVisible] = useIntersectionObserver();

return (
  <div 
    ref={ref}
    className={\`transition-all duration-1000 \${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-10'
    }\`}
  >
    {/* Content */}
  </div>
);`,
    },
    {
      title: '3D Hover Effects',
      description: 'CSS Transform을 활용한 3D 카드 효과',
      icon: <Palette size={24} />,
      demo: 'Projects & Skills Section',
      tech: ['CSS Transform', 'Perspective'],
      gradient: 'from-orange-500 to-red-500',
      code: `<div className="
  transform-gpu 
  perspective-1000 
  hover:scale-105 
  hover:rotate-y-2 
  transition-all 
  duration-500
">
  <div className="card">
    3D Card Content
  </div>
</div>`,
    },
  ];

  // 기술 스택 카테고리
  const techStacks = {
    main: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-500' },
      { name: 'Tailwind CSS', color: 'bg-cyan-500' },
      { name: 'Vue.js', color: 'bg-green-500' },
    ],
    learning: [
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'Next.js', color: 'bg-gray-800' },
      { name: 'Node.js', color: 'bg-green-600' },
    ],
    interest: [
      { name: 'React Native', color: 'bg-purple-500' },
      { name: 'Three.js', color: 'bg-gray-900' },
      { name: 'GraphQL', color: 'bg-pink-500' },
    ],
  };

  return (
    <div className="min-h-screen bg-theme">
      {/* Page Header */}
      <div
        ref={headerRef}
        className={`py-20 transition-all duration-1000 relative overflow-hidden ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{
          background: 'linear-gradient(135deg, rgba(37, 204, 8, 0.8), rgba(26, 138, 6, 0.9))'
        }}
      >
        <div className="absolute inset-0 bg-theme-primary opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles size={24} className="text-white" />
            <span className="font-semibold text-white">Extras</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-6 text-white">
            Playground & Links
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto font-body opacity-90">
            기술적 창의성과 지속적인 학습을 공유합니다
          </p>
        </div>
      </div>

      {/* Links Section */}
      <section className="py-20 bg-theme-card-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={linksRef}
            className={`text-center mb-16 transition-all duration-1000 ${isLinksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-primary mb-4">
              Connect With Me
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
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
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download}
                className={`group ${link.bgColor} rounded-2xl p-8 shadow-xl border border-theme-accent hover:border-theme-primary hover:shadow-2xl hover:scale-105 transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-theme-primary mb-2 group-hover:text-theme-primary-dark transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-theme-secondary mb-4">
                  {link.description}
                </p>
                <div className="flex items-center text-theme-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>{link.download ? '다운로드' : link.external ? '방문하기' : '연락하기'}</span>
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="py-20 bg-theme">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={playgroundRef}
            className={`text-center mb-16 transition-all duration-1000 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-black text-theme-primary mb-4">
              UI Playground
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto font-body">
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
                className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-6 shadow-xl border border-theme-accent hover:border-theme-primary hover:shadow-2xl transition-all duration-500 flex flex-col"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-theme-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-theme-secondary mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* 코드 예제 */}
                <div className="mb-4 bg-gray-900 rounded-lg p-4 overflow-x-auto flex-grow">
                  <pre className="text-xs text-green-400 font-mono leading-relaxed">
                    <code>{item.code}</code>
                  </pre>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-theme-secondary uppercase">Demo:</span>
                  <p className="text-sm text-theme-primary mt-1">{item.demo}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-theme-card-subtle text-theme-secondary px-3 py-1 rounded-full text-xs font-medium border border-theme-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Categories */}
          <div className="mt-16 space-y-6">
            {/* 주요 사용 스택 */}
            <div
              className={`bg-gradient-to-r from-theme-card-subtle to-theme-card rounded-2xl p-8 border-2 border-theme-accent transition-all duration-1000 delay-700 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-theme-primary rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-theme-primary">
                    주요 사용 스택
                  </h3>
                  <div className="w-3 h-3 bg-theme-primary rounded-full animate-pulse"></div>
                </div>
                <p className="text-theme-secondary mb-6">
                  현재 프로젝트에서 활발히 사용 중인 기술들
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {techStacks.main.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 현재 공부 중 */}
            <div
              className={`bg-gradient-to-r from-theme-card-subtle to-theme-card rounded-2xl p-8 border-2 border-theme-accent transition-all duration-1000 delay-800 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-theme-accent rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-theme-primary">
                    현재 공부 중
                  </h3>
                  <div className="w-3 h-3 bg-theme-accent rounded-full animate-pulse"></div>
                </div>
                <p className="text-theme-secondary mb-6">
                  더 나은 개발자가 되기 위해 학습하고 있는 기술들
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {techStacks.learning.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 관심 기술 */}
            <div
              className={`bg-gradient-to-r from-theme-card-subtle to-theme-card rounded-2xl p-8 border-2 border-theme-accent transition-all duration-1000 delay-900 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-theme-primary-dark rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-theme-primary">
                    관심 기술
                  </h3>
                  <div className="w-3 h-3 bg-theme-primary-dark rounded-full animate-pulse"></div>
                </div>
                <p className="text-theme-secondary mb-6">
                  앞으로 배워보고 싶은 흥미로운 기술들
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {techStacks.interest.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 포트폴리오 기술 스택 요약 */}
            <div
              className={`bg-gradient-to-r from-theme-card-subtle to-theme-card rounded-2xl p-6 border border-theme-accent transition-all duration-1000 delay-1000 ${isPlaygroundVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="text-center">
                <p className="text-sm text-theme-secondary leading-relaxed">
                  💡 <strong>이 포트폴리오는</strong> React, Tailwind CSS, Vite로 구축되었으며,<br />
                  모던 웹 기술과 UX 디자인 원칙을 적용하여 제작되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtrasPage;


