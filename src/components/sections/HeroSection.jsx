import { useState, useEffect } from 'react';
import { ArrowDown, Github, FileText, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ThemeSection from '../common/ThemeSection';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = personalInfo.heroSlogan;

  // 타이핑 효과
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [isVisible, fullText]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeSection themeName="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={ref}
        className="relative min-h-screen flex items-center justify-center bg-theme overflow-hidden"
      >
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 204, 8, 0.8), rgba(26, 138, 6, 0.9))'
            }}
          ></div>
          <div className="absolute w-96 h-96 bg-theme-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-0 -left-4"></div>
          <div className="absolute w-96 h-96 bg-theme-primary-dark rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-0 -right-4"></div>
          <div className="absolute w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 bottom-8 left-20"></div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* 슬로건 (타이핑 효과) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tight">
              <span className="inline-block min-h-[1.2em] whitespace-pre-line">
                {typedText}
                {isVisible && (
                  <span className="inline-block w-0.5 h-12 bg-white ml-1 animate-blink"></span>
                )}
              </span>
            </h1>

            {/* 타이틀 */}
            <h2
              className={`text-5xl sm:text-6xl md:text-7xl font-display font-black text-white mb-8 transition-all duration-1000 delay-300 ${isTypingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
              {personalInfo.heroTitle}
            </h2>

            {/* 한 줄 소개 */}
            <p
              className={`text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto font-body opacity-90 transition-all duration-1000 delay-500 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              {personalInfo.shortDescription}
            </p>

            {/* CTA 버튼들 */}
            <div
              className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-700 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              <a
                href="#featured-projects"
                className="bg-white text-theme-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                프로젝트 보기
              </a>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform border-2 border-white"
              >
                소개 보기
              </Link>
            </div>

            {/* 소셜 링크 */}
            <div
              className={`flex items-center justify-center gap-6 transition-all duration-1000 delay-900 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              <a
                href={personalInfo.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-theme-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href={`mailto:${personalInfo.profile.email}`}
                className="text-white hover:text-theme-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
              <a
                href={personalInfo.profile.resume}
                download
                className="text-white hover:text-theme-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label="Resume"
              >
                <FileText size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* 스크롤 다운 인디케이터 */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-theme-primary transition-colors duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </ThemeSection>
  );
};

export default HeroSection;
